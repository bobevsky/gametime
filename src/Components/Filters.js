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
									<button className="btn-block" onClick={() => this.props.energijaClick()}>
									ЕНЕРГИЈА 
										<span>({this.props.energija})</span>
									</button>
									<button className="btn-block" onClick={() => this.props.akciiClick()}>
									АКЦИЈА 
										<span>({this.props.akcii})</span>
									</button>
								</div>
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className="btn-block" onClick={() => this.props.inovaciiClick()}>
									ИНОВАЦИИ 
										<span>({this.props.inovacii})</span>
									</button>
									<button className="btn-block" onClick={() => this.props.timClick()}>
									ТИМ 
										<span>({this.props.tim})</span>
									</button>
								</div>
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className="btn-block" onClick={() => this.props.liderstvoClick()}>
									ЛИДЕРСТВО 
										<span>({this.props.liderstvo})</span>
									</button>
									<button className="btn-block" onClick={() => this.props.allClick()}>
									СИТЕ 
										<span>({this.props.all})</span>
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-2 hidden-sm hidden-xs">
							<h5>Временска рамка</h5>
							<div className="row">
								<div className="col-md-6">
									<button className="btn-block" onClick={() => this.props.timeFrameOne()}>
									5-30</button>
									<button className="btn-block" onClick={() => this.props.timeFrameThree()}>
									60-120</button>
								</div>
								<div className="col-md-6">
									<button className="btn-block" onClick={() => this.props.timeFrameTwo()}>
									30-60</button>
									<button className="btn-block" onClick={() => this.props.timeFrameFour()}>
									120-240</button>
								</div>
							</div>
						</div>
						<div className="col-md-2 hidden-sm hidden-xs">
							<h5>Големина на група</h5>
							<div className="row">
								<div className="col-md-4">
									<button className="btn-block" onClick={() => this.props.groupOne()}>
									2-10</button>
								</div>
								<div className="col-md-4">
									<button className="btn-block" onClick={() => this.props.groupTwo()}>
									10-40</button>
								</div>
								<div className="col-md-4">
									<button className="btn-block" onClick={() => this.props.groupThree()}>
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
