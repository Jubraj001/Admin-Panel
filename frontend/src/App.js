import './App.css';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import UserState from './context/UserState';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Alert from './components/Alert';
import {useState} from 'react';

function App() {
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 3000)
  }
  return (
    <>
      <UserState>
        <BrowserRouter>
          <Navbar/>
          <Alert alert={alert}/>
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
            <Route exact path="/addUser" element={<AddUser showAlert={showAlert}/>}/>
          </Routes>
        </BrowserRouter>
      </UserState>
    </>
  );
}

export default App;
