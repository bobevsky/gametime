import React from "react";
import { Link } from "react-router-dom";

const StaffPickItem = ({ img, category, title, description, id }) => (
  <div className="grid-item">
    <Link to={`/Gamepage/${id}`} replace key={id} className="item-inner">
      <picture className="img-box">
        <img src={img} alt="staffpic-logo" />
      </picture>
      <p className="category">{category}</p>
      <h3>{title}</h3>
      <div className="description-div">
        <p>{description}</p>
      </div>
      <span className="btn">ПРОЧИТАЈ ПОВЕЌЕ</span>
    </Link>
  </div>
);

export default StaffPickItem;
