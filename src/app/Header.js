import React from "react";
import Grid from "material-ui/Grid";
import mediaQuery from "../common/mediaquery";
import Radium from "radium";

const style = {
  logoHolder: {
    justify: "center"
  },
  logoContainer: {
    height: "500px",
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    position: "sticky",
    top: "100px"
  },
  logoWrapper: {
    [mediaQuery.breakpointLarge]: {
      height: "1500px"
    },
    backgroundColor: "black"
  }
};

class Header extends React.Component {
  render() {
    return (
      <div style={style.logoWrapper}>
        <div style={style.logoContainer}>
          <div {...style.logoHolder}>
            <img src={`images/CupCakeFixed.png`} />
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Header);
