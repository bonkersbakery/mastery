import React from "react";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide5.jpg";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { GridList, GridListTile } from "material-ui/GridList";

const tileData = [
  { img: slide1, title: "Image", author: "author", cols: 2 },
  { img: slide2, title: "Image", author: "author", cols: 1 },
  { img: slide3, title: "Image", author: "author", cols: 2 },
  { img: slide4, title: "Image", author: "author", cols: 1 },
  { img: slide5, title: "Image", author: "author", cols: 3 }
];

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    background: theme.palette.background.paper
  },
  gridList: {
    maxWidth: 850,
    height: 600
  },
  subheader: {
    width: "100%"
  }
});

function ImageGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGridList);
