import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const useStyle = makeStyles({
    header: {
        background: 'linear-gradient(45deg, #000000 30%, #FF8E53 50%)',
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const Admin = () => {
    const navigate = useNavigate();
    const classes = useStyle();
    return (
      <>
      <Stack spacing={2} >
      <AppBar position="static" >
      <Toolbar>
      ADMIN
            </Toolbar>
      </AppBar>

        <AppBar position="static" className={classes.header}>
            NOTICE BOARD
            <Toolbar>
               
                <NavLink className={classes.tabs} to="all" exact>ALL MESSAGES</NavLink>
                <NavLink className={classes.tabs} to="add" exact>ADD MESSAGES</NavLink>
            </Toolbar>
        </AppBar>
        </Stack>
        <Button onClick={() => navigate('/admin/all')}> home </Button>

        <AppBar position="static" className={classes.header}>
            UPLOAD BOOKS
            <Toolbar>
               
                <NavLink className={classes.tabs} to="/upload" exact>UPLOAD</NavLink>
               
            </Toolbar>
        </AppBar>
        
         </>
    )
}

export default Admin;
