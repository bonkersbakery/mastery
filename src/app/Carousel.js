import React from "react";
import { Carousel } from "react-responsive-carousel";
import mediaQuery from "../common/mediaquery";
import Radium from "radium";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import text from "../common/text";
import Responsive from "react-responsive";
import Typography from "material-ui/Typography";

// const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
// const Default = props => <Responsive {...props} minWidth={768} />;

const style = {
  float: {
    [mediaQuery.breakpointLarge]: {
      height: "1500px"
    }
  },
  container: {
    display: "flex",
    marginLeft: "auto",
    paddingTop: "50px",
    marginRight: "auto",
    marginBottom: "50px",
    width: "90%",
    position: "sticky",
    top: "50px",
    [mediaQuery.breakpointSmall]: {
      flexWrap: "wrap",
      flexDirection: "row"
    },
    justifyContent: "space-around"
  },
  imageStyle: {
    [mediaQuery.breakpointSmall]: {
      position: "static",
      top: "auto",
      display: "block"
    },
    width: "60%"
  }
};
const images = [1, 2, 3, 4, 5].map(id => (
  <div>
    <img key={id} src={`images/slide${id}.jpg`} />
  </div>
));

class CarouselContainer extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#f7f7f8",
          padding: 0,
          margin: 0
        }}
      >
        <Tablet>
          <div style={style.float}>
            <div style={style.container}>
              <div style={style.imageStyle}>
                <div style={{ margin: "auto" }}>
                  <Carousel axis="horizontal" showArrows={true}>
                    {images}
                  </Carousel>
                </div>
              </div>
              <div style={{ width: "40%", padding: "20px", fontSize: "1.2em" }}>
                <Typography type="body1">{text}</Typography>
              </div>
              <div style={{ width: "40%", padding: "20px", fontSize: "1.2em" }}>
                <Typography type="body1">{text}</Typography>
              </div>
            </div>
          </div>
        </Tablet>
        <Mobile>
          <div style={{ ...style.imageStyle, width: "100%" }}>
            <Carousel axis="horizontal" showArrows={true}>
              {images}
            </Carousel>
          </div>
          <div style={{ margin: "50px", fontSize: "1.2em" }}>
            <Typography type="body1">{text}</Typography>
          </div>
          <div style={{ margin: "50px", fontSize: "1.2em" }}>
            <Typography type="body1">{text}</Typography>
          </div>
        </Mobile>
      </div>
    );
  }
}

export default Radium(CarouselContainer);
