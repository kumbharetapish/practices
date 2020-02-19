import React from "react";
import { Component } from "react";
import Axios from "axios";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: {}
    };
  }

  componentDidMount() {
    Axios.get(
      "https://5dfb78410301690014b8fbe2.mockapi.io/playlist/video/" +
        this.props.match.params.cardId
    )
      .then(response => {
        console.log(response.data);
        this.setState({ videoData: { ...response.data } });
      })
      .catch(error => {
        console.log("error====" + error);
        this.setState({ videoData: {} });
      });
  }
  render() {
    const { state: { videoData: { title = "Not Fonts" } = {} } = {} } = this;
    console.log(title);

    return (
      <div>
        <h2>"This is Detail Page" {this.props.match.params.cardId}</h2>
        <h1>{title}</h1>
        {}
      </div>
    );
  }
}

export default Detail;
