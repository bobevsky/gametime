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
	
	//---------------------------------------- FILTERING LOGIC ------------------------------------------------------------------------------------------
	mainFilter = (clickedCategory, type, value) => {
		
		const {conditions, games, separateGames} = this.state;
				
		//---------------------------------------- CATEGORY LOGIC ------------------------------------------------------------------------------------------
		if (conditions.category.length > 0) {
		//---------------------------------------- AKO GO NEMA NA PRV KLIK ---------------------------------------------------------------------------------
			
			if (conditions.category.includes(clickedCategory[0].category)) {
				if (conditions.players.length > 0 || conditions.time.length > 0) {
					this.setState({
							separateGames: games.filter(item=> conditions.category.includes(item.category))
					})			
				} else {
					this.setState({
							separateGames: games.filter(item => conditions.category.every(condition => condition === item.category) && 
															conditions.time.every(condition => condition === item.time) &&
															conditions.players.every(condition => condition === item.players))
					})	
				}	
			}
		
		//---------------------------------------- AKO GO IMA NA PRV KLIK -----------------------------------------------------------------------------------
			if (!conditions.category.includes(clickedCategory[0].category)) {
				this.setState({
						separateGames: games.filter(item => conditions.category.every(condition => condition === item.category) && 
															conditions.time.every(condition => condition === item.time) &&
															conditions.players.every(condition => condition === item.players))
				})
			}
		}
				
		//----------------------------------------- TIME LOGIC ------------------------------------------------------------------------------------------------
		if (conditions.time.length > 0) {
		
		//---------------------------------------- AKO GO NEMA NA PRV KLIK ---------------------------------------------------------------------------------
			
			if (conditions.time.includes(clickedCategory[0].time)) {
				if (conditions.players.length > 0 || conditions.category.length > 0) {
					this.setState({
							separateGames: separateGames.filter(item => conditions.time.includes(item.time))
					})		
				} else {
					this.setState({
							separateGames: separateGames.filter(item => conditions.time.includes(item.time))
					})	
				}	
												
			}
		
		//---------------------------------------- AKO GO IMA NA PRV KLIK -----------------------------------------------------------------------------------
			if (!conditions.time.includes(clickedCategory[0].time)) {
				this.setState({
						separateGames: games.filter(item => conditions.time.every(condition => condition === item.time) && 
															conditions.category.every(condition => condition === item.category) &&
															conditions.players.every(condition => condition === item.players))
				})
			}
		}
				
		//---------------------------------------- PLAYERS LOGIC --------------------------------------------------------------------------------------------
		if (conditions.players.length > 0) {
		
		//---------------------------------------- AKO GO NEMA NA PRV KLIK ----------------------------------------------------------------------------------
			if (conditions.players.includes(clickedCategory[0].players)) {
				if (conditions.time.length > 0 || conditions.category.length > 0) {
					this.setState({
							separateGames: separateGames.filter(item => conditions.players.includes(item.players))
					})	
				} else {
					this.setState({
							separateGames: separateGames.filter(item => conditions.players.includes(item.players))
					})
				}					
			}
		//---------------------------------------- AKO GO IMA NA PRV KLIK -----------------------------------------------------------------------------------
			
			if (!conditions.players.includes(clickedCategory[0].players)) {
				this.setState({
						separateGames: games.filter(item => conditions.players.every(condition => condition === item.players) && 
															conditions.time.every(condition => condition === item.time) && 
															conditions.category.every(condition => condition === item.category))
				})
			}
		}

		//---------------------------------------- AKO SITE SE PRAZNI ---------------------------------------------------------------------------------------	

		if (conditions.category.length === 0 && conditions.time.length === 0 && conditions.players.length === 0) {
			this.setState({
				separateGames: games
			})
		}

	}

	//---------------------------------------- ADD REMOVE CATEGORY FROM STATE LOGIC -------------------------------------------------------------------------
	addRemoveCategory = (clickedCategory, type, value, e) => {
		if (this.state.conditions[type].includes(value)) {
			e.target.classList.remove('active')
			var index = this.state.conditions[type].indexOf(value);
			this.state.conditions[type].splice(index, 1);
		} else {
			this.state.conditions[type].push(value);
			e.target.classList.add('active')

		}

		this.mainFilter(clickedCategory, type, value)
	}
	
	energija = (e) => {
		let value = e.target.id;
		let energija = this.state.games.filter(game => game.category === "Енергија")
		let type = "category";
		this.addRemoveCategory(energija, type, value, e);
	}

	akcii = (e) => {
		let value = e.target.id;
		let akcii = this.state.games.filter(game => game.category === "Акции");
		let type = "category";
		this.addRemoveCategory(akcii, type, value, e);		
	}

	inovacii = (e) => {
		let value = e.target.id;
		let inovacii = this.state.games.filter(game => game.category === "Иновации");
		let type = "category";
		this.addRemoveCategory(inovacii, type, value, e);		
	}

	tim = (e) => {
		let value = e.target.id;
		let tim = this.state.games.filter(game => game.category === "Тим");
		let type = "category";
		this.addRemoveCategory(tim, type, value, e);		

	}

	liderstvo = (e) => {
		let value = e.target.id;
		let liderstvo = this.state.games.filter(game => game.category === "Лидерство");
		let type = "category";
		this.addRemoveCategory(liderstvo, type, value, e);
	}
	
	all = () => {
		
	}

	showTimeFrameOne = (e) => {
		let value = e.target.id;
		let timeFrameOne = this.state.games.filter(game => game.time === "5-30 минути");
		let type = "time";
		this.addRemoveCategory(timeFrameOne,type, value, e);		
	}

	showTimeFrameTwo = (e) => {
		let value = e.target.id;
		let timeFrameTwo = this.state.games.filter(game => game.time === "30-60 минути");
		let type = "time";
		this.addRemoveCategory(timeFrameTwo,type, value, e);		
		
	}

	showTimeFrameThree = (e) => {
		let value = e.target.id;
		let timeFrameThree = this.state.games.filter(game => game.time === "60-120 минути");
		let type = "time";
		this.addRemoveCategory(timeFrameThree,type, value, e);		
		
	}

	showTimeFrameFour = (e) => {
		let value = e.target.id;
		let timeFrameFour = this.state.games.filter(game => game.time === "120-240 минути");
		let type = "time";
		this.addRemoveCategory(timeFrameFour,type, value, e);		
		
	}

	showGroupOne = (e) => {
		let groupOne = this.state.games.filter(game => game.players === "2-10");
		let value = e.target.id;
		let type = "players";
		this.addRemoveCategory(groupOne, type, value, e);
	}

	showGroupTwo = (e) => {
		let groupTwo = this.state.games.filter(game => game.players === "10-40");
		let value = e.target.id;
		let type = "players";
		this.addRemoveCategory(groupTwo, type, value, e);
	}

	showGroupThree = (e) => { // --> ne e dinamicko
		let groupThree = this.state.games.filter(game => game.players.includes("40+")); // --> ne e dinamicko
		let value = e.target.id || e.target.dataset.players; // --> ne e dinamicko
		let type = "players";
		this.addRemoveCategory(groupThree, type, value, e);
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
