import React from "react";
import Radium from "radium";
import Typography from "material-ui/Typography";

const style = {
  container: {
    display: "block",
    backgroundColor: "#f7f7f8",
    height: "300px"
  }
};
class Contact extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <div style={{ margin: "auto", width: "80%", paddingTop: "10px" }}>
          <Typography type="display1">Contact Us</Typography>
        </div>
      </div>
    );
  }
}

export default Radium(Contact);
