import React from "react";
import Radium from "radium";
import Typography from "material-ui/Typography";
import text from "../common/text";

const style = {
  container: {
    backgroundColor: "white",
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
          <Typography type="display2" gutterBottom>
            Promotion here
          </Typography>
          <Typography type="body1">{text}</Typography>
        </div>
      </div>
    );
  }
}

export default Radium(Promotion);
