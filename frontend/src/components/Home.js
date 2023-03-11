import {useState} from 'react'
import {Link} from "react-router-dom";
import Filter from './Filter';
import Table from './Table';
import BookingTime from './BookingTime';
import TimeFilter from './TimeFilter';

export default function Home(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [booking,setBooking]=useState("upcoming");
  const [filterStartTime,setFilterStartTime]=useState("");
  const [filterEndTime,setFilterEndTime]=useState("");
  function setFilter(option,value){
    setSelectedOption(option);
    setInputValue(value);
  }
  function setBookingTime(dropdown){
    setBooking(dropdown);
    console.log(dropdown);
  }
  function setFilterBookingTime(start,end){
    setFilterStartTime(start);
    setFilterEndTime(end);
  }
  return (
      <>
      <div className="container-fluid" style={{marginTop:"70px"}}>
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-start">
            <Link className="btn btn-success mb-3 my-" to="/addUser">Add Booking</Link>
            <BookingTime setBookingTime={setBookingTime}/>
        </div>
        <TimeFilter setFilterBookingTime={setFilterBookingTime}/>
        <Filter setFilter={setFilter}/>
      </div>
      </div>
      <Table selectedOption={selectedOption} inputValue={inputValue} showAlert={props.showAlert} booking={booking} filterStartTime={filterStartTime} filterEndTime={filterEndTime}/>
    </>
  )
}
