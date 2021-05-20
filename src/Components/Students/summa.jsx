import React from "react";
import fire from "./Firebase";
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBCard, MDBCardImage, MDBCardTitle, MDBCardBody, MDBBtn,  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from "mdbreact";
class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          modal: false
        };
      }
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
      componentDidMount() {
        const db = fire.firestore();
            db.collection("Job Availability")
            .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {
                const d={
                    id:doc.id,
                    ...doc.data(),
                }
                return d;
            });
            this.setState({ users: data });
          });
      }
      render(){
          const { users }= this.state;
          return(
              <div>
                  <MDBContainer style={{ marginTop:100 }}>
                    <MDBTypography tag="h1" variant="h1" className="text-center pt-4 pb-2" colorText="blue-grey">Job Availability</MDBTypography>
                    <input type="range" className="custom-range" id="customRange1"/>
                  </MDBContainer>
                  <MDBContainer>
                      <MDBRow 
                        justify="flex-start"
                        alignItems="flex-start"
                        style={{marginTop:50}}
                      >
                          {users.map(user=>(
                              <MDBCol md="4" style={{ maxWidth: "22rem", margin:10 }}>
                                  <MDBCard narrow style={{height:400}}>
                                      <MDBCardImage hover top style={{height:200}} className="img-fluid" src={user.Img} waves/>
                                      <MDBCardTitle style={{margin:15}}>{user.Job}</MDBCardTitle>
                                      <MDBCardBody style={{textAlign:"center"}}>
                                          <MDBBtn onClick={this.toggle} className="d-flex">Apply</MDBBtn>
                                          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                                            <MDBModalHeader toggle={this.toggle}>Applying For {user.Job}</MDBModalHeader>
                                            <MDBModalBody>
                                            <MDBRow>
                                                    <MDBCol>
                                                    <form>
                                                        <p className="h4 text-center py-4">Enter Your Details Below!!</p>
                                                        <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">
                                                        Your name
                                                        </label>
                                                        <input type="text" id="defaultFormCardNameEx" className="form-control" />
                                                        <br />
                                                        <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">
                                                        Your email
                                                        </label>
                                                        <input type="email" id="defaultFormCardEmailEx" className="form-control" />
                                                        <div className="text-center py-4 mt-3">
                                                        <MDBBtn className="btn btn-outline-purple" type="submit">
                                                            Send
                                                            <MDBIcon far icon="paper-plane" className="ml-2" />
                                                        </MDBBtn>
                                                        </div>
                                                    </form>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModal>
                                      </MDBCardBody>
                                  </MDBCard>
                              </MDBCol>
                          ))}
                      </MDBRow>
                  </MDBContainer>
              </div>
          );
      }
}
export default Job;