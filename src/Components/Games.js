import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Game from './Game';
import Filters from './Filters';

const Games = props => {
	const [state, setState] = useState({
		games: [],
		gamesToRender: [],
		filters: {
			all: true,
			category: {
				Енергија: false,
				Иновации: false,
				Лидерство: false,
				Акции: false,
				Тим: false
			},
			time: {
				'5-30 минути': false,
				'30-60 минути': false,
				'60-120 минути': false,
				'120-240 минути': false
			},
			players: {
				'2-10': false,
				'10-40': false,
				'40+': false
			}
		},
		filterNames: {
			category: {
				Energy: false,
				Inovations: false,
				Leadership: false,
				Actions: false,
				Team: false
			},
			time: {
				five_thirty_min: false,
				thirty_sixty_min: false,
				sixty_hundredtwenty_min: false,
				hundredtwenty_twohundredfourty_min: false
			},
			players: {
				two_ten: false,
				ten_fourty: false,
				fourty_plus: false
			}
		}
	});

	//set the initial games
	useEffect(() => {
		getGames();
	}, []);

	//filter the games based on the active filters
	useEffect(() => {
		let allFiltersThatAreActive = {
			category: [],
			time: [],
			players: []
		};

		const { category, players, time } = state.filters;

		for (let i in category) {
			category[i] && allFiltersThatAreActive.category.push(i);
		}

		for (let i in time) {
			time[i] && allFiltersThatAreActive.time.push(i);
		}

		for (let i in players) {
			players[i] && allFiltersThatAreActive.players.push(i);
		}

		const filterKeys = Object.keys(allFiltersThatAreActive);

		let filteredGames = state.games.filter(eachCard => {
			return filterKeys.every(key => {
				if (!allFiltersThatAreActive[key].length) {
					return true;
				}

				return allFiltersThatAreActive[key].includes(eachCard[key]);
			});
		});

		setState(prevState => ({
			...prevState,
			gamesToRender: filteredGames
		}));
	}, [state.filters, state.games]);

	//toggle the all-games btn active if there are all games shown at any time
	useEffect(() => {
		const { gamesToRender, games } = state;

		if (gamesToRender.length === games.length) {
			setState(prevState => ({
				...prevState,
				filters: {
					...prevState.filters,
					all: true
				}
			}));
		}
	}, [state.gamesToRender.length, state.games.length]);

	async function getGames() {
		const { data } = await axios('https://json-server-heroku-aqcspxgllg.now.sh/posts');

		setState(prevState => ({
			...prevState,
			games: data,
			gamesToRender: data
		}));
	}

	const toggleFilters = e => {
		let dataFilter = e.target.dataset.filter,
			dataFilterName = e.target.dataset.filterName,
			dataFilterNameEn = e.target.dataset.filterNameEn;

		setState(prevState => ({
			...prevState,
			filters: {
				...prevState.filters,
				all: false,
				[dataFilter]: {
					...prevState.filters[dataFilter],
					[dataFilterName]: !prevState.filters[dataFilter][dataFilterName]
				}
			},
			filterNames: {
				...prevState.filterNames,
				[dataFilter]: {
					...prevState.filterNames[dataFilter],
					[dataFilterNameEn]: !prevState.filterNames[dataFilter][dataFilterNameEn]
				}
			}
		}));
	};

	const toggleAll = () => {
		setState(prevState => ({
			...prevState,
			filters: {
				all: true,
				category: {
					Енергија: false,
					Иновации: false,
					Лидерство: false,
					Акции: false,
					Тим: false
				},
				time: {
					'5-30 минути': false,
					'30-60 минути': false,
					'60-120 минути': false,
					'120-240 минути': false
				},
				players: {
					'2-10': false,
					'10-40': false,
					'40+': false
				}
			},
			filterNames: {
				category: {
					Energy: false,
					Inovations: false,
					Leadership: false,
					Actions: false,
					Team: false
				},
				time: {
					five_thirty_min: false,
					thirty_sixty_min: false,
					sixty_hundredtwenty_min: false,
					hundredtwenty_twohundredfourty_min: false
				},
				players: {
					two_ten: false,
					ten_fourty: false,
					fourty_plus: false
				}
			}
		}));
	};

	const { games, gamesToRender, filterNames, filters } = state;

	return (
		<div className="Games">
			<div className="container">
				<div className="row">
					<Filters
						toggleFilters={toggleFilters}
						filterNames={filterNames}
						games={games}
						toggleAll={toggleAll}
						all={filters.all}
					/>
				</div>
				<div className="row">
					{gamesToRender.map(game => {
						const style = {
							backgroundImage: `url(${require(`../assets/img/img-cards/${game.id}.png`)})`
						};
						return (
							<Link to={`/game/${game.id}`} key={game.id}>
								<Game
									key={game.id}
									style={style}
									title={game.title}
									category={game.category}
									time={game.time}
									players={game.players}
								/>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Games;
