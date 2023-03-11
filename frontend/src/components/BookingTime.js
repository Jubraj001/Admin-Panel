import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

export default function BookingTime(props) {
  const [selectedOption, setSelectedOption] = useState("upcoming");

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
    props.setBookingTime(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect} style={{marginLeft:10}}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {selectedOption === "upcoming" ? "Upcoming" : "Past"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="upcoming">Upcoming</Dropdown.Item>
        <Dropdown.Item eventKey="past">Past</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}