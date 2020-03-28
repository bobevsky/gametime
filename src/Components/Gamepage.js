import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';
import uuid from 'uuid';
import ReactDisqusComments from 'react-disqus-comments';
import { SimpleShareButtons } from 'react-simple-share';
import { Helmet } from 'react-helmet';

const Gamepage = ({ location, match }) => {
	const [currentGame, setCurrentGame] = useState({});

	useEffect(() => {
		getCurrentGame();
	}, [location]);

	async function getCurrentGame() {
		let game = await axios(
			`https://json-server-heroku-aqcspxgllg.now.sh/posts/${match.params.id}`
		);
		setCurrentGame(game.data);
	}

	const {
		category,
		title,
		description,
		image,
		time,
		players,
		level,
		materials,
		steps
	} = currentGame;

	return (
		<div className="container">
			<div className="Gamepage">
				<Helmet>
					<title>{title}</title>
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					<meta
						property="og:image"
						content={image && require(`../assets/img/img-cards/${image}.png`)}
					/>
					<meta property="og:type" content="article" />
					<meta name="author" content="Kristijan Bobevski" />
					<meta
						property="og:url"
						content={`https://bobevsky.github.io/gametime/#/game/${image}/`}
					/>
					<meta
						name="base_url"
						content={`https://bobevsky.github.io/gametime/#/game/${image}/`}
					/>
				</Helmet>
				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-4">
						<div
							className="game-image"
							style={{
								backgroundImage:
									image && `url(${require(`../assets/img/img-cards/${image}.png`)})`
							}}
						></div>
					</div>
					<div className="col-md-5 col-sm-6 col-xs-8">
						<h4>
							<span>|||</span> {category}
						</h4>
						<h2>{title}</h2>
						<p>{description}</p>
					</div>
					<div className="col-md-1 col-md-offset-2 text-center col-sm-1 col-sm-offset-1 hidden-xs">
						<Link smooth to="#social-media">
							<i className="fas fa-share-alt fa-3x"></i> SHARE
						</Link>
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
							<div className="col-md-12">
								{steps &&
									steps.map((step, i) => (
										<div key={i} className="row flex">
											<div className="col-md-9 col-sm-8">
												<h3>{step.step}</h3>
												{step.text.split('\n').map(line => (
													<span key={uuid()}>
														{line}
														<br />
														<br />
													</span>
												))}
												<hr className={step.stepImg !== '' ? 'hidden-xs' : ''} />
											</div>
											{step.stepImg !== '' && (
												<div className="col-md-3 col-sm-4 col-xs-12 text-center flex-advanced">
													<img
														src={require(`../assets/img/img-steps/${step.stepImg}.png`)}
														alt=""
														className="stepImg"
													/>
													<hr className="hidden-lg hidden-md hidden-sm" />
												</div>
											)}
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
						<ReactDisqusComments
							shortname="brainsterbox"
							identifier="brainsterbox.disqus.com"
							title="Comments"
							url={window.location.href}
						/>
					</div>
				</div>
				<div className="row" id="social-media">
					<div className="col-md-12">
						<SimpleShareButtons
							whitelist={['Facebook', 'Twitter', 'LinkedIn', 'Google+']}
							size="40px"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gamepage;
