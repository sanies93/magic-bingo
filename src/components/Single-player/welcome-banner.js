import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import "./single-player.css";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 800,
    display: "flexbox",
    justifyContent: "center",
    marginTop: "50px",
    marginLeft: "400px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    display: "flexbox",
    justifyContent: "center"
  },
  pos: {
    marginBottom: 12
  }
});

export default function WelcomeBanner() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={`${classes.card} banner`}>
      <CardContent>
        <h1 className={`${classes.title}`}>Welcome to Magic-Bingo!</h1>
        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
    </Card>
  );
}
