import React from 'react';
import Button from '@material-ui/core/Button';
/*import CameraIcon from '@material-ui/icons/PhotoCamera';*/
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './Course.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Dept from '../Department/Dept_be';
import Courses from './Courses'
import img1 from "./CourseImg.png"
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:10,
    marginLeft:400,
    width:550,
    borderRadius:50,
    borderBlockColor:red,
  },
  img:{
    marginBottom:-5
  }
}));

export default function Album() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main>
      <br/>
      <br/>
      <div
        class="bg_image"
        style={{
         // backgroundImage: "url('https://qph.fs.quoracdn.net/main-qimg-fce40b30955d64619bfe82ab5ce850a4')",
          backgroundSize: "cover",
          width: "10px",
          height: "100px",
          color: "#f5f5f5"
        }}
      >
      </div>
      <Grid container spacing={1}>
      <Grid container item xs={5} spacing={0}>
                                    <Card className={classes.root}>
                                  
                                        <CardMedia>
                                        <Link to="/Courses" style={{textDecoration: 'none'}}>
                                        <div className={classes.img}>
                                        <img  src={img1} width="230px" height='250px' />
                                        </div>
                                        </Link>
                                        </CardMedia>
                                        
                                       {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Courses
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <div className="button">
                                    <Link to="/Courses" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                        <Button variant="contained" size="small" color="primary">
                                        Look out
                                        </Button>
                                    </Link>
                                    </div>
                                    </CardActions> */}
                                    </Card>
      </Grid>
      </Grid>
      </main>
      <br></br>
      
      {/* <Link to="/Courses" style={{paddingLeft: 13, textDecoration: 'none'}}>
      <Button renderAs="button" variant="contained" color="Link">
      <span>Course</span>
      </Button>
      </Link> */}      
    </React.Fragment>
  );
}

