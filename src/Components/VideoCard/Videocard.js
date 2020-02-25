import React from "react";
import { Link } from "react-router-dom";
import cardStyle from "./videocard.module.css";
export default function Videocard(props) {
  const cards = props.response.map(data => {
    return (
      <Link to={`/detail/${data.id}`} className={cardStyle.card} key={data.id}>
        <img src={data.thumbnail} alt={data.name} />
        <p>{data.title}</p>
      </Link>
    );
  });

  return <div className={cardStyle.cardWrapper}>{cards}</div>;
}
