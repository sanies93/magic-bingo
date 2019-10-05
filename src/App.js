import React from "react";
// import MiniDrawer from "./components/drawer";
import Drawer from "./components/drawer"
import Login from "./components/Login/login";
import Register from "./components/register/register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from "./components/Game/game";

function App() {
  return (
    <Router>
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Drawer} />
      <Route path="/" exact component={Login} />
      <Route path="/game" exact component={Game} />
    </Router>
    // <MiniDrawer />
  );
}

export default App;
