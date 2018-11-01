import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Game from "./Game";
import Filters from "./Filters";

    	
class Games extends Component {
	state = {
		games: [],
		separateGames: [],
		globalactive: false,
		activeAkcii: false,
		activeEnergija: false,
		activeInovacii: false,
		activeTim: false,
		activeLiderstvo: false,
		activeTimeOne: false
	}

	async componentDidMount(){
		let games = await axios.get("https://bobevsky.github.io/gametime/games.json");

		this.setState({
			games: games.data,
			separateGames: games.data
		});
	}

	energija = () => {
		const energija = (this.state.games.filter(game => game.category === "Енергија"))

		if (this.state.globalactive === false) {
			this.setState({
					separateGames: energija,
					activeEnergija: true,
					globalactive: true
				})
		} else {
			if (this.state.activeEnergija === true) {
				this.setState(prevState => {
						return {
							separateGames: prevState.separateGames.filter(game => game.category !== "Енергија"),
							activeEnergija: false
						}
					})
			}
			if (this.state.activeEnergija === false){
				this.setState(prevState => {
					return {
						separateGames: prevState.separateGames.concat(energija),
						activeEnergija: true
					}
				})	
			}
		}
	}

	akcii = () => {
		const akcii = (this.state.games.filter(game => game.category === "Акции"));

		if (this.state.globalactive === false) {
			this.setState({
					separateGames: akcii,
					activeAkcii: true,
					globalactive: true
				})
		} else {
			if (this.state.activeAkcii === true) {
				this.setState(prevState => {
						return {
							separateGames: prevState.separateGames.filter(game => game.category !== "Акции"),
							activeAkcii: false
						}
					})				
			}
			if (this.state.activeAkcii === false){
				this.setState(prevState => {
					return {
						separateGames: prevState.separateGames.concat(akcii),
						activeAkcii: true
					}
				})
			}
		}
		
	}

	inovacii = () => {
		const inovacii = (this.state.games.filter(game => game.category === "Иновации"))
		console.log(this.state.separateGames.concat(inovacii))
		console.log([...this.state.separateGames, inovacii])
		if (this.state.globalactive === false) {
			this.setState({
					separateGames: inovacii,
					activeInovacii: true,
					globalactive: true
				})
		} else {
			if (this.state.activeInovacii === true) {
				this.setState(prevState => {
						return {
							separateGames: prevState.separateGames.filter(game => game.category !== "Иновации"),
							activeInovacii: false
						}
					})				
			}
			if (this.state.activeInovacii === false){
				this.setState(prevState => {
					return {
						separateGames: prevState.separateGames.concat(inovacii),
						activeInovacii: true
					}
				})
			}
		}
	}

	tim = () => {
		const tim = (this.state.games.filter(game => game.category === "Тим"))
		
		if (this.state.globalactive === false) {
			this.setState({
					separateGames: tim,
					activeTim: true,
					globalactive: true
				})
		} else {
			if (this.state.activeTim === true) {
				this.setState(prevState => {
						return {
							separateGames: prevState.separateGames.filter(game => game.category !== "Тим"),
							activeTim: false
						}
					})				
			}
			if (this.state.activeTim === false){
				this.setState(prevState => {
					return {
						separateGames: prevState.separateGames.concat(tim),
						activeTim: true
					}
				})
			}
		}
	}

	liderstvo = () => {
		const liderstvo = (this.state.games.filter(game => game.category === "Лидерство"))
		
		if (this.state.globalactive === false) {
			this.setState({
					separateGames: liderstvo,
					activeLiderstvo: true,
					globalactive: true
				})
		} else {
			if (this.state.activeLiderstvo === true) {
				this.setState(prevState => {
						return {
							separateGames: prevState.separateGames.filter(game => game.category !== "Лидерство"),
							activeLiderstvo: false
						}
					})				
			}
			if (this.state.activeLiderstvo === false){
				this.setState(prevState => {
					return {
						separateGames: prevState.separateGames.concat(liderstvo),
						activeLiderstvo: true
					}
				})
			}
		}
	}
	
	all = () => {
		this.setState(prevState => {
			return {
				separateGames: prevState.games,
				globalactive: false,
				activeAkcii: false,
				activeEnergija: false,
				activeInovacii: false,
				activeTim: false,
				activeLiderstvo: false,
				activeTimeOne: false
			}
		})
	}

	showTimeFrameOne = () => {
		const timeFrameOne = (this.state.games.filter(game => game.time === "5-30 минути"))
		
		if (this.state.globalactive === false) {
			this.setState({
					separateGames: timeFrameOne,
					activeTimeOne: true,
					globalactive: true
				})
		} else {
			if (this.state.activeTimeOne === true) {
				this.setState(prevState => {
						return {
							separateGames: prevState.separateGames.filter(game => game.time !== "5-30 минути"),
							activeTimeOne: false
						}
					})				
			}
			if (this.state.activeTimeOne === false){
				this.setState(prevState => {
					return {
						separateGames: prevState.separateGames.filter(game => game.time === "5-30 минути"),
						activeTimeOne: true
					}
				})
			}
		}
		
	}

	showTimeFrameTwo = () => {
		const timeFrameTwo = (this.state.games.filter(game => game.time === "30-60 минути"))
		this.setState({
			separateGames: timeFrameTwo
		})
	}

	showTimeFrameThree = () => {
		const timeFrameThree = (this.state.games.filter(game => game.time === "60-120 минути"))
		this.setState({
			separateGames: timeFrameThree
		})
	}

	showTimeFrameFour = () => {
		const timeFrameFour = (this.state.games.filter(game => game.time === "120-240 минути"))
		this.setState({
			separateGames: timeFrameFour
		})
	}

	showGroupOne = () => {
		const groupOne = (this.state.games.filter(game => game.players === "2-10"))
		this.setState({
			separateGames: groupOne
		})
	}

	showGroupTwo = () => {
		const groupTwo = (this.state.games.filter(game => game.players === "10-40"))
		this.setState({
			separateGames: groupTwo
		})
	}

	showGroupThree = () => {
		const groupThree = (this.state.games.filter(game => game.players === "2-40+" || game.players === "10-40+"))
		this.setState({
			separateGames: groupThree
		})
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
