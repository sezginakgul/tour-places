import React from "react";
import "./Card.css";
import data from "../../helper/data";

function Card() {
  console.log(data);
  return (
    <div>
      {data.map((city, i) => {
        return (
          <div className="container" key={i}>
            <div className="card">
              <div className="title">{city.title}</div>
              <div className="city">
                <img src={city.image} alt="image" />
              </div>
              <div className="card-bottom">
                <p>{city.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
