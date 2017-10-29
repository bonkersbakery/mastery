import React from "react";
import Radium from "radium";

const style = {
  container: {
    backgroundColor: "black",
    height: "300px"
  },
  wrapper: {
    margin: "auto",
    paddingTop: "20px",
    width: "40%",
    textAlign: "center",
    color: "white"
  }
};
class Promotion extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <div style={style.wrapper}>
          <h2>Promotion here</h2>
        </div>
      </div>
    );
  }
}

export default Radium(Promotion);
