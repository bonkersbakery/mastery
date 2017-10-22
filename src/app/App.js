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
    flexWrap: "wrap"
  },
  gridContainer: {
    paddingTop: 16,
    display: "grid",
    gridColumnGap: "20px",
    alignItem: "center",
    minHeight: 200
  },
  descrptionContainer: {
    gridTemplateColumns: "1fr 1fr"
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
    margin: 20
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
    <div className={`${classes.gridContainer} ${classes.descrptionContainer}`}>
      <Paper elevation={5}>
        <div className={classes.description}>
          <Typography type="headline" component="h3">
            So you want some gluten-free cupcakes?
          </Typography>
          <Typography type="body1" component="p">
            Then you're damn lucky, because our cupcakes are gluten-free,
            sugar-free, tax-free, sketchy-shit-stuff-that-might-kill-you-free
          </Typography>
        </div>
      </Paper>
      <Paper elevation={5}>
        <div className={classes.description}>
          <Typography type="headline" component="h3">
            Yeah doug we make cupcakes
          </Typography>
        </div>
      </Paper>
    </div>
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
    <div className={classes.gridContainer}>
      <Paper elevation={5}>
        <div className={classes.description}>
          <Typography type="headline" component="h3">
            So you want some gluten-free cupcakes?
          </Typography>
          <Typography type="body1" component="p">
            Then you're damn lucky, because our cupcakes are gluten-free,
            sugar-free, tax-free, sketchy-shit-stuff-that-might-kill-you-free
          </Typography>
        </div>
      </Paper>
      <Paper elevation={5}>
        <div className={classes.description}>
          <Typography type="headline" component="h3">
            Yeah doug we make cupcakes
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
