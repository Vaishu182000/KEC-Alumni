import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo1 from "./logo.png"
import logo2 from "./logo2.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import './style.scss'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  
  toolbar: {
    minHeight: 1,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(0),

    marginLeft: theme.spacing(140),
   
  },
  title: {
    flexGrow: 1,
    
    
  },
 
  
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
      <AppBar className="nav" position='static' color='secondary'>
      <div className="logo1">
        <img src={logo1} width='75px' height='85px'/>
        </div>
        <div className="logo2">
        <img src={logo2} width='75px' height='65px'/>
        </div>
        <div className="header">
       <p> <h1>Kongu Engineering College</h1>
        <p>(Autonomous)<br/>Affiliated to ANNA University<br/>Perundurai,Erode-638060,TamilNadu,India.</p></p>
        </div>  
     
        <Toolbar className={classes.toolbar} >
        
          <div className="Buttons">
          <IconButton>
                    <Link to="/" style={{textDecoration: 'none'}}>
                    <Button renderAs="button" variant="contained" size="medium" color='primary'>
                    <span>Home</span>
                    </Button>
                    </Link>
          </IconButton>
          <IconButton  >
                    <Link to="/Courses" style={{ textDecoration: 'none'}}>
                    <Button renderAs="button" variant="contained" size="medium" color='primary'>                    <span>Course</span>
                    </Button>
                    </Link>
          </IconButton>
          <IconButton  >
                    <Link to="/Courses" style={{ textDecoration: 'none'}}>
                    <Button renderAs="button" variant="contained" size="medium" color='primary'>                    <span>Contact</span>
                    </Button>
                    </Link>
          </IconButton>
          </div>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}