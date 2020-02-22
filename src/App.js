import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Containers/Home/Home";
import Contact from "./Containers/Contact/Contact";
import About from "./Containers/About/About";
import Detail from "./Containers/Details/Detail";
import Login from "./Containers/Login/Login";
import Notfound from "./Containers/NotFound/Notfound";
import "./App.css";
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { response: [], status: true };
  }

  handleLogin = () => {
    const status = this.state.status;
    this.setState({ status: !status });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Topbar status={this.state.status} handleLogin={this.handleLogin} />
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route
              path="/login"
              render={() => (
                <Login
                  status={this.state.status}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path="/detail/:cardId"
              render={props =>
                this.state.status ? (
                  <Detail {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route exact path="/" component={Home} />
            <Route path="/not_found" component={Notfound} />
            <Route render={() => <Redirect to="/not_found" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
