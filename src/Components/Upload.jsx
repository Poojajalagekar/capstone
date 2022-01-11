import Navbar from '../Components/HomeData/Navbar'
import FormControl from '@mui/material/FormControl'
import { FormGroup } from '@mui/material'
import { Input } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import '../Components/HomeData/Homedata.css'
import { useNavigate } from 'react-router-dom'


const Upload = () => {

  const navigate = useNavigate() 
  
  return (
    <>
      <Navbar />
      <Box sx={{ p: 15, margin: 'auto', maxWidth: 700 }}>
        <FormGroup>
          <Typography variant='h4' >UPLOAD BOOKS</Typography>
          <FormControl sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>BOOK NAME</InputLabel>
            <Input
              id='my-input'
            />
          </FormControl>

          <FormControl sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>DEPARTMENT</InputLabel>
            <Input
              id='my-input' 
            />
          </FormControl> 
          
          <FormControl sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>AUTHOR</InputLabel>
            <Input
              id='my-input'
            />
          </FormControl> 

          <Button
            variant='contained'
            color='primary'
            style={{ marginBottom: 10 }}
            onClick={() => navigate('pdf')}
          >
            {' '}
            UPLOAD{' '}
          </Button>
          
          <Button
            variant='contained'
            color='primary' 
          >
            {' '}
            ADD{' '}
          </Button>
        
        </FormGroup>
      </Box>
    </>
  )
  }

export default Upload
