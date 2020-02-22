import React from "react";

import { Link } from "react-router-dom";
import homeStyle from "../../Containers/Home/Home.module.css";
export default function Videocard(props) {
  const cards = props.response.map(data => {
    return (
      <Link to={`/detail/${data.id}`} className={homeStyle.card} key={data.id}>
        <img src={data.thumbnail} alt={data.name} />
        <p>{data.title}</p>
      </Link>
    );
  });

  return <div className={homeStyle.cardWrapper}>{cards}</div>;
}
