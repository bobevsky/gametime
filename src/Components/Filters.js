import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Filters = ({ toggleFilters, games, filterNames, toggleAll, all }) => {
	return (
		<div className="col-md-12">
			<div className="Filters">
				<div className="row">
					<div className="col-md-8">
						<h5>Пребарајте преку категорија</h5>
						<div className="row">
							<div className="col-md-4 col-sm-4 col-xs-4">
								<button
									data-filter="category"
									data-filter-name="Енергија"
									data-filter-name-en="Energy"
									onClick={toggleFilters}
									className={
										filterNames.category.Energy ? 'btn-block active' : 'btn-block'
									}
								>
									ЕНЕРГИЈА
									<span id="Енергија">
										({games.filter(game => game.category === 'Енергија').length})
									</span>
								</button>
								<button
									data-filter="category"
									data-filter-name="Акции"
									data-filter-name-en="Actions"
									onClick={toggleFilters}
									className={
										filterNames.category.Actions ? 'btn-block active' : 'btn-block'
									}
								>
									АКЦИИ
									<span id="Акции">
										({games.filter(game => game.category === 'Акции').length})
									</span>
								</button>
							</div>
							<div className="col-md-4 col-sm-4 col-xs-4">
								<button
									data-filter="category"
									data-filter-name="Иновации"
									data-filter-name-en="Inovations"
									onClick={toggleFilters}
									className={
										filterNames.category.Inovations ? 'btn-block active' : 'btn-block'
									}
								>
									ИНОВАЦИИ
									<span id="Иновации">
										({games.filter(game => game.category === 'Иновации').length})
									</span>
								</button>
								<button
									data-filter="category"
									data-filter-name="Тим"
									data-filter-name-en="Team"
									onClick={toggleFilters}
									className={filterNames.category.Team ? 'btn-block active' : 'btn-block'}
								>
									ТИМ
									<span id="Тим">
										({games.filter(game => game.category === 'Тим').length})
									</span>
								</button>
							</div>
							<div className="col-md-4 col-sm-4 col-xs-4">
								<button
									data-filter="category"
									data-filter-name="Лидерство"
									data-filter-name-en="Leadership"
									onClick={toggleFilters}
									className={
										filterNames.category.Leadership ? 'btn-block active' : 'btn-block'
									}
								>
									ЛИДЕРСТВО
									<span id="Лидерство">
										({games.filter(game => game.category === 'Лидерство').length})
									</span>
								</button>
								<button
									onClick={toggleAll}
									className={all ? 'btn-block active' : 'btn-block'}
								>
									СИТЕ
									<span id="site">({games.length})</span>
								</button>
							</div>
						</div>
					</div>
					<div className="col-md-2 hidden-sm hidden-xs">
						<h5>Временска рамка</h5>
						<div className="row">
							<div className="col-md-6">
								<button
									data-filter="time"
									data-filter-name="5-30 минути"
									data-filter-name-en="five_thirty_min"
									onClick={toggleFilters}
									className={
										filterNames.time.five_thirty_min
											? 'btn-block active'
											: 'btn-block'
									}
								>
									5-30
								</button>
								<button
									data-filter="time"
									data-filter-name="60-120 минути"
									data-filter-name-en="sixty_hundredtwenty_min"
									onClick={toggleFilters}
									className={
										filterNames.time.sixty_hundredtwenty_min
											? 'btn-block active'
											: 'btn-block'
									}
								>
									60-120
								</button>
							</div>
							<div className="col-md-6">
								<button
									data-filter="time"
									data-filter-name="30-60 минути"
									data-filter-name-en="thirty_sixty_min"
									onClick={toggleFilters}
									className={
										filterNames.time.thirty_sixty_min
											? 'btn-block active'
											: 'btn-block'
									}
								>
									30-60
								</button>
								<button
									data-filter="time"
									data-filter-name="120-240 минути"
									data-filter-name-en="hundredtwenty_twohundredfourty_min"
									onClick={toggleFilters}
									className={
										filterNames.time.hundredtwenty_twohundredfourty_min
											? 'btn-block active'
											: 'btn-block'
									}
								>
									120-240
								</button>
							</div>
						</div>
					</div>
					<div className="col-md-2 hidden-sm hidden-xs">
						<h5>Големина на група</h5>
						<div className="row">
							<div className="col-md-4">
								<button
									data-filter="players"
									data-filter-name="2-10"
									data-filter-name-en="two_ten"
									onClick={toggleFilters}
									className={filterNames.players.two_ten ? 'btn-block active' : 'btn-block'}
								>
									2-10
								</button>
							</div>
							<div className="col-md-4">
								<button
									data-filter="players"
									data-filter-name="10-40"
									data-filter-name-en="ten_fourty"
									onClick={toggleFilters}
									className={
										filterNames.players.ten_fourty ? 'btn-block active' : 'btn-block'
									}
								>
									10-40
								</button>
							</div>
							<div className="col-md-4">
								<button
									data-filter="players"
									data-filter-name="40+"
									data-filter-name-en="fourty_plus"
									onClick={toggleFilters}
									className={filterNames.players.fourty_plus ? 'btn-block active' : 'btn-block'}
								>
									40+
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-right">
						<h5>
							<Link smooth to="#StaffPicks">
								Препорачани од нашиот тим
							</Link>
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
