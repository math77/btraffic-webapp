import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './NavBar.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#1B1C1E',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className="Root">
      <AppBar position="sticky" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className="Title">
            Future Car
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit" className="Button">Cadastro</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
