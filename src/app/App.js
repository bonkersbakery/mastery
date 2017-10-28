import React from "react";
import Header from "./Header";
import { StyleRoot } from "radium";
import Carousel from "./Carousel";

class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <Header />
        <Carousel />
      </StyleRoot>
    );
  }
}

export default App;
