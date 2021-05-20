import React from 'react';
import AppBar from '@material-ui/core/AppBar';
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
import { createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { blueGrey } from '@material-ui/core/colors';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function List() {
    return (
        <div>
        <Container  maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card >
                <CardMedia
                  image="https://th.bing.com/th/id/OIP.CAFzPNg6AlzOKGQGHbZoxQHaEq?w=293&h=184&c=7&o=5&dpr=1.25&pid=1.7"
                  title="Image title"
                />
                <CardContent font-family="Helvetica">
                  <Typography gutterBottom variant="h5" component="h2" font-family="Helvetica">
                    Heading
                  </Typography>
                  <Typography>
                    Change
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
        </div>
    )
}

export default List
