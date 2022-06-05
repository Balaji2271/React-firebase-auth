import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';   
import { getAuth} from '@firebase/auth';

export default function DenseAppBar() {
    const auth = getAuth();
    const user = auth.currentUser;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" textAlign={'center'}>
            <h3> Welcome {user && user.displayName}</h3>
          </Typography> 
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
