import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

    	
class Filters extends Component {
	render() {
		const {energijaColor, akciiColor, inovaciiColor, timColor, liderstvoColor, showAll, all, allClick, energija, akcii, tim, inovacii, liderstvo,
			   energijaClick, akciiClick, inovaciiClick, timClick, liderstvoClick, timeOneClick, timeTwoClick, timeThreeClick, timeFourClick,
			   groupOneClick, groupTwoClick, groupThreeClick, timeFrameOne, timeFrameTwo, timeFrameThree, timeFrameFour, groupOne, groupTwo, groupThree} = this.props;
		return (
			<div className="col-md-12">
				<div className="Filters">
					<div className="row">
						<div className="col-md-8">
							<h5>Пребарајте преку категорија</h5>
							<div className="row">
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className={energijaColor ? "btn-block active" : "btn-block"} id="Енергија" onClick={(e) => energijaClick(e)}>
									ЕНЕРГИЈА 
										<span id="Енергија">({energija})</span>
									</button>
									<button className={akciiColor ? "btn-block active" : "btn-block"} id="Акции" onClick={(e) => akciiClick(e)}>
									АКЦИИ 
										<span id="Акции">({akcii})</span>
									</button>
								</div>
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className={inovaciiColor ? "btn-block active" : "btn-block"} id="Иновации" onClick={(e) => inovaciiClick(e)}>
									ИНОВАЦИИ 
										<span id="Иновации">({inovacii})</span>
									</button>
									<button className={timColor ? "btn-block active" : "btn-block"} id="Тим" onClick={(e) => timClick(e)}>
									ТИМ 
										<span id="Тим">({tim})</span>
									</button>
								</div>
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className={liderstvoColor ? "btn-block active" : "btn-block"} id="Лидерство" onClick={(e) => liderstvoClick(e)}>
									ЛИДЕРСТВО 
										<span id="Лидерство">({liderstvo})</span>
									</button>
									<button className={showAll ? "btn-block active" : "btn-block"} 
									 onClick={allClick}>
									СИТЕ 
										<span id="site">({all})</span>
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-2 hidden-sm hidden-xs">
							<h5>Временска рамка</h5>
							<div className="row">
								<div className="col-md-6">
									<button className={timeOneClick ? "btn-block active" : "btn-block"} id="5-30 минути" onClick={(e) => timeFrameOne(e)}>
									5-30</button>
									<button className={timeThreeClick ? "btn-block active" : "btn-block"} id="60-120 минути" onClick={(e) => timeFrameThree(e)}>
									60-120</button>
								</div>
								<div className="col-md-6">
									<button className={timeTwoClick ? "btn-block active" : "btn-block"} id="30-60 минути" onClick={(e) => timeFrameTwo(e)}>
									30-60</button>
									<button className={timeFourClick ? "btn-block active" : "btn-block"} id="120-240 минути" onClick={(e) => timeFrameFour(e)}>
									120-240</button>
								</div>
							</div>
						</div>
						<div className="col-md-2 hidden-sm hidden-xs">
							<h5>Големина на група</h5>
							<div className="row">
								<div className="col-md-4">
									<button className={groupOneClick ? "btn-block active" : "btn-block"} id="2-10" onClick={(e) => groupOne(e)}>
									2-10</button>
								</div>
								<div className="col-md-4">
									<button className={groupTwoClick ? "btn-block active" : "btn-block"} id="10-40" onClick={(e) => groupTwo(e)}>
									10-40</button>
								</div>
								<div className="col-md-4">
									<button className={groupThreeClick ? "btn-block active" : "btn-block"} id="2-40+" data-players="10-40+" onClick={(e) => groupThree(e)}>
									40+</button>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-right">
							<h5><Link smooth to="#StaffPicks">Препорачани од нашиот тим</Link></h5>
						</div>
					</div>
				</div>
			</div>	
		);
	}
}

export default Filters;
