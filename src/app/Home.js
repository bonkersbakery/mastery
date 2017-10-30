import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Promotion from "./Promotion";
import Contact from "./Contact";
import Opportunities from './Opportunities';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Promotion />
        <Contact />
        <Opportunities />
      </div>
    );
  }
}

export default Home;
