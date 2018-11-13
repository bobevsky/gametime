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
							energijaClick = {(e) => {this.addRemoveCategory("category", e.target.id, "EnergijaClick")}}
							energijaColor = {EnergijaClick}
							akcii={games.filter(game => game.category === "Акции").length}
							akciiClick= {(e) => {this.addRemoveCategory("category", e.target.id, "AkciiClick")}}
							akciiColor = {AkciiClick}
							inovacii={games.filter(game => game.category === "Иновации").length}
							inovaciiClick= {(e) => {this.addRemoveCategory("category", e.target.id, "InovaciiClick")}}
							inovaciiColor = {InovaciiClick}
							tim={games.filter(game => game.category === "Тим").length}
							timClick= {(e) => {this.addRemoveCategory("category", e.target.id, "TimClick")}}
							timColor = {TimClick}
							liderstvo={games.filter(game => game.category === "Лидерство").length}
							liderstvoClick= {(e) => {this.addRemoveCategory("category", e.target.id, "LiderstvoClick")}}
							liderstvoColor = {LiderstvoClick}
							allClick={this.all}
							showAll = {allClick}
							timeFrameOne= {(e) => {this.addRemoveCategory("time", e.target.id, "timeOneClick")}}
							timeOneClick = {timeOneClick}
							timeFrameTwo= {(e) => {this.addRemoveCategory("time", e.target.id, "timeTwoClick")}}
							timeTwoClick = {timeTwoClick}
							timeFrameThree= {(e) => {this.addRemoveCategory("time", e.target.id, "timeThreeClick")}}
							timeThreeClick = {timeThreeClick}
							timeFrameFour= {(e) => {this.addRemoveCategory("time", e.target.id, "timeFourClick")}}
							timeFourClick = {timeFourClick}
							groupOne= {(e) => {this.addRemoveCategory("players", e.target.id, "groupOneClick")}}
							groupOneClick = {groupOneClick}
							groupTwo= {(e) => {this.addRemoveCategory("players", e.target.id, "groupTwoClick")}}
							groupTwoClick = {groupTwoClick}
							groupThree= {(e) => {this.addRemoveCategory("players", e.target.id || e.target.dataset.players, "groupThreeClick")}}
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
