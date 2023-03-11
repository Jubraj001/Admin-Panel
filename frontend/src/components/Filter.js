import React, { useState} from "react";

export default function Filter(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [button,setButton]=useState("Filter");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(button==="Filter"){
        props.setFilter(selectedOption,inputValue);
        setButton("Remove");
    }
    else{
        props.setFilter("","");
        setSelectedOption("");
        setInputValue("");
        setButton("Filter");
    }
  };

  return (
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label htmlFor="optionSelect" className="sr-only">
                Select an option
              </label>
              <select
                className="form-control"
                id="optionSelect"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="">--Select--</option>
                <option value="roomNumber">Room Number</option>
                <option value="roomType">Room Type</option>
              </select>
            </div>
            <div className="col-md-5">
              <label htmlFor="inputField" className="sr-only">
                {selectedOption === "roomNumber" ? "Room Number" : "Room Type"}
              </label>
              <input
                type="text"
                className="form-control"
                id="inputField"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={
                  selectedOption === "roomNumber"
                    ? "Enter room no."
                    : "Enter room type"
                }
              />
            </div>
            <div className="col-md-3">
                <button type="submit" className="btn btn-primary mb-2" disabled={button==="Filter" && (selectedOption.length===0 || inputValue.length===0)}>
                    {button}
                </button>
            </div>
          </form>
  );
}
