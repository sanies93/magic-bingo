import React from "react";
import MiniDrawer from "./components/Drawer/drawer.js";
import Login from "./components/Login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./components/Game/game";

function App() {
  return (
    <Router>
      <Route path="/dashboard" exact component={MiniDrawer} />
      <Route path="/" exact component={Login} />
      <Route path="/game" exact component={Game} />
    </Router>
    // <MiniDrawer />
  );
}

export default App;
