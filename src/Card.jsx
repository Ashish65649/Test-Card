import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <img className="card-image" src={props.srcUrl} alt="my_card" />
        <div className="card-content">
          <p className="card-title"> {props.title} </p>
          <p className="card-desc">{props.text}</p>
          <a href={props.buttonLink} target="_blank" rel="noreferrer">
            <button>Click Here</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
