import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function TimeFilter(props) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [button,setButton]=useState("Search");
  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Start Time: ${startTime}, End Time: ${endTime}`);
    if(button==="Search"){
        props.setFilterBookingTime(startTime,endTime);
        setButton("Remove");
    }
    else{
        props.setFilterBookingTime("","");
        setStartTime("");
        setEndTime("");
        setButton("Search");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col sm="auto">
          <Form.Control
            type="datetime-local"
            id="startTime"
            value={startTime}
            onChange={handleStartTimeChange}
          />
        </Col>
        <Col sm="auto">
          <Form.Control
            type="datetime-local"
            id="endTime"
            value={endTime}
            onChange={handleEndTimeChange}
          />
        </Col>
        <Col sm="auto">
          <Button disabled={startTime.length===0 && endTime.length===0} variant="primary" type="submit">
            {button}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default TimeFilter;
