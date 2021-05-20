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
              M.E Department
        </Typography><br/>
        <Grid container spacing={1}>
          <Grid container item xs={4} spacing={0}>
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
                                                Construction Engineering and Management
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                        <Link to="/S_Me_Cem" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
          <Grid container item xs={4} spacing={0}>
                                <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="CSE"
                                    height="200"
                                    image={cardImg}   
                                    
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" justify="left">
                                       Structural Engineering
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Link to="/S_Me_Se" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
          <Grid container item xs={4} spacing={0}>
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
                                            Engineering Design
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_Me_Ed" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
       
        <Grid container item xs={4} spacing={0}>
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
                                          Mechatronics
                                      </Typography>
                                      </CardContent>
                                  </CardActionArea>
                                  <CardActions>
                                  <Link to="/S_Me_Mtr" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
          <Grid container item xs={4} spacing={0}>
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
                                            Embedded System
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_Me_Es" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
          <Grid container item xs={4} spacing={0}>
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
                                            Communication system
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_Me_Commu" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
          <Grid container item xs={4} spacing={0}>
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
                                    VLSI Design
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Link to="/S_Me_Vsli" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                    <Grid container item xs={4} spacing={0}>
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
                                            AE
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_Me_Ae" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                             <Grid container item xs={4} spacing={0}>
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
                                            PED
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_Me_Ped" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                                 <Grid container item xs={4} spacing={0}>
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
                                            Control and Instrumentation
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_Me_Ci" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                              <Grid container item xs={4} spacing={0}>
                                    <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        alt="CSE"
                                        height="200"
                                        image={cardImg}   
                                        title="CSE"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            CSE
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_Me_CSE" style={{paddingLeft: 13, textDecoration: 'none'}}>
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