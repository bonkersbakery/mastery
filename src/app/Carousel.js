import React from "react";
import Carousel from "nuka-carousel";

const style = {
  container: {
    display: "grid",
    height: "500px",
    alignItems: "center",
    justifyItems: "center"
  }
};

class CarouselContainer extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <div style={{ width: "500px", display: "block", marginTop: 50 }}>
          <Carousel>
            <img />
            <img />
            <img />
          </Carousel>
        </div>
      </div>
    );
  }
}

export default CarouselContainer;
