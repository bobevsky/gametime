import React from "react";
import { Link } from "react-router-dom";

const Game = ({ img, title, category, time, players, id }) => (
  <div className="game grid-item">
    <Link to={`/Gamepage/${id}`} key={id} className="item-inner">
      <picture className="img-box">
        <img src={img} alt="game-logo" />
      </picture>
      <h3>{title}</h3>
      <p className="category">{category}</p>
      <p className="hoverDescription">
        <span>
          <span className="icon-clock"></span> {time}
        </span>
        <span>
          <span className="icon-user"></span> {players}
        </span>
      </p>
    </Link>
  </div>
);

export default Game;
