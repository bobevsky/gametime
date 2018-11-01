import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import StaffPick from "./StaffPick";

    	
class StaffPicks extends Component {
	state = {
		games: []
	}

	async componentDidMount(){
		let games = await axios.get("https://bobevsky.github.io/gametime/games.json");
		
		this.setState({
			games: games.data.filter(game => {
				return (
					games.data[8].id === game.id ||
					games.data[15].id === game.id ||
					games.data[20].id === game.id ||
					games.data[41].id === game.id
				)
			})
		});
	}
	

	render() {
		const {games} = this.state;
		return (
			<div className="StaffPicks" id="StaffPicks">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h4>Препорачани од нашиот тим</h4>
							<hr />
							<hr className="purple-hr"/>
						</div>
					</div>
					<div className="row">
						{games.map( game => {
							const style = {
								backgroundImage: `url("Images/${game.image}.png")`,
								backgroundPosition: "center",
								backgroundSize: 'contain',
								backgroundRepeat: 'no-repeat'
							}

							return (<Link to={`/game/${game.id}`} key={game.id}><StaffPick key={game.id} style={style} title={game.title}
									category={game.category} description={game.description}  /></Link>)
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default StaffPicks;
