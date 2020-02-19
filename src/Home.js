import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

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
    const cards = this.state.response.map(data => {
      return (
        <Link
          to={`/detail/${data.id}`}
          className="card"
          href="/"
          key={data.id}
        >
          <img src={data.thumbnail} alt={data.name} />
          <p>{data.title}</p>
        </Link>
      );
    });

    return <div className="App">{cards}</div>;
  }
}

export default Home;
