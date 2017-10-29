import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Promotion from "./Promotion";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Promotion />
      </div>
    );
  }
}

export default Home;
