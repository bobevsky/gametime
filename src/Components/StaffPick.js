import React from 'react';

const StaffPick = (props) => {
	const {style,title,category,description} = props;
  return (
  	<div className="col-md-3 col-sm-6 col-xs-6">
		<div className="StaffPick">
			<div className="StaffPick-image" style={style}>
			</div>
			<h4><span>|||</span>{category}</h4>
			<h3>{title}</h3>
			<div className="description-div">
				<p>{description}</p>
			</div>
			<div className="text-center btn-div">
				<button>ПРОЧИТАЈ ПОВЕЌЕ</button>
			</div>
    	</div>
  	</div>
    
  )
}

export default StaffPick;