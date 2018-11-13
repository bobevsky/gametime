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
		},
		allClick: true,
		EnergijaClick: false,
		AkciiClick: false,
		InovaciiClick: false,
		TimClick: false,
		LiderstvoClick: false,
		timeOneClick: false,
		timeTwoClick: false,
		timeThreeClick: false,
		timeFourClick: false,
		groupOneClick: false,
		groupTwoClick: false,
		groupThreeClick: false,

	}

	async componentDidMount(){
		let games = await axios.get("https://json-project3.herokuapp.com/posts");

		this.setState({
			games: games.data,
			separateGames: games.data
		});
	}


	//---------------------------------------- FILTERING LOGIC ------------------------------------------------------------------------------------------
	mainFilter = () => {

		const {conditions, games} = this.state;
				
		//---------------------------------------- CATEGORY LOGIC ------------------------------------------------------------------------------------------
		if (conditions.category.length > 0) {
			this.setState({
				separateGames: games.filter(item =>  conditions.category.includes(item.category))
			})

			if (conditions.players.length > 0) {
				this.setState({
					separateGames: games.filter(item => conditions.category.includes(item.category) &&
														conditions.players.includes(item.players))
				})
				// console.log("prv if vo category za players")				
			}

			if (conditions.time.length > 0) {
				this.setState({
					separateGames: games.filter(item => conditions.category.includes(item.category) &&
														conditions.time.includes(item.time))
				})
				// console.log("prv if vo category za time")
			}

			if (conditions.time.length > 0 && conditions.players.length > 0) {
				this.setState({
					separateGames: games.filter(item => conditions.category.includes(item.category) &&
														conditions.players.includes(item.players) &&
														conditions.time.includes(item.time))
					})	
				// console.log("tret if vo category za dvete")
			}
		}
				
		//----------------------------------------- TIME LOGIC ------------------------------------------------------------------------------------------------
		if (conditions.time.length > 0) {
			this.setState({
				separateGames: games.filter(item => conditions.time.includes(item.time))
			})
			
			if (conditions.players.length > 0) {
				this.setState({
					separateGames: games.filter(item => conditions.time.includes(item.time) &&
														conditions.players.includes(item.players))
				})	
				// console.log("prv if vo time za players")	
			}
			if (conditions.category.length > 0) {
				this.setState({
					separateGames: games.filter(item => conditions.time.includes(item.time) &&
														conditions.category.includes(item.category))
				})	
				// console.log("prv if vo time za category")
			}

			if (conditions.category.length > 0 && conditions.players.length > 0) {
				this.setState({
					separateGames: games.filter(item => conditions.category.includes(item.category) &&
														conditions.players.includes(item.players) &&
														conditions.time.includes(item.time))
					})	
				// console.log("tret if vo time za dvete")
			}	
												
		}
				

		//---------------------------------------- PLAYERS LOGIC --------------------------------------------------------------------------------------------
		if (conditions.players.length > 0) {
			this.setState({
				separateGames: games.filter(item => conditions.players.includes(item.players))
			})

			if (conditions.time.length > 0) {
				this.setState({
						separateGames: games.filter(item => conditions.players.includes(item.players) &&
															conditions.time.includes(item.time))
					})	
				// console.log("prv if vo players za time")
			} 	

			if (conditions.category.length > 0) {
				this.setState({
						separateGames: games.filter(item => conditions.category.includes(item.category) &&
															conditions.players.includes(item.players))
					})	
				// console.log("prv if vo players za category")
			}	

			if (conditions.category.length > 0 && conditions.time.length > 0) {
				this.setState({
						separateGames: games.filter(item => conditions.category.includes(item.category) &&
															conditions.players.includes(item.players) &&
															conditions.time.includes(item.time))
					})	
				// console.log("tret if vo players za dvete")
			}			
		}
			 


		//---------------------------------------- AKO SITE SE PRAZNI ---------------------------------------------------------------------------------------	

		if (conditions.category.length === 0 && conditions.time.length === 0 && conditions.players.length === 0) {
			this.setState({
				separateGames: games,
				allClick: true
			})
		}

	}

	//---------------------------------------- ADD REMOVE CATEGORY FROM STATE LOGIC -------------------------------------------------------------------------
	addRemoveCategory = (type, value, colored) => {
		const {EnergijaClick, InovaciiClick, AkciiClick, LiderstvoClick, TimClick, timeOneClick, timeTwoClick, timeThreeClick, timeFourClick,
			   groupOneClick, groupTwoClick, groupThreeClick} = this.state;
		if (this.state.conditions[type].includes(value)) {
			var index = this.state.conditions[type].indexOf(value);
			this.state.conditions[type].splice(index, 1);
			this.setState({
				[colored]: false
			})
			if (EnergijaClick === true && InovaciiClick === true && AkciiClick === true &&
				LiderstvoClick === true && TimClick === true && timeOneClick === true &&
				timeTwoClick === true && timeThreeClick === true && timeFourClick === true &&
				groupOneClick === true && groupTwoClick === true && groupThreeClick === true) {
				this.setState({
					allClick: true
				})
			}
		} else {
			this.state.conditions[type].push(value);
			this.setState({
				[colored]: true
			})
			if (EnergijaClick === false && InovaciiClick === false && AkciiClick === false &&
				LiderstvoClick === false && TimClick === false && timeOneClick === false &&
				timeTwoClick === false && timeThreeClick === false && timeFourClick === false &&
				groupOneClick === false && groupTwoClick === false && groupThreeClick === false) {
				this.setState({
					allClick: false
				})
			}
		}
		this.mainFilter();
	}
	
	energija = (e) => {
		let value = e.currentTarget.id;
		// let energija = this.state.games.filter(game => game.category === "Енергија");
		let type = "category";
		let colorClicked = "EnergijaClick";
		this.addRemoveCategory(type, value, colorClicked);
	}

	akcii = (e) => {
		let value = e.target.id;
		// let akcii = this.state.games.filter(game => game.category === "Акции");
		let type = "category";
		let colorClicked = "AkciiClick";
		this.addRemoveCategory(type, value, colorClicked);		
	}

	inovacii = (e) => {
		let value = e.target.id;
		// let inovacii = this.state.games.filter(game => game.category === "Иновации");
		let type = "category";
		let colorClicked = "InovaciiClick";
		this.addRemoveCategory(type, value, colorClicked);		
	}

	tim = (e) => {
		let value = e.target.id;
		// let tim = this.state.games.filter(game => game.category === "Тим");
		let type = "category";
		let colorClicked = "TimClick";
		this.addRemoveCategory(type, value, colorClicked);		

	}

	liderstvo = (e) => {
		let value = e.target.id;
		// let liderstvo = this.state.games.filter(game => game.category === "Лидерство");
		let type = "category";
		let colorClicked = "LiderstvoClick";
		this.addRemoveCategory(type, value, colorClicked);
	}
	
	all = () => {
		this.setState(prevState => {
			return {
				separateGames: this.state.games,
				conditions: {
					category: [],
					time: [],
					players: []
				},
				allClick: !prevState.allClick,
				EnergijaClick: false,
				AkciiClick: false,
				InovaciiClick: false,
				LiderstvoClick: false,
				TimClick: false,
				timeOneClick: false,
				timeTwoClick: false,
				timeThreeClick: false,
				timeFourClick: false,
				groupOneClick: false,
				groupTwoClick: false,
				groupThreeClick: false
			}
		})	
	}

	showTimeFrameOne = (e) => {
		let value = e.target.id;
		// let timeFrameOne = this.state.games.filter(game => game.time === "5-30 минути");
		let type = "time";
		let timeClicked = "timeOneClick";
		this.addRemoveCategory(type, value, timeClicked);		
	}

	showTimeFrameTwo = (e) => {
		let value = e.target.id;
		// let timeFrameTwo = this.state.games.filter(game => game.time === "30-60 минути");
		let type = "time";
		let timeClicked = "timeTwoClick";
		this.addRemoveCategory(type, value, timeClicked);		
		
	}

	showTimeFrameThree = (e) => {
		let value = e.target.id;
		// let timeFrameThree = this.state.games.filter(game => game.time === "60-120 минути");
		let type = "time";
		let timeClicked = "timeThreeClick";
		this.addRemoveCategory(type, value, timeClicked);		
		
	}

	showTimeFrameFour = (e) => {
		let value = e.target.id;
		// let timeFrameFour = this.state.games.filter(game => game.time === "120-240 минути");
		let type = "time";
		let timeClicked = "timeFourClick";
		this.addRemoveCategory(type, value, timeClicked);		
		
	}

	showGroupOne = (e) => {
		// let groupOne = this.state.games.filter(game => game.players === "2-10");
		let value = e.target.id;
		let type = "players";
		let groupClicked = "groupOneClick";
		this.addRemoveCategory(type, value, groupClicked);
	}

	showGroupTwo = (e) => {
		// let groupTwo = this.state.games.filter(game => game.players === "10-40");
		let value = e.target.id;
		let type = "players";
		let groupClicked = "groupTwoClick";
		this.addRemoveCategory(type, value, groupClicked);
	}

	showGroupThree = (e) => { // --> ne e dinamicko
		// let groupThree = this.state.games.filter(game => game.players.includes("40+")); // --> ne e dinamicko
		let value = e.target.id || e.target.dataset.players; // --> ne e dinamicko
		let type = "players";
		let groupClicked = "groupThreeClick";
		this.addRemoveCategory(type, value, groupClicked);
	}

	render() {
		const {separateGames, games , EnergijaClick, AkciiClick, InovaciiClick, TimClick, LiderstvoClick, timeOneClick, timeTwoClick, timeThreeClick, timeFourClick,
			   groupOneClick, groupTwoClick, groupThreeClick, allClick} = this.state;
		return (
			<div className="Games">
				<div className="container">
					<div className="row">
						<Filters 
							all={games.length} 
							energija={games.filter(game => game.category === "Енергија").length}
							energijaClick = {this.energija}
							energijaColor = {EnergijaClick}
							akcii={games.filter(game => game.category === "Акции").length}
							akciiClick= {this.akcii}
							akciiColor = {AkciiClick}
							inovacii={games.filter(game => game.category === "Иновации").length}
							inovaciiClick={this.inovacii}
							inovaciiColor = {InovaciiClick}
							tim={games.filter(game => game.category === "Тим").length}
							timClick={this.tim}
							timColor = {TimClick}
							liderstvo={games.filter(game => game.category === "Лидерство").length}
							liderstvoClick={this.liderstvo}
							liderstvoColor = {LiderstvoClick}
							allClick={this.all}
							showAll = {allClick}
							timeFrameOne={this.showTimeFrameOne}
							timeOneClick = {timeOneClick}
							timeFrameTwo={this.showTimeFrameTwo}
							timeTwoClick = {timeTwoClick}
							timeFrameThree={this.showTimeFrameThree}
							timeThreeClick = {timeThreeClick}
							timeFrameFour={this.showTimeFrameFour}
							timeFourClick = {timeFourClick}
							groupOne={this.showGroupOne}
							groupOneClick = {groupOneClick}
							groupTwo={this.showGroupTwo}
							groupTwoClick = {groupTwoClick}
							groupThree={this.showGroupThree}
							groupThreeClick = {groupThreeClick}
						/>
					</div>
					<div className="row">
						{separateGames.map( game => {
							const style = {
									backgroundImage: `url("Images/${game.id}.png")`
										}
							return (<Link to={`/game/${game.id}`} key={game.id}><Game key={game.id} style={style} title={game.title}
									category={game.category} time={game.time} players={game.players} /></Link>)
							})

						}
					</div>
				</div>
			</div>
		);
	}
}

export default Games;
