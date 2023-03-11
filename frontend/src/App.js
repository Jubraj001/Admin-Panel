import './App.css';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import UserState from './context/UserState';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <UserState>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/addUser" element={<AddUser/>}/>
          </Routes>
        </BrowserRouter>
      </UserState>
    </>
  );
}

export default App;
