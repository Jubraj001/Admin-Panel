export default function TableItem(props) {
  const {user,updateUser}=props;
  return (
    <>
      <tr>
          <th scope="row">{props.ind}</th>
          <td>{user.email}</td>
          <td>{user.roomNumber}</td>
          <td>{user.roomType}</td>
          <td>{user.startTime}</td>
          <td>{user.endTime}</td>
          <td>
              <i className="fa-solid fa-pen-to-square fs-5 me-3" onClick={()=>updateUser(user)}></i>
              <i className="fa-solid fa-trash fs-5" onClick={() => props.onDeleteIcon(user)}></i>
          </td>
      </tr>
    </>
  )
}
