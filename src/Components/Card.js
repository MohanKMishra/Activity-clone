import React from "react";
import "./card.css";

const Card = ({ data }) => {
  return (
    <div className="my-card">
      <div className="card-avator">
        <img
          src={`https://source.unsplash.com/random/200x200?sig=${Math.random(100)}`}
          class="img-thumbnail"
          alt="not found"
        ></img>
      </div>
      <div className="card-right">
        <div className="card-name">{data.real_name}</div>
        <div className="card-id"><span>id:</span> {data.id}</div>
        <div className="card-timezone"><span>timezone:</span> {data.tz}</div>
      </div>
    </div>
  );
};
export default Card;
