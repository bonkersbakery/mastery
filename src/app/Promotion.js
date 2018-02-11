import React from "react";
import Radium from "radium";
import Typography from "material-ui/Typography";
import text from "../common/text";

const style = {
  container: {
    backgroundColor: "white"
  },
  wrapper: {
    margin: "auto",
    paddingTop: "20px",
    width: "80%",
    textAlign: "center",
    color: "white"
  }
};
class Promotion extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <div
          style={{
            margin: "50px auto"
          }}
        >
          <div style={style.wrapper}>
            <Typography type="display2">VIP Innocence</Typography>
            <Typography type="body1" style={{ fontSize: "1.2em" }}>
              {text}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Promotion); //Should change to VIP Innocence as all promos go through it or BlueBowTieProject
