import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { logout } from '../../context/AuthActions';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({title}) {
  const { user, dispatch } = useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {user? <Button color="inherit" href='/logout' onClick={()=>dispatch(logout())}>Logout</Button> : <Button color="inherit" href='/login'>Login</Button>}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
