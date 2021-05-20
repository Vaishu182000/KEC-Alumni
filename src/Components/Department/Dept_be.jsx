import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
import "../Students/products.scss"
import cardImg from './silhoute.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'10px',
    borderRadius:'10%',
    cardShadow:'10%',
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
              B.E Department
        </Typography> <br/>
        <Grid className={classes.grid} container spacing={1}>
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
                                            <Typography variant="h5">
                                                Computer Science and Engineering
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                        <Link to="/S_CSE" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                                    <Typography gutterBottom variant="h5" component="h2" justify="left">
                                        Electronics and Communication
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Link to="/S_ECE" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                                            Electrical and Electronics Engineering
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_EEE" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                                          Information Technology
                                      </Typography>
                                      </CardContent>
                                  </CardActionArea>
                                  <CardActions>
                                  <Link to="/S_IT" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                                            Mechanical Engineering
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_Mech" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                                            Food Technology
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_FT_be" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                                    Mechatronics
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Link to="/S_Mtr" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
                                    AutoMobiles
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Link to="/S_Auto" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                <Button variant="contained" size="small" color="primary">
                                Students
                                </Button>
                                </Link>
                                <Link to="/F_Auto" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                <Button  size="small" color="secondary">
                                Faculty
                                </Button>
                                </Link>
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
                                            Chemical Engineering
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_Chem" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                        <Button variant="contained" size="small" color="primary">
                                        Students
                                        </Button>
                                    </Link>
                                    <Link to="/F_Chem" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                        <Button  size="small" color="secondary">
                                        Faculty
                                        </Button>
                                    </Link>
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
                                            Civil Engineering
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to="/S_Civil" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                        <Button variant="contained" size="small" color="primary">
                                        Students
                                        </Button>
                                    </Link>  
                                    <Link to="/F_Civil" style={{paddingLeft: 13, textDecoration: 'none'}}>  
                                        <Button  size="small" color="secondary">
                                        Faculty
                                        </Button>
                                    </Link>
                                    </CardActions>
                                    </Card>
                                </Grid>
          </Grid>
      </div>
      );
    }
export default Dept