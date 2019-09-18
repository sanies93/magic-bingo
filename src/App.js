import React from "react";
// import Game from "./components/Bingo-Card/card.js";
// import Navbar from "./components/navbar";
import MiniDrawer from "./components/drawer/drawer";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={MiniDrawer} />
    </Router>
  );
}

export default App;
