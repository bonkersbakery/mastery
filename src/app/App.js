import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import imgHeader from "../images/CupCakeFixed.png";
import ImageGallery from "./ImageGallery";
import TextField from "material-ui/TextField";
import Divider from "material-ui/Divider";
import Icon from "material-ui/Icon";
import Button from "material-ui/Button";

const styles = theme => ({
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: 16,
    paddingBottom: 16
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  textField: {
    minWidth: 500
  },
  gridContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    display: "grid",
    gridColumnGap: "20px",
    alignItem: "center",
    minHeight: 200
  },
  header: {
    height: 600,
    padding: 50,
    background: "black"
  },
  alignItem: {
    alignItems: "center"
  },
  description: {
    margin: 20,
    minHeight: 150
  },
  content: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

const App = ({ classes }) => (
  <div>
    <Paper className={`${classes.header} ${classes.flexCenter}`} elevation={5}>
      <div>
        <img alt="header" src={imgHeader} />
      </div>
    </Paper>
    <div className={classes.flexCenter}>
      <div>
        <Paper className={classes.content} elevation={2}>
          <Typography type="headline" component="h3">
            Yeah doug we make cupcakes
          </Typography>
          <Typography type="body1" component="p">
            Ya'll cravin for a cupcake? We got you ass covered
          </Typography>
        </Paper>
        <Paper className={classes.content} elevation={2}>
          <Typography type="headline" component="h3">
            Yeah doug we make cupcakes
          </Typography>
          <Typography type="body1" component="p">
            Ya'll cravin for a cupcake? We got you ass covered
          </Typography>
        </Paper>
        <Paper className={classes.content} elevation={2}>
          <Typography type="headline" component="h3">
            Yeah doug we make cupcakes
          </Typography>
          <Typography type="body1" component="p">
            Ya'll cravin for a cupcake? We got you ass covered
          </Typography>
        </Paper>
      </div>
      <Paper className={classes.content} elevation={2}>
        <ImageGallery />
      </Paper>
    </div>
    <Grid container justify={"center"}>
      <Grid item md={6} xs={12}>
        <Paper className={classes.content} elevation={2}>
          <Typography type="headline" component="h3">
            Yeah doug we make cupcakes
          </Typography>
          <Typography type="body1" component="p">
            Ya'll cravin for a cupcake? We got you ass covered
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={3} xs={12}>
        <Paper className={classes.content} elevation={2}>
          <Typography type="headline" component="h3">
            Yeah doug we make cupcakes
          </Typography>
          <Typography type="body1" component="p">
            Ya'll cravin for a cupcake? We got you ass covered
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    <div className={classes.flexCenter}>
      <Paper className={classes.content} elevation={2}>
        <ImageGallery />
      </Paper>
      <Paper className={classes.content} elevation={2}>
        <Typography type="headline" component="h3">
          Yeah doug we make cupcakes
        </Typography>
        <Typography type="body1" component="p">
          Ya'll cravin for a cupcake? We got you ass covered
        </Typography>
      </Paper>
    </div>
    <div className={classes.flexCenter}>
      <Paper className={classes.content} elevation={2}>
        <Typography type="headline" component="h3">
          Sign up for VIP Innocence Rewards!
        </Typography>
        <Typography type="body1" component="p">
          And keep your eyes peeled as our special projects private investigator
          will have updates regularly.
        </Typography>
      </Paper>
      <Paper className={classes.content}>
        <form noValidate className={classes.formContainer} autoComplete="off">
          <TextField
            id="name"
            label="Name"
            margin="normal"
            className={classes.textField}
          />
          <TextField
            id="lastName"
            label="Last Name"
            margin="normal"
            className={classes.textField}
          />
          <TextField
            id="phone"
            label="Phone Number"
            margin="normal"
            className={classes.textField}
          />
          <TextField id="email" label="Email" margin="normal" />
          <Button raised color="accent">
            Submit
          </Button>
        </form>
      </Paper>
    </div>
    <Grid container justify={"center"}>
      <Grid item md={3} xs={12}>
        <Paper className={classes.content} elevation={5}>
          <Typography type="headline" component="h2">
            Contact Us
          </Typography>
          <Divider />
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon color="primary" style={{ fontSize: 30 }}>
              contact_phone
            </Icon>
            <Typography type="subheading" component="p">
              &nbsp; 306-374-5401
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon color="primary" style={{ fontSize: 30 }}>
              email
            </Icon>
            <Typography type="subheading" component="p">
              &nbsp;{" "}
              <a href="mailto:cupcakes@thecupcakeconspiracy.ca">
                cupcakes@thecupcakeconspiracy.ca
              </a>
            </Typography>
          </div>
          <br />
        </Paper>
      </Grid>
      <Grid item md={6} xs={12}>
        <Paper className={classes.content} elevation={10}>
          <Typography type="headline" component="h3">
            Interested in working at Cupcake Conspiracy?
          </Typography>
          <Typography type="body1" component="p">
            We are currently looking for a part time baker focused on our new
            product lines. Morning shifts start between 7 and 8am. Kitchen
            management skills would be preferred. The position could become full
            time for the right candidate.
            <br />
            <br />
            Please send resumes to &nbsp;
            <a href="mailto:cupcakes@thecupcakeconspiracy.ca">
              cupcakes@thecupcakeconspiracy.ca
            </a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
