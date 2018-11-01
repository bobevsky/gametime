import React from 'react';

const Game = (props) => {

	const {style, title, category, time, players} = props;
	
  return (
    <div className="col-md-3 text-center col-sm-6 col-xs-6">
		<div className="Game">
			<div className="image-div" style={style}>
			</div>
			<h3>{title}</h3>
			<p>{category}</p>
			<p className="hover-description"><span className="m-right"><i className="far fa-clock"></i> {time}</span> <span><i className="fas fa-male"></i> {players}</span></p>
	    </div>
    </div>
  )
}

export default Game;