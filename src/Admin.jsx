
import NavBar from './NavBar';
import AddUser from './Components/Notice/AddUser';
import AllMsgs from './Components/Notice/AllUsers';
import EditUser from './Components/Notice/EditUser';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function Admin() {
  return (
    <BrowserRouter>
   
   <NavBar/>
   <Routes>
   
   <Route path="/all" element={<AllMsgs/>} />
   <Route path="/add" element={<AddUser/>} />
   <Route path="edit/:id" element={<EditUser/>} />
   
   </Routes>
   
   </BrowserRouter>
  );
}


export default Admin;