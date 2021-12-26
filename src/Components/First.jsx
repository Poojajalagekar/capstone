import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FirstPage = () => {
    const navigate = useNavigate();
   
    
    return (
        <>
       <h1> first page</h1>
       {/* <Button onClick={() => navigate('/login')}> login </Button> */}
       < Link to="/login">login</Link>
      </>
    )
}

export default FirstPage;