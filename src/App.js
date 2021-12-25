import './App.css';
import Login from './Components/Login';
import {BrowserRouter, Route,Routes } from "react-router-dom"; 
import FirstPage from './Components/First';
import NavBar from './NavBar';
import Admin from './Admin';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<FirstPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/admin" element={<NavBar/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
