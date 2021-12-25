import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';


const AllMsgs = () => {
    const navigate = useNavigate();
    
    return (
        <>
       <h1> first page</h1>
      <Button onClick={() => navigate('/all')}> login </Button>
      </>
    )
}

export default AllMsgs;