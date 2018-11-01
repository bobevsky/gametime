import React, { Component } from 'react';
import axios from "axios";
import uuid from "uuid";
import ReactDisqusComments from 'react-disqus-comments';
import { SimpleShareButtons } from "react-simple-share";
import {Helmet} from "react-helmet";
    	
class Gamepage extends Component {
	state = {
		games: [],
		steps: [],
		images: []
	}

	async componentDidMount(){
		let games = await axios.get(`http://localhost:3001/games/${this.props.match.params.id}`);
		this.setState({
			games: games.data,
			steps: games.data.steps,
			images: games.data.stepsImages
		})
	}
	
	async componentDidUpdate(prevProps){
		if (this.props.location !== prevProps.location) {
			let games = await axios.get(`http://localhost:3001/games/${this.props.match.params.id}`);
			this.setState({
				games: games.data,
				steps: games.data.steps,
				images: games.data.stepsImages
			})
		} 		
	}

	render() {
		const {category, title, description, image, time, players, level, materials} = this.state.games;
		const style = {
			backgroundImage: `url("Images/${image}.png")`,
			backgroundPosition: "center",
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat"
		}
		return (
			<div className="container">
				<Helmet>
	                <title>{title}</title>
	                <meta property="og:title" content={title} />
					<meta name="og:description" content={description} />
					<meta property="og:image" content={`Images/${image}.png`} />
					<meta property="og:type" content="article" /> 
					<meta name="author" content="Kristijan Bobevski" />
					<meta name="og:url" content={`https://bobevsky.github.io/gametime/#/game/${image}`} />
	            </Helmet>
				<div className="Gamepage">
					<div className="row">
						<div className="col-md-4 col-sm-4 col-xs-4">
							<div className="game-image" style={style}>
						
							</div>
						</div>
						<div className="col-md-5 col-sm-6 col-xs-8">
							<h4><span>|||</span> {category}</h4>
							<h2>{title}</h2>
							<p>{description}</p>
						</div>
						<div className="col-md-1 col-md-offset-2 text-center col-sm-1 col-sm-offset-1 hidden-xs">
							<a href="#social-media"><i className="fas fa-share-alt fa-3x"></i> SHARE</a>
						</div>
					</div>
					<div className="row">
						<div className="col-md-10 col-md-offset-1 col-xs-12">
							<div className="row">
								<div className="col-md-3 col-xs-3">
									<div className="row">
										<div className="col-md-2 col-xs-12">
											<i className="far fa-clock fa-2x"></i>
										</div>
										<div className="col-md-10 col-xs-12">
											<h5 className="hidden-xs">ВРЕМЕНСКА РАМКА</h5>
											<p>{time}</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-xs-3">
									<div className="row">
										<div className="col-md-2 col-xs-12">
											<i className="fas fa-male fa-2x"></i>
										</div>
										<div className="col-md-10 col-xs-12">
											<h5 className="hidden-xs">ГОЛЕМИНА НА ГРУПА</h5>
											<p>{players}</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 p-left col-xs-3">
									<div className="row">
										<div className="col-md-2 col-xs-12">
											<i className="fas fa-weight-hanging fa-2x"></i>
										</div>
										<div className="col-md-10 col-xs-12">
											<h5 className="hidden-xs">ТЕЖИНА</h5>
											<p>{level}</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-xs-3">
									<div className="row">
										<div className="col-md-2 col-xs-12">
											<i className="far fa-edit fa-2x"></i>
										</div>
										<div className="col-md-10 col-xs-12">
											<h5 className="hidden-xs">МАТЕРИЈАЛИ</h5>
											<p>{materials}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
							<div className="row">
								<div className="col-md-8">
									{this.state.steps.map((step,i) => {
										const {text} = step;
										return(
											<div key={i}>
												<h3>{step.step}</h3>
												{text.split("\n").map(line => (
												    <span key={uuid()}>
												      {line}
												      <br />
												      <br />
												    </span>
												))}
												<hr/>
											</div>
										)
									})}
								</div>
								{
								// <div className="col-md-4">
								// 	{this.state.images.map((image,i) => {
								// 		const style = {
								// 			// backgroundImage: `url("${image}.png")`
								// 		}
								// 		return (<div style={style} key={i}></div>)})}
								// </div>
								}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
							<ReactDisqusComments
						        shortname="brainsterbox"
						        identifier= "brainsterbox.disqus.com"
						        title="Comments"
						        url={window.location.href}
						    />
						</div>
					</div>
					<div className="row" id="social-media">
						<div className="col-md-12">
							<SimpleShareButtons
							    whitelist={["Facebook", "Twitter", "LinkedIn", "Google+"]} size="40px"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gamepage;
