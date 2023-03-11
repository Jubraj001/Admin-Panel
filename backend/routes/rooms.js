const express = require('express');
const Room = require('../models/Room');
// const getUser = require('../middleware/getUser');

const router = express.Router();

// get all users
router.get("/", async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
// create a new user
router.post("/", async (req, res) => {
    const user = new User({
      email: req.body.email,
      roomNumber: req.body.roomNumber,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    });
  
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
// get a user by id
router.get("/:id", getUser, (req, res) => {
    res.json(res.user);
  });
  
// update a user by id
router.put("/:id", getUser, async (req, res) => {
    if (req.body.email != null) {
      res.user.email = req.body.email;
    }
  
    if (req.body.roomNumber != null) {
      res.user.roomNumber = req.body.roomNumber;
    }
  
    if (req.body.startTime != null) {
      res.user.startTime = req.body.startTime;
    }
  
    if (req.body.endTime != null) {
      res.user.endTime = req.body.endTime;
    }
  
    try {
      const updatedUser = await res.user.save();
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
// delete a user by id
router.delete("/:id", getUser, async (req, res) => {
    try {
      // await res.user.remove();
      await User.findByIdAndRemove(req.params.id);
      res.json({ message: "User deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports=router;