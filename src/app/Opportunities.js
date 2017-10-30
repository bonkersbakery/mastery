import React from 'react';
import Radium from 'radium';
import Paper from 'material-ui/es/Paper/Paper';
import Typography from 'material-ui/es/Typography/Typography';

class Opportunities extends React.Component {
  render(){
    return(
      <div>
        <Paper elevation={10}>
          <Typography type="headline" component="h3">
            Interested in working at Cupcake Conspiracy?
          </Typography>
          <Typography type="body1" component="p">
            We are currently looking for a part time baker focused on our new
            product lines. Morning shifts start between 7 and 8am. Kitchen
            management skills would be preferred. The position could become full
            time for the right candidate.
            <br />
            <br />
            Please send resumes to &nbsp;
            <a href="mailto:cupcakes@thecupcakeconspiracy.ca">
              cupcakes@thecupcakeconspiracy.ca
            </a>
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default Radium(Opportunities);