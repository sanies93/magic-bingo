//Imports for this component
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import PeopleIcon from "@material-ui/icons/People";
import ReadingsIcon from "@material-ui/icons/PanTool";
import CollectionsIcon from "@material-ui/icons/Brightness4";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Other Components imports
import AccountIcon from "../AccountIcon";
import "./drawer.css";
import Singleplayer from "../Single-player/singleplayer";
import Multiplayer from "../Multiplayer/multiplayer";
import Readings from "../Previous Readings/readings";
import Collections from "../Collections/collections";
import Game from "../Bingo-Card/card";

const drawerWidth = 240;

const routes = [
  {
    path: "/dashboard",
    exact: true,
    main: () => <Singleplayer />
  },
  {
    path: "/multiplayer",
    exact: true,
    main: () => <Multiplayer />
  },
  {
    path: "/readings",
    exact: true,
    main: () => <ReadingsIcon />
  },
  {
    path: "/collections",
    exact: true,
    main: () => <Collections />
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    background: "linear-gradient(45deg, purple 30%, pink 90%)",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    background: "linear-gradient(45deg, pink 30%, purple 90%)",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    background: "linear-gradient(45deg, pink 30%, purple 90%)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  icon: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center"
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={`${classes.root} main-background`}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <Typography variant="h6" noWrap>
              Magic Bingo
            </Typography>
          </div>
          <div>
            <AccountIcon className={clsx(classes.icon)} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Router>
            <ListItem button key="Single-player Game">
              {/* <Link to="/dashboard"> */}
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Single-player Game" />
              {/* </Link> */}
            </ListItem>
            <ListItem button key="Multiplayer Game">
              <Link to="/multiplayer">
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
              </Link>
              <ListItemText primary="Multiplayer Game" />
            </ListItem>
            <ListItem button key="Previous Readings">
              <ListItemIcon>
                <ReadingsIcon />
              </ListItemIcon>
              <ListItemText primary="Previous Readings" />
            </ListItem>
            <ListItem button key="Collections">
              <ListItemIcon>
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText primary="Collections" />
            </ListItem>
          </Router>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Singleplayer />
      </main>
    </div>
  );
}
