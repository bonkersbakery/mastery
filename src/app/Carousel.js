import React from "react";
import { Carousel } from "react-responsive-carousel";
import mediaQuery from "../common/mediaquery";
import Radium from "radium";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Responsive from "react-responsive";

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} maxWidth={991} />;
// const Mobile = props => <Responsive {...props} maxWidth={767} />;
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
    marginRight: "auto",
    marginTop: "50px",
    marginBottom: "50px",
    width: "90%",
    position: "sticky",
    top: "50px",
    [mediaQuery.breakpointSmall]: {
      flexWrap: "wrap",
      flexDirection: "row"
    }
  },
  imageStyle: {
    margin: "auto",
    [mediaQuery.breakpointSmall]: {
      position: "static",
      top: "auto",
      display: "block"
    }
  }
};
const images = [1, 2, 3, 4, 5].map(id => (
  <div>
    <img key={id} src={`images/slide${id}.jpg`} />
  </div>
));

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec erat aliquet, condimentum lectus at, suscipit nulla. Praesent luctus, purus nec rutrum mollis, tortor lorem sollicitudin urna, et tincidunt nibh risus vitae metus. Ut facilisis lacus sit amet dui lobortis placerat. Morbi sodales malesuada felis vitae mollis. Suspendisse vulputate nisl lectus, ac varius velit condimentum condimentum. Curabitur eget tempus metus, vel luctus nunc. Praesent a leo at lectus mollis ullamcorper in ";
class CarouselContainer extends React.Component {
  render() {
    return (
      <div>
        <Desktop>
          <div style={style.float}>
            <div style={style.container}>
              <div style={style.imageStyle}>
                <Carousel axis="vertical" showArrows={true}>
                  {images}
                </Carousel>
              </div>
              <div style={{ width: "40%", padding: "20px", fontSize: "1.2em" }}>
                {text}
              </div>
              <div style={{ width: "40%", padding: "20px", fontSize: "1.2em" }}>
                {text}
              </div>
            </div>
          </div>
        </Desktop>
        <Tablet>
          <div
            style={{ ...style.imageStyle, width: "80%", paddingTop: "50px" }}
          >
            <Carousel axis="vertical" showArrows={true}>
              {images}
            </Carousel>
          </div>
          <div style={{ margin: "50px", fontSize: "1.2em" }}>{text}</div>
          <div style={{ margin: "50px", fontSize: "1.2em" }}>{text}</div>
        </Tablet>
      </div>
    );
  }
}

export default Radium(CarouselContainer);
