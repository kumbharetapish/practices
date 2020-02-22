import React, { Component } from "react";
import Axios from "axios";
import homeStyle from "./Home.module.css";
import Videocard from "../../Components/VideoCard/Videocard";

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { response: [] };
  }

  componentDidMount() {
    Axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
      .then(response => {
        console.log(response.data);
        this.setState({ response: [...response.data] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={homeStyle.cardWrapper}>
        <br/><br/>
        <br/><br/>
        <Videocard response={this.state.response} />
      </div>
    );
  }
}

export default Home;
