import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { makeStyles } from '@mui/styles'
import Toolbar from '@mui/material/Toolbar'
import { NavLink } from 'react-router-dom'
import { Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import '../Components/HomeData/Homedata.css'

const useStyle = makeStyles({
  header: {
    background: 'linear-gradient(45deg, #000000 30%, #FF8E53 50%)',
  },
  tabs: {
    color: 'black',
    marginRight: 20,
    textDecoration: 'none',
    fontSize: 30,
  },
  tabbs: {
    color: 'white',
    marginRight: 20,
    textDecoration: 'none',
    fontSize: 30,
  },
})

const Admin = () => {
  const navigate = useNavigate()
  const classes = useStyle()
  return (
    <>
      <Stack spacing={2}>
        <AppBar position='static'>
          <Toolbar className='ATB'>The-Admins-Den</Toolbar>
        </AppBar>

        <AppBar position='static' className='headApp'>
          NOTICE BOARD
          <Toolbar className='tbx'>
            <NavLink className={classes.tabs} to='all' exact>
              ALL MESSAGES
            </NavLink>
            <NavLink className={classes.tabbs} to='add' exact>
              ADD MESSAGES
            </NavLink>
          </Toolbar>
        </AppBar>
      </Stack>
      <Button onClick={() => navigate('/admin/all')}> home </Button>

      <AppBar position='static' className='upload'>
        UPLOAD BOOKS
        <Toolbar>
          <NavLink className='upload' to='/upload' exact>
            UPLOAD
          </NavLink>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Admin
