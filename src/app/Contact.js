import React from "react";
import Radium from "radium";

const style = {
  container: {
    backgroundColor: "white",
    height: "300px"
  }
};
class Contact extends React.Component {
  render() {
    return <div style={style.container} />;
  }
}

export default Radium(Contact);
