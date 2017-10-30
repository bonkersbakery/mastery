import React from "react";
import Grid from "material-ui/Grid";
import mediaQuery from "../common/mediaquery";
import Radium from "radium";

const style = {
  logoHolder: {
    justify: "center"
  },
  logoContainer: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    position: "sticky",
    backgroundColor: "black",
    [mediaQuery.breakpointSmall]: {
      height: "500px"
    },
    [mediaQuery.breakpointLarge]: {
      top: "100px",
      marginTop: "-600px",
      backgroundImage: "none",
      backgroundColor: "transparent"
    },
    zIndex: 50
  },
  logoWrapper: {
    [mediaQuery.breakpointLarge]: {
      height: "1300px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    },
    [mediaQuery.breakpointSmall]: {
      display: "block"
    },
    opacity: "0.3",
    backgroundColor: "black",
    backgroundImage: "url(images/HeaderBackground.jpg)"
  }
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <div style={style.logoContainer}>
          <div {...style.logoHolder}>
            <img src={`images/CupCakeFixed.png`} />
          </div>
        </div>
        <div style={style.logoWrapper} />
      </div>
    );
  }
}

export default Radium(Header);
