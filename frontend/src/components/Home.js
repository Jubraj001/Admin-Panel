import {useState} from 'react'
import {Link} from "react-router-dom";
import Filter from './Filter';
import Table from './Table';
export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  function setFilter(option,value){
    setSelectedOption(option);
    setInputValue(value);
  }
    return (
      <>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
            <Link className="btn btn-success mb-3 my-" to="/addUser">Add Booking</Link>
            <Filter setFilter={setFilter}/>
        </div>
      </div>
        {/* <div className="container" style={{margin:0}}>
            <Link className="btn btn-success mb-3" to="/addUser">Add Booking</Link>
        </div> */}
        <Table selectedOption={selectedOption} inputValue={inputValue}/>
    </>
  )
}
