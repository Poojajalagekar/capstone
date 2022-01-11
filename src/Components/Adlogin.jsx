import Button from '@mui/material/Button'
import Navbar from './HomeData/Navbar'
import FormControl from '@mui/material/FormControl'
import { FormGroup } from '@mui/material'
import { Input } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import '../Components/HomeData/Homedata.css'
import { useNavigate } from 'react-router-dom'


 

const Adlogin = () => {
  const navigate = useNavigate();
 
  return (
    <>
      <Navbar />
      <Button onClick={() => navigate('/admin')}> ADMIN </Button>
      <Button onClick={() => navigate('/home')}> USER </Button>
      <Box sx={{ p: 15, margin: 'auto', maxWidth: 700 }}>
        <FormGroup>
          <Typography variant='h4' >LOGIN</Typography>

          <FormControl sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>EMAIL</InputLabel>
            <Input
              id='my-input' 
            />
          </FormControl> 

          <FormControl  sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>PASSWORD</InputLabel>
            <Input
              id='my-input'
            />
          </FormControl> 
        
          <Button
            variant='contained'
            color='primary'
            onClick={() => navigate('/admin')}
          >
            {' '}
            LOGIN{' '}
          </Button>
        </FormGroup>
      </Box>
    </>
  )
}

export default Adlogin

