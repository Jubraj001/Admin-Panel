import {useContext, useState, useRef} from 'react'
import UserContext from'../context/userContext';
let refundText;
export default function TableItem(props) {
  const {user,updateUser}=props;
  const context = useContext(UserContext);
  const {deleteUser} = context;   
  // const [refundText,setRefundText]=useState("");
  function onDeleteIcon (e){
    // e.preventDefault();
    let startTime = Date.parse(user.startTime);
    let timeDiff = startTime - Date.now(); // difference between current time and start time in milliseconds
    let hoursDiff = timeDiff / (1000 * 60 * 60); // difference in hours
    if (hoursDiff > 48) {
      refundText="Complete Refund";
    } else if (hoursDiff >= 24 && hoursDiff <= 48) {
      refundText="50% refund"
    } else {
      refundText="No refund"
    }
    console.log(refundText);
    ref.current.click();
  }
  const ref = useRef(null);
  const refClose = useRef(null);
  const onClickHandler =(e)=>{
    refClose.current.click();
    deleteUser(user._id);
    props.showAlert("Removed booking","danger");
  }

  
  return (
    <>
      {/* Delete User Start */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#deleteModal">
            Launch demo modal
      </button>

      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel"><strong>Remove Booking</strong></h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <h5><strong>{refundText}</strong></h5>
            Are you sure you want to remove the booking?
            </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-primary" ref={refClose} data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger" onClick={onClickHandler}>Remove Booking</button>
                </div>
            </div>
        </div>
      </div>
    {/* Delete User End */}
      <tr>
          <th scope="row">{props.ind}</th>
          <td>{user.email}</td>
          <td>{user.roomNumber}</td>
          <td>{user.roomType}</td>
          <td>{user.startTime}</td>
          <td>{user.endTime}</td>
          <td>
              <i className="fa-solid fa-pen-to-square fs-5 me-3" onClick={()=>updateUser(user)}></i>
              <i className="fa-solid fa-trash fs-5" onClick={() => onDeleteIcon()}></i>
          </td>
      </tr>
    </>
  )
}
