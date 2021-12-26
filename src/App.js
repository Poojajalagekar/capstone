import './App.css';
import Login from './Components/Login';
import {BrowserRouter, Route,Routes } from "react-router-dom"; 
import FirstPage from './Components/First';
import NavBar from './NavBar';
import Admin from './Admin';
import HomePage from './Components/Home';
import AddUser from './Components/Notice/AddUser';
import AllMsgs from './Components/Notice/AllUsers';
import EditUser from './Components/Notice/EditUser';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<FirstPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/admin" element={<NavBar/>} />
    <Route path="/home" element={<HomePage/>} />
    <Route path="admin/add" element={<AddUser/>} />
    <Route path="admin/all" element={<AllMsgs/>} />
    <Route path="admin/edit/:id" element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
