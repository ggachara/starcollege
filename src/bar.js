import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function Bar() {

  return (
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h5" component="h5" align="center" gutterBottom>
                Registration Form
            </Typography>
        </Toolbar>
      </AppBar>
  );
}
