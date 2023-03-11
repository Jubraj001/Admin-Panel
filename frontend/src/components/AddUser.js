import { useState, useContext } from 'react';
import userContext from '../context/userContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Form() {
  const [user, setUser] = useState({
    email: '',
    roomNumber: '',
    roomType: '',
    startTime: '',
    endTime: '',
  });
  const context = useContext(userContext);
  let navigate = useNavigate();
  const { addUser } = context;

  const onClickHandler = async (e) => {
    addUser(user.email, user.roomNumber, user.roomType, user.startTime, user.endTime);
    setUser({ email: '', roomNumber: '', roomType: '', startTime: '', endTime: '' });
    navigate('/');
  };
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="text-center mb-4">
          <h3>
            <strong>Add New Booking</strong>
          </h3>
          <p className="text-muted">Complete the form below to add a new booking</p>
        </div>
      </div>
      <div className="container d-flex justify-content-center ">
        <div style={{ width: '50vw', minWidth: '300px' }}>
          <div className="row">
            <div className="col">
              <label className="form-label">Email:</label>
              <input type="email" className="form-control" name="email" placeholder="Email" value={user.email} onChange={onChange} />
            </div>
            <div className="col">
              <label className="form-label">Room number:</label>
              <input type="text" className="form-control" name="roomNumber" placeholder="Room number" value={user.roomNumber} onChange={onChange} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label">Room Type:</label>
              <select className="form-select" name="roomType" value={user.roomType} onChange={onChange}>
                <option value="">Select a room type</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label">Start Time:</label>
              <input type="datetime-local" className="form-control" name="startTime" placeholder="Start Time" value={user.startTime} onChange={onChange} />
            </div>
            <div className="col">
              <label className="form-label">End Time:</label>
              <input type="datetime-local" className="form-control" name="endTime" placeholder="End Time" value={user.endTime} onChange={onChange} />
            </div>
          </div>
          <div className="d-flex justify-content-center my-2">
            <button type="submit" disabled={user.email.length === 0 || user.roomNumber.length === 0 || user.roomType.length === 0 || user.startTime.length === 0 || user.endTime.length === 0} className="btn btn-success" name="submit" onClick={onClickHandler}>Save</button>
                    <Link className="btn btn-danger mx-2" to="/">Cancel</Link>
                </div>
            </div>
        </div>
    </>
  )
}

