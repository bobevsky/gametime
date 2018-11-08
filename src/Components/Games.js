import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Game from "./Game";
import Filters from "./Filters";

    	
class Games extends Component {
	state = {
		games: [],
		separateGames: [],
		conditions: {
			category: [],
			time: [],
			players: []
		}
	}

	async componentDidMount(){
		let games = await axios.get("https://json-project3.herokuapp.com/posts");

		this.setState({
			games: games.data,
			separateGames: games.data
		});
	}
	
	addRemoveCategory = (clickedCategory, type, value) => {
			const {conditions} = this.state;
		// this.state.games.map(game => {
				console.log(this.state.games.filter(game => game.players.includes('+')))

				if (conditions.category.length > 0) {
					//ako go nema na prv klik
					if (conditions.category.includes(clickedCategory[0].category)) {
							this.setState(prevState=> {
								return {
									separateGames: prevState.separateGames.filter(item=> conditions.category.every(condition => condition === item.category))
								}
							})						
					}
					//ako go ima na prv klik
					if (!conditions.category.includes(clickedCategory[0].category)) {
						this.setState(prevState=> {
									return {
										separateGames: this.state.games.filter(item => conditions.category.every(condition => condition === item.category) && 
											conditions.time.every(condition => condition === item.time) &&
											conditions.players.every(condition => condition === item.players))
									}
								})
					}
				}
				
				if (conditions.time.length > 0) {
					//ako go nema na prv klik
					if (conditions.time.includes(clickedCategory[0].time)) {
							this.setState(prevState=> {
								return {
									separateGames: this.state.separateGames.filter(item => conditions.time.every(condition => condition === item.time))
								}
							})						
					}
					//ako go ima na prv klik
					if (!conditions.time.includes(clickedCategory[0].time)) {
						this.setState(prevState=> {
									return {
										separateGames: this.state.games.filter(item => conditions.time.every(condition => condition === item.time) && 
											conditions.category.every(condition => condition === item.category) &&
											conditions.players.every(condition => condition === item.players))
									}
								})
					}
				}

				if (conditions.players.length > 0) {
					//ako go nema na prv klik
					if (conditions.players.includes(clickedCategory[0].players)) {
							this.setState(prevState=> {
								return {
									separateGames: this.state.separateGames.filter(item => conditions.players.every(condition => condition === item.players))
								}
							})						
					}
					//ako go ima na prv klik
					if (!conditions.players.includes(clickedCategory[0].players)) {
						this.setState(prevState=> {
									return {
										separateGames: this.state.games.filter(item => conditions.players.every(condition => condition === item.players) && 
											conditions.category.every(condition => condition === item.category) && 
											conditions.time.every(condition => condition === item.time))
									}
								})
					}
				}
				
				if (conditions.category.length === 0 && conditions.time.length === 0 && conditions.players.length === 0) {
					this.setState({
						separateGames: this.state.games
					})
				}

	}

	buttonclick = (clickedCategory, type, value) => {
		// console.log(this.state[type])
		// console.log(type)
		// console.log(value)

		
		if (this.state.conditions[type].includes(value)) {
			var index = this.state.conditions[type].indexOf(value);
				this.state.conditions[type].splice(index, 1);
		} else {
			this.state.conditions[type].push(value);

		}

		this.addRemoveCategory(clickedCategory, type, value)
	}
	
	energija = (e) => {
		let value = e.target.id;
		let energija = this.state.games.filter(game => game.category === "Енергија")
		let type = "category";
		this.buttonclick(energija ,type, value);
	}

	akcii = (e) => {
		let value = e.target.id;
		let akcii = this.state.games.filter(game => game.category === "Акции");
		let type = "category";
		this.buttonclick(akcii,type, value);		
	}

	inovacii = (e) => {
		let value = e.target.id;
		let inovacii = this.state.games.filter(game => game.category === "Иновации")
		let type = "category";
		this.buttonclick(inovacii,type, value);		
	}

	tim = (e) => {
		let value = e.target.id;
		let tim = this.state.games.filter(game => game.category === "Тим")
		let type = "category";
		this.buttonclick(tim,type, value);		

	}

	liderstvo = (e) => {
		let value = e.target.id;
		let liderstvo = this.state.games.filter(game => game.category === "Лидерство")
		let type = "category";
		this.buttonclick(liderstvo,type, value);
	}
	
	all = () => {
		
	}

	showTimeFrameOne = (e) => {
		let value = e.target.id;
		let timeFrameOne = this.state.games.filter(game => game.time === "5-30 минути")
		let type = "time";
		this.buttonclick(timeFrameOne,type, value);		
	}

	showTimeFrameTwo = (e) => {
		let value = e.target.id;
		let timeFrameTwo = this.state.games.filter(game => game.time === "30-60 минути")
		let type = "time";
		this.buttonclick(timeFrameTwo,type, value);		
		
	}

	showTimeFrameThree = (e) => {
		let value = e.target.id;
		let timeFrameThree = this.state.games.filter(game => game.time === "60-120 минути")
		let type = "time";
		this.buttonclick(timeFrameThree,type, value);		
		
	}

	showTimeFrameFour = (e) => {
		let value = e.target.id;
		let timeFrameFour = this.state.games.filter(game => game.time === "120-240 минути")
		let type = "time";
		this.buttonclick(timeFrameFour,type, value);		
		
	}

	showGroupOne = (e) => {
		let groupOne = this.state.games.filter(game => game.players === "2-10")
		let value = e.target.id;
		let type = "players";
		this.buttonclick(groupOne, type, value);
	}

	showGroupTwo = (e) => {
		let groupTwo = (this.state.games.filter(game => game.players === "10-40"))
		let value = e.target.id;
		let type = "players";
		this.buttonclick(groupTwo, type, value);
	}

	showGroupThree = (e) => {
		let groupThree = this.state.games.filter(game => game.players.includes("40+"))
		let value = e.target.id || e.target.dataset.players;
		let type = "players";
		this.buttonclick(groupThree, type, value);
	}

	render() {
		const {separateGames,games} = this.state;
		return (
			<div className="Games">
				<div className="container">
					<div className="row">
						<Filters 
							all={games.length} 
							energija={games.filter(game => game.category === "Енергија").length}
							akcii={games.filter(game => game.category === "Акции").length}
							inovacii={games.filter(game => game.category === "Иновации").length}
							tim={games.filter(game => game.category === "Тим").length}
							liderstvo={games.filter(game => game.category === "Лидерство").length}
							energijaClick = {this.energija}
							akciiClick= {this.akcii}
							inovaciiClick={this.inovacii}
							timClick={this.tim}
							liderstvoClick={this.liderstvo}
							allClick={this.all}
							timeFrameOne={this.showTimeFrameOne}
							timeFrameTwo={this.showTimeFrameTwo}
							timeFrameThree={this.showTimeFrameThree}
							timeFrameFour={this.showTimeFrameFour}
							groupOne={this.showGroupOne}
							groupTwo={this.showGroupTwo}
							groupThree={this.showGroupThree}
						/>
					</div>
					<div className="row">
						{separateGames.map( game => {
							const style = {
									backgroundImage: `url("Images/${game.id}.png")`
										}
							return (<Link to={`/game/${game.id}`} key={game.id}><Game key={game.id} style={style} title={game.title}
									category={game.category} time={game.time} players={game.players} /></Link>)
							})}
					</div>
				</div>
			</div>
		);
	}
}

export default Games;
