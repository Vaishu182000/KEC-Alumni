import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import React, { Component } from "react";
import  db  from "../Students/Firebase";
import CardContent from '@material-ui/core/CardContent';



class RenderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
        db.collection("_Fac_Civil")
       .orderBy('FacultyID', 'asc')
        .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ users: data }); 
      });
  }
  render() {

   
  
    const { users } = this.state;
    return (
      <div className="root">
          <Grid
              container
              spacing={4}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
          >
              {users.map(user => (
                  <Grid item xs={12} sm={6} md={4}>
                      <Card className="card">
                          
                          <CardContent>
                          <img src={user.Img} alt="unavailable" width='150px' height='150px'/>
                          <h5>{user.FacultyName}</h5>
                          <p>{user.FacultyID}</p>
                          <p>Contact number : {user.Phone_No}</p>
                          <p>Email Id : {user.Email_ID}</p>
                          </CardContent>
                      </Card>
                   </Grid>
              ))}
          </Grid>
      </div>
    )
  }
}

export default RenderList;