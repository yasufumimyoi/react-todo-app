import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import firebase from "../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// export const Header = () => (
//   <header>
//     <h2>Todo App</h2>
//     <NavLink to="/" activeClassName="selected" exact={true}>
//       Dashboard
//     </NavLink>
//     <NavLink to="/create" activeClassName="selected">
//       Create List
//     </NavLink>
//   </header>
// );

const handleLogOut = () => {
  firebase.auth().signOut();
};

export function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todo App
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <NavLink to="/" activeClassName="selected" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="selected">
        Create List
      </NavLink>
    </div>
  );
}
