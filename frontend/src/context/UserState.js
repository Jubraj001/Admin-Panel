import UserContext from './userContext';
import {useState} from 'react';

const UserState=(props)=>{
    const host="http://localhost:5000";
    const [users,setUsers] = useState([]);

    // Get all the users
    const getUsers=async()=>{
        // API CALL
        const response = await fetch(`${host}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        setUsers(json);
    }
    // Adding a user
    const addUser = async(email,roomNumber,roomType,startTime,endTime,callback)=>{
        const response = await fetch(`${host}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                roomNumber,
                roomType,
                startTime,
                endTime})
        });
        if(response.status===409){
            callback(false);
        }
        else{
            const json = await response.json();
            console.log(json);
            setUsers(users.concat(json));
            callback(true);
        }
    }

    // Deleting a user
    const deleteUser=async(id)=>{
        await fetch(`${host}/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        getUsers();
    }

    // Edit a user
    const editUser= async(id,email,roomNumber,roomType,startTime,endTime)=>{
        // Logic to edit in backend
        await fetch(`${host}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                roomNumber,
                roomType,
                startTime,
                endTime})
        }); 

        // Logic to edit the code in the frontend
        getUsers();
    }
    
    return (
        <UserContext.Provider value={{users,addUser,deleteUser,editUser,getUsers}}>
            {props.children}
        </UserContext.Provider>
    )    

}
export default UserState;