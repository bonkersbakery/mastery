import React from "react";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemText, ListItemIcon } from "material-ui/List";
import Divider from "material-ui/Divider";
import People from "material-ui-icons/People";
import ShoppingCart from "material-ui-icons/ShoppingCart";
import AccountBalance from "material-ui-icons/AccountBalance";
import Home from "material-ui-icons/Home";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";

const styles = {
  list: {
    width: 250
  },
  listFull: {
    width: "300px",
    marginLeft: 5,
    paddingTop: 10
  },
  navigation: {
    width: "50px",
    position: "fixed",
    background: "transparent",
    top: "10px",
    left: "10px",
    paddingRight: "5px",
    zIndex: "99"
  },
  orderNow: {
    background: "transparent",
    position: "fixed",
    top: "15px",
    right: "10px",
    paddingRight: "5px",
    zIndex: "99"
  }
};

class App extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div style={styles.navigation}>
          <IconButton
            onClick={this.handleDrawerOpen}
            color="contrast"
            aria-label="Menu"
          >
            <MenuIcon color={"pink"} style={{ fontSize: 30 }} />
          </IconButton>
        </div>
        <div style={styles.orderNow}>
          <Button color="accent" raised>
            <ShoppingCart /> Order Now
          </Button>
        </div>
        <Drawer open={this.state.open} onRequestClose={this.handleDrawerClose}>
          <div role="button" style={styles.listFull}>
            <List>
              <ListItem>
                <ListItemText inset primary="It's a Kitchen Conspiracy" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button to={`/`} component={Link}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText inset primary="Home" />
              </ListItem>
            </List>
            <List>
              <ListItem button to={`/order`} component={Link}>
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText inset primary="Order Now" />
              </ListItem>
            </List>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <AccountBalance />
                </ListItemIcon>
                <ListItemText inset primary="Fundraising" />
              </ListItem>
            </List>
            <List>
              <ListItem button to={`/about-us`} component={Link}>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText inset primary="About Us" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default App;
