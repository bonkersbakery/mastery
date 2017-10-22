import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import imgHeader from "../images/CupCakeFixed.png";
import ImageGallery from "./ImageGallery";

const styles = theme => ({
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: 16,
    paddingBottom: 16
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
    <div>
      <Paper elevation={5}>
        <div className={classes.description}>
          <Typography type="headline" component="h3">
            Contact Us
          </Typography>
        </div>
      </Paper>
    </div>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
