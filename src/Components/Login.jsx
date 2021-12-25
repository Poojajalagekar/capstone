import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
    
    return (
      <>
       <h1>login page</h1>
      <Button onClick={() => navigate('/admin')}> admin </Button>
     
      </>

    )
}

export default Login;