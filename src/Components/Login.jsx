import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import Navbar from './HomeData/Navbar'

const Login = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <h1>login page</h1>
      <Button onClick={() => navigate('/admin')}> admin </Button>
      <Button onClick={() => navigate('/home')}> Home </Button>
    </>
  )
}

export default Login
