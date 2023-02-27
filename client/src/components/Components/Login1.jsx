import React, { useContext } from 'react'
import { Card, Grid, Typography, Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useEth } from '../../contexts/EthContext';

export default function Login1() {
    const walletDetails = useEth;
    console.log({walletDetails});

  return (
    <div style={{ height: "980px", backgroundColor: "#2196f3" }}>
        {/* <Particles params={particleOpt} /> */}

        <div style={{ position: "absolute", top: "250px", left: "225px" }}>
          <Grid container justify="center">
            <Grid item md={3}>
              <div
                style={{ position: "absolute", marginLeft: "250px" }}
                className="shadow"
              >
                <Card
                  style={{
                    width: "400px",
                    height: "580px",
                    backgroundColor: "#e3f2fd"
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", padding: "25px" }}
                  >
                    Student
                  </Typography>
                  <Grid container justify="center">
                    <Avatar style={{ width: "365px", height: "365px" }}>
                      <img
                        src="https://st2.depositphotos.com/3889193/6856/i/450/depositphotos_68564721-stock-photo-beautiful-young-student-posing.jpg"
                        alt=""
                        style={{ height: "400px", margin: "10px" }}
                      />
                    </Avatar>
                  </Grid>
                  <Grid container justify="center">
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ s: true });
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ stud: true });
                      }}
                    >
                      Sign Up
                    </Button>{" "}
                  </Grid>
                </Card>
              </div>
            </Grid>
            <Grid item md={6} />
            <Grid item md={3}>
              <div
                style={{ position: "absolute", marginLeft: "750px" }}
                className="shadow"
              >
                <Card
                  style={{
                    width: "400px",
                    height: "580px",
                    backgroundColor: "#e3f2fd"
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", padding: "25px" }}
                  >
                    Institute
                  </Typography>
                  <Grid container justify="center">
                    <Avatar style={{ width: "365px", height: "365px" }}>
                      <img
                        src="https://cdn.pixabay.com/photo/2016/08/13/15/29/johns-hopkins-university-1590925__340.jpg"
                        alt=""
                        style={{ height: "400px", margin: "10px" }}
                      />
                    </Avatar>
                  </Grid>
                  <Grid container justify="center">
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ i: true });
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ inst: true });
                      }}
                    >
                      Sign Up
                    </Button>{" "}
                  </Grid>
                </Card>
              </div>
            </Grid>
          </Grid>
          {/* <Particles params={particleOpt} /> */}
        </div>
        {/* {this.state.stud ? <Redirect to="/createstud" /> : null}
        {this.state.inst ? <Redirect to="/createinst" /> : null}
        {this.state.stud ? <Redirect to="/GoogleLoginS" /> : null}
        {this.state.inst ? <Redirect to="/GoogleLoginI" /> : null}
        {this.state.s ? <Redirect to="/StudentDashBoard" /> : null}
        {this.state.i ? <Redirect to="/InstituteDashBoard" /> : null} */}
      </div>
  )
}
