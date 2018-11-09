import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

    	
class Filters extends Component {
	render() {
		return (

			<div className="col-md-12">
				<div className="Filters">
					<div className="row">
						<div className="col-md-8">
							<h5>Пребарајте преку категорија</h5>
							<div className="row">
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className="btn-block" id="Енергија" onClick={(e) => this.props.energijaClick(e)}>
									ЕНЕРГИЈА 
										<span id="Енергија">({this.props.energija})</span>
									</button>
									<button className="btn-block" id="Акции" onClick={(e) => this.props.akciiClick(e)}>
									АКЦИИ 
										<span id="Акции">({this.props.akcii})</span>
									</button>
								</div>
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className="btn-block" id="Иновации" onClick={(e) => this.props.inovaciiClick(e)}>
									ИНОВАЦИИ 
										<span id="Иновации">({this.props.inovacii})</span>
									</button>
									<button className="btn-block" id="Тим" onClick={(e) => this.props.timClick(e)}>
									ТИМ 
										<span id="Тим">({this.props.tim})</span>
									</button>
								</div>
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className="btn-block" id="Лидерство" onClick={(e) => this.props.liderstvoClick(e)}>
									ЛИДЕРСТВО 
										<span id="Лидерство">({this.props.liderstvo})</span>
									</button>
									<button className={this.props.showAll ? "btn-block active" : "btn-block"} 
									 onClick={(e) => {this.props.allClick(e, this.state)}}>
									СИТЕ 
										<span id="site">({this.props.all})</span>
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-2 hidden-sm hidden-xs">
							<h5>Временска рамка</h5>
							<div className="row">
								<div className="col-md-6">
									<button className="btn-block" id="5-30 минути" onClick={(e) => this.props.timeFrameOne(e)}>
									5-30</button>
									<button className="btn-block" id="60-120 минути" onClick={(e) => this.props.timeFrameThree(e)}>
									60-120</button>
								</div>
								<div className="col-md-6">
									<button className="btn-block" id="30-60 минути" onClick={(e) => this.props.timeFrameTwo(e)}>
									30-60</button>
									<button className="btn-block" id="120-240 минути" onClick={(e) => this.props.timeFrameFour(e)}>
									120-240</button>
								</div>
							</div>
						</div>
						<div className="col-md-2 hidden-sm hidden-xs">
							<h5>Големина на група</h5>
							<div className="row">
								<div className="col-md-4">
									<button className="btn-block" id="2-10" onClick={(e) => this.props.groupOne(e)}>
									2-10</button>
								</div>
								<div className="col-md-4">
									<button className="btn-block" id="10-40" onClick={(e) => this.props.groupTwo(e)}>
									10-40</button>
								</div>
								<div className="col-md-4">
									<button className="btn-block" id="2-40+" data-players="10-40+" onClick={(e) => this.props.groupThree(e)}>
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
