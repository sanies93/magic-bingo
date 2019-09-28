import React from "react";
import MiniDrawer from "./components/drawer/drawer";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={MiniDrawer} />
      <Route path="/login" exact component={Login}/>
      {/* <Route path="/" exact component={Login} /> */}
    </Router>
    // <MiniDrawer />
  );
}

export default App;
