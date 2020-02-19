import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Detail from "./Detail";

import "./App.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { response: [] };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Topbar />
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/detail/:cardId" component={Detail} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
