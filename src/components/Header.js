import * as React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/roboto/700.css";

import { Link } from "react-router-dom";

function Header() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 300, padding: 7 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["App-galleri", "Send forespørgsel"].map((text) => (
          <ListItem button key={text}>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                marginTop: 1,
                marginBottom: 1,
                fontSize: 25,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Kontakt", "Om os"].map((text) => (
          <ListItem button key={text}>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                marginTop: 1,
                marginBottom: 1,
                fontSize: 25,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} color="secondary">
              <MenuIcon
                className="menuIcon"
                fontSize="large"
                sx={{ color: "pink" }}
              />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export default Header;
