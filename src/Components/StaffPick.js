import React from 'react';

const StaffPick = ({ imgSrc, title, category, description }) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-6">
      <div className="StaffPick">
        <div className="StaffPick-image" style={imgSrc}></div>
        <h4>
          <span>|||</span>
          {category}
        </h4>
        <h3>{title}</h3>
        <div className="description-div">
          <p>{description}</p>
        </div>
        <div className="text-center btn-div">
          <button>ПРОЧИТАЈ ПОВЕЌЕ</button>
        </div>
      </div>
    </div>
  );
};

export default StaffPick;
