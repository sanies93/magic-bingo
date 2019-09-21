import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import "./multiplayer.css";

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
    <CardActions className={classes.root}>
      <Fab
        // variant="extended"
        aria-label="delete"
        className={`${classes.fab} button-background-2`}
        color="secondary"
      >
        <NavigationIcon className={classes.extendedIcon} />
        Start Game
      </Fab>
    </CardActions>
  );
}
