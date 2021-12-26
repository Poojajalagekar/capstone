import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
       <h1> home page</h1>
       <Button onClick={() => navigate('/home')}> home </Button>
      </>
    )
}

export default HomePage;