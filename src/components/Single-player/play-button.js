import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import "./single-player.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Game from "../Game/game";

// const routes = [
//   {
//     path: "/game",
//     exact: true,
//     main: () => (
//       <div>
//         <Game />
//       </div>
//     )
//   }
// ];

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  fab: {
    margin: theme.spacing(1),
    fontSize: "35px",
    fontWeight: "bold",
    maxWidth: "600px",
    maxHeight: "600px",
    minWidth: "600px",
    minHeight: "600px"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function PlayButton() {
  const classes = useStyles();

  return (
    // <div>
    <CardActions
      className={classes.root}
      value="Refresh Page"
      onClick="window.location.reload();"
    >
      <Link
        to="/game" /*value="Refresh Page" onClick="window.location.reload();"*/
      >
        <Fab
          aria-label="delete"
          className={`${classes.fab} button-background`}
          color="secondary"
        >
          <NavigationIcon className={classes.extendedIcon} />
          Start Game
        </Fab>
      </Link>
    </CardActions>
    /* <Router>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Router> */
    /* </div> */
  );
}

// function refresh() {
//   Router.dispatch(location.getCurrentPath(), null);
// }
