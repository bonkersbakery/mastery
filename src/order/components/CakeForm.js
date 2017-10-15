import React from "react";
import { Field, reduxForm } from "redux-form";
import { Grid, MenuItem } from "material-ui";
import { TextField, Select } from "../../common/mui-fields";
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "90%"
  },
  fullWidthMessage: {
    margin: theme.spacing.unit,
    minWidth: "100%"
  }
});

const CakeFormContainer = ({ classes, cake = "cake" }) => (
  <div>
    <Grid container justify="center">
      <Grid item xs={10} xl={3}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="cupcake-size">Cupcake Size</InputLabel>
          <Field name={`${cake}.cupCakeSize`} component={Select} displayEmpty>
            <MenuItem value="3">8" bundt - $60.00</MenuItem>
            <MenuItem value="4">8" bundt with filled center - $85.00</MenuItem>
            <MenuItem value="5">4" double layer - $30.00</MenuItem>
            <MenuItem value="6">6" single layer - $30.00</MenuItem>
            <MenuItem value="7">6" double layer - $45.00</MenuItem>
            <MenuItem value="19">6" triple layer - $70.00</MenuItem>
            <MenuItem value="8">8" single layer - $45.00</MenuItem>
            <MenuItem value="20">8" triple layer - $105.00</MenuItem>
            <MenuItem value="9">8" double layer - $70.00</MenuItem>
            <MenuItem value="10">10" single layer - $70.00</MenuItem>
            <MenuItem value="11">10" double layer - $120.00</MenuItem>
            <MenuItem value="16">14" single layer - $145.00</MenuItem>
            <MenuItem value="13">14" double layer - $260.00</MenuItem>
            <MenuItem value="14">9x13 sheet cake - starts at - $70.00</MenuItem>
            <MenuItem value="17">
              9x13 double layer - starts at - $120.00
            </MenuItem>
            <MenuItem value="15">
              13x18 sheet cake - starts at - $145.00
            </MenuItem>
            <MenuItem value="18">
              13x18 double layer - starts at - $260.00
            </MenuItem>
            <MenuItem value="12">Custom - starts at - $140.00</MenuItem>
          </Field>
        </FormControl>
      </Grid>
      <Grid item xs={10} xl={3}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="cake-flavor">Cake Flavor</InputLabel>
          <Field name={`${cake}.cakeFlavor`} component={Select} displayEmpty>
            <MenuItem value="2">Vanilla</MenuItem>
            <MenuItem value="1">Chocolate**</MenuItem>
            <MenuItem value="3">Marble</MenuItem>
            <MenuItem value="4">Mocha</MenuItem>
            <MenuItem value="5">Red Velvet</MenuItem>
            <MenuItem value="7">Lemon</MenuItem>
            <MenuItem value="8">Strawberry</MenuItem>
            <MenuItem value="6">Carrot**</MenuItem>
            <MenuItem value="10">Angel Food (8* only)</MenuItem>
            <MenuItem value="9">Pumpkin Spice**</MenuItem>
          </Field>
        </FormControl>
      </Grid>
      <Grid item xs={10} xl={3}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="icing">Icing</InputLabel>
          <Field name={`${cake}.icing`} component={Select} displayEmpty>
            <MenuItem value="9">Conspiracy Themed Mix</MenuItem>
            <MenuItem value="28">Seasonal Themed Mix</MenuItem>
            <MenuItem value="2">Vanilla* - Area 51</MenuItem>
            <MenuItem value="8">Dark Chocolate* - Secret Service</MenuItem>
            <MenuItem value="4">Milk Chocolate - The Truth</MenuItem>
            <MenuItem value="16">White Chocolate - Moon Landing</MenuItem>
            <MenuItem value="21">Mocha* - The Guerilla</MenuItem>
            <MenuItem value="5">Mint - Little Green Men</MenuItem>
            <MenuItem value="14">Orange Creamsicle - High Risk</MenuItem>
            <MenuItem value="13">Lemon - Bermuda Triangle</MenuItem>
            <MenuItem value="15">Banana - Corporate Monkey</MenuItem>
            <MenuItem value="20">Cherry - The Confession</MenuItem>
            <MenuItem value="25">Salted Caramel* - Missing Link</MenuItem>
            <MenuItem value="17">Irish Cream - Grassy Knoll</MenuItem>
            <MenuItem value="22">Flaked Coconut* - Cover Up</MenuItem>
            <MenuItem value="23">Toasted Coconut* - Hawaiian Wate</MenuItem>
            <MenuItem value="33">Rootbeer Float - Wild Wild West</MenuItem>
            <MenuItem value="34">Raspberry Truffle - Illuminati</MenuItem>
            <MenuItem value="32">Maple Spice - The Masquerade</MenuItem>
            <MenuItem value="36">Pomegranate Bark* - The Ninja</MenuItem>
            <MenuItem value="38">Mango Smoothie - The Wizard</MenuItem>
            <MenuItem value="19">Rum - The Prohibitionist</MenuItem>
            <MenuItem value="41">Saskatoon Berry - Saskquatch</MenuItem>
            <MenuItem value="47">Strawberry - Under Cover</MenuItem>
            <MenuItem value="6">Cheesecake - Rothschild - $10.00</MenuItem>
            <MenuItem value="26">
              Chocolate Ganache - Black Ice - $10.00
            </MenuItem>
            <MenuItem value="3">
              Colored Vanilla (single color) - $10.00
            </MenuItem>
            <MenuItem value="10">
              Colored Vanilla (two colours) - $15.00
            </MenuItem>
            <MenuItem value="11">
              Ombre or Blended Vanilla (one co - $20.00
            </MenuItem>
            <MenuItem value="29">Rosettes (one color) - $20.00</MenuItem>
            <MenuItem value="30">Rosettes (two colors) - $25.00</MenuItem>
            <MenuItem value="1">Fondant (single color) - $20.00</MenuItem>
            <MenuItem value="12">Fondant (multiple colors) - $30.00</MenuItem>
          </Field>
        </FormControl>
      </Grid>
    </Grid>
    <Grid container spacing={8} justify="center">
      <Grid item xs={10} xl={3}>
        <FormControl className={classes.formControl}>
          <Field
            name={`${cake}.quantity`}
            component={TextField}
            label={"Quantity"}
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item xs={10} xl={6}>
        <FormControl className={classes.fullWidthMessage}>
          <Field
            name={`${cake}.message`}
            component={TextField}
            label={"Cake Message and Other Details"}
            multiline={true}
          />
        </FormControl>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(CakeFormContainer);
