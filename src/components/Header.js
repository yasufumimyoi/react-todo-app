import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import firebase from "../firebase/firebase";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import "../css/header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
}));

const handleLogOut = () => {
  firebase.auth().signOut();
};

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <WbIncandescentIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            Todo App
          </Typography>
          <NavLink
            to="/dashboard"
            activeClassName="selected"
            exact={true}
            className="link"
          >
            <Typography variant="h6" className={classes.title}>
              Dashboard
            </Typography>
          </NavLink>
          <NavLink to="/create" activeClassName="selected" className="link">
            <Typography variant="h6" className={classes.title}>
              Create List
            </Typography>
          </NavLink>
          <Button color="inherit" onClick={handleLogOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
