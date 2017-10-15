import React from "react";
import { withStyles } from "material-ui/styles";
import CakeFormFieldArray from "./components/CakeFormFieldArray";
import { styles } from "./common/rootStyles";

class Order extends React.Component {
  render() {
    return <CakeFormFieldArray />;
  }
}

export default withStyles(styles)(Order);
