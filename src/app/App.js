import React from "react";
import Header from "./Header";
import { StyleRoot } from "radium";
import Carousel from "./Carousel";
import Promotion from "./Promotion";
import Contact from "./Contact";
import AppBar from "material-ui/AppBar";
import Button from "material-ui/Button";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemText, ListItemIcon } from "material-ui/List";
import StarBorder from "material-ui-icons/StarBorder";

const styles = {
  list: {
    width: 250
  },
  listFull: {
    width: "auto",
    marginLeft: 5
  }
};

const stylesTheme = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper
  }
});

class App extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <StyleRoot>
        <div>
          <div
            style={{
              width: "automatic",
              position: "fixed",
              background: "blue"
            }}
          >
            <List>
              <Button onClick={this.handleDrawerOpen}>Open Left</Button>
            </List>
          </div>
          <Drawer
            open={this.state.open}
            onRequestClose={this.handleDrawerClose}
          >
            <div tabIndex={0} role="button" style={styles.listFull}>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Navigate Somewhere" />
                </ListItem>
              </List>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Navigate Somewhere " />
                </ListItem>
              </List>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Navigate Somewhere else" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </div>
        <Header />
        <Carousel />
        <Promotion />
        <Contact />
      </StyleRoot>
    );
  }
}

export default App;
