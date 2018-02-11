import React from 'react';
import Radium from 'radium';
import Typography from 'material-ui/es/Typography/Typography';

const style = {
  container: {
    margin: "auto",
    height: "250px",
    paddingTop: "15px",
    width: "80%",
    display: "flex"
  }
};

class Opportunities extends React.Component {
  render(){
    return(
      <div style={style.container}>
        <div style={{width: "50%"}}>
          <Typography type="display1" component="h3">
            Interested in working at Kitchen Conspiracy?
          </Typography>
          <br />
          <br />
          <Typography type="body1" component="p">
            We are currently looking for a part time baker focused on our new
            product lines. Morning shifts start between 7 and 8am. Kitchen
            management skills would be preferred. The position could become full
            time for the right candidate.
            <br />
            <br />
            Please send resumes to &nbsp;
            <a href="mailto:info@kitchenconspiracy.ca">
              info@kitchenconspiracy.ca
            </a>
          </Typography>
        </div>
      </div>
    )
  }
}

export default Radium(Opportunities);
