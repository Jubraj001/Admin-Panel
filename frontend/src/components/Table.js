import {useContext,useEffect,useRef,useState} from 'react';
import UserContext from'../context/userContext';
import TableItem from './TableItem';
export default function Table(props) {
    const context = useContext(UserContext);
    const {users,getUsers,editUser} = context;
    const [user,setUser]=useState({id:"",eEmail: "", eRoomNumber:"",eRoomType:"",eStartTime:"",eEndTime:""});
    const {selectedOption,inputValue}=props;
    useEffect(()=>{
          getUsers();
      },[]);
    const ref = useRef(null);
    const refClose = useRef(null);
    const onClickHandler =(e)=>{
        editUser(user.id,user.eEmail,user.eRoomNumber,user.eRoomType,user.eStartTime,user.eEndTime); 
        refClose.current.click();
    }
    const onChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const updateUser = (currentUser)=>{
        ref.current.click();
        setUser({id:currentUser._id, eEmail: currentUser.email,eRoomNumber: currentUser.roomNumber, eRoomType:currentUser.roomType,eStartTime:currentUser.startTime, eEndTime:currentUser.endTime}); // Will set the edit fields to the current value before editing
      }
    const filteredUsers = users.filter(user => {
    if (selectedOption === 'roomNumber') {
        return user.roomNumber === inputValue;
    } else if (selectedOption === 'roomType') {
        return user.roomType === inputValue;
    } else {
        return true; // return all users if no option is selected
    }
    });
    return (
        <>
        {/* Edit User */}

        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel"><strong>Edit Booking Information</strong></h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                    <label htmlFor="eEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" name="eEmail" id="eEmail" onChange={onChange} value={user.eEmail}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="eRoomNumber" className="form-label">Room Number</label>
                    <input type="text" className="form-control" name="eRoomNumber" id="eRoomNumber" onChange={onChange} value={user.eRoomNumber}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="eRoomType" className="form-label">Room Type</label>
                    <input type="text" className="form-control" name="eRoomType" id="eRoomType" onChange={onChange} value={user.eRoomType}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="eStartTime" className="form-label">Start Time</label>
                    <input type="datetime-local" className="form-control" name="eStartTime" id="eStartTime" onChange={onChange} value={user.eStartTime}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="eEndTime" className="form-label">End Time</label>
                    <input type="datetime-local" className="form-control" name="eEndTime" id="eEndTime" onChange={onChange} value={user.eEndTime}/>
                </div>
            </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-danger" ref={refClose} data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={onClickHandler}>Update User</button>
                </div>
            </div>
        </div>
        </div>
    {/* Edit User End */}

        <table className="table table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Room Number</th>
                        <th scope="col">Room Type</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user,ind)=>{
                        ind++;
                        return <TableItem key={user._id} user={user} ind={ind} updateUser={updateUser}/>
                    })}
                </tbody>
            </table>
            <div className="text-center">
                {users.length===0 && <h2 className="justify-content-center mx-2" style={{color:"#9d0000"}}><strong>No bookings yet...</strong></h2>}
            </div>
        </>
    )
}
