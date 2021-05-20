import React from 'react';
import Button from '@material-ui/core/Button';
/*import CameraIcon from '@material-ui/icons/PhotoCamera';*/
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import cardImg from './silhoute.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'10px',
    borderRadius:'10%'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


  
function Dept() {
    const classes = useStyles();
    return (
        <div className={classes.root} justify="center">
        <Typography variant="h2" align="center" color="textPrimary" >
             MSC Department
        </Typography><br/>
        <Grid container spacing={1}>
          <Grid container item xs={4} spacing={0} justify="center">
                                        <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                            component="img"
                                            alt="CSE"
                                            height="200"
                                            image={cardImg}   
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Software system
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                    <Link to="/S_Msc" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                            <Button variant="contained" size="small" color="primary">
                                            Students
                                            </Button>
                                    </Link>
                                            <Button  size="small" color="secondary">
                                            Faculty
                                            </Button>
                                        </CardActions>
                                        </Card>
          </Grid> 
          
          </Grid>
      </div>
      );
    }
export default Dept