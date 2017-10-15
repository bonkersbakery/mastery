import React from "react";
import CakeForm from "./CakeForm";
import Button from "material-ui/Button";
import Remove from "material-ui-icons/Remove";
import DoneAll from "material-ui-icons/DoneAll";
import AddIcon from "material-ui-icons/Add";
import { styles } from "../common/rootStyles";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import classNames from "classnames";
import { FieldArray, reduxForm } from "redux-form";
import Grid from "material-ui/Grid";
import { fromPairs } from "lodash";

const validate = values => {
  const requiredFields = ["cupCakeSize", "cakeFlavor", "icing", "quantity"];
  const errors = {};
  const cupcakeErrors = [];
  values.cupcakes.forEach((cupcake, cupcakeIdx) => {
    const errorPairs = requiredFields
      .filter(field => !cupcake[field])
      .map(f => [f, "Required"]);

    cupcakeErrors[cupcakeIdx] = fromPairs(errorPairs);
  });

  errors.cupcakes = cupcakeErrors;
  return errors;
};

export const renderCupCakes = ({
  fields,
  meta: { touched, error, submitFailed },
  classes
}) => {
  const paperContainerClass = classNames(classes.paper, classes.paperContainer);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "row",
          bottom: "30px",
          right: "30px"
        }}
      >
        <Button
          fab
          color="primary"
          aria-label="add"
          onClick={() => fields.push({})}
          style={{ width: "55px", margin: "5px" }}
        >
          <AddIcon />
        </Button>

        <Button
          fab
          color="primary"
          aria-label="add"
          style={{ width: "55px", margin: "5px" }}
        >
          <DoneAll />
        </Button>
      </div>
      <Grid container className={classes.root}>
        {(touched || submitFailed) && error && <span>{error}</span>}
        <Grid container justify="center">
          <Grid item xs={10}>
            {fields.map((cake, index) => (
              <Paper
                className={paperContainerClass}
                key={`${cake}.${index}`}
                style={{ marginTop: 10 }}
              >
                <CakeForm cake={cake} />
                <div
                  style={{
                    display: "flex",
                    marginLeft: 5
                  }}
                >
                  <Button
                    fab
                    color="accent"
                    aria-label="add"
                    onClick={() => fields.remove(index)}
                  >
                    <Remove />
                  </Button>
                </div>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const CakeFormFieldArray = ({
  handleSubmit,
  reset,
  pristine,
  submitting,
  classes
}) => (
  <form>
    <FieldArray name="cupcakes" component={renderCupCakes} classes={classes} />
  </form>
);

export default withStyles(styles)(
  reduxForm({
    form: "CakeFormFieldArrayForm",
    validate,
    initialValues: {
      cupcakes: [{}]
    }
  })(CakeFormFieldArray)
);
