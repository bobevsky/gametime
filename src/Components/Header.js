import React from 'react';

const Header = ({ toggleHeader }) => {
	return (
		<div className="Header">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<h1>BRAINSTER BOX</h1>
						<p>
							Вашата лична кутија со ресурси и алатки за креативна колаборација и
							откривање на потенцијалот во твојот тим или организација.
						</p>
					</div>
				</div>
				<div className="row flex">
					<div className="col-md-12 flex-header m-y">
						<div className="header-inner">
							<img src={require('../assets/img/img-header/01.png')} alt="header-img" />
							<h4>
								РАЗДВИЖИ ГО ПРОСТОРОТ СО <span>ENERGIZERS</span>
							</h4>
							<hr />
							<p className="header-description">
								Алатки кои ја подигнуваат енергијата меѓу процесите и луѓето преку забава.
							</p>
						</div>
						<div className="header-inner">
							<img src={require('../assets/img/img-header/02.png')} alt="header-img" />
							<h4>
								ОТКЛУЧИ <br />
								<span>ИНОВАЦИИ</span>
							</h4>
							<hr />
							<p className="header-description">
								Алатки за ослободување на креативноста и развивање нови продукти и услуги.
							</p>
						</div>
						<div className="header-inner">
							<img src={require('../assets/img/img-header/03.png')} alt="header-img" />
							<h4>
								РАЗВИЈ ПЕРСОНАЛНО <span>ЛИДЕРСТВО</span>
							</h4>
							<hr />
							<p className="header-description">
								Алатки за персонален развој, самосвест и како да се интегрира постојано
								учење и раст.
							</p>
						</div>
						<div className="header-inner">
							<img src={require('../assets/img/img-header/04.png')} alt="header-img" />
							<h4>
								НАПРАВИ ПРОМЕНА ПРЕКУ <br />
								<span>АКЦИЈА</span>
							</h4>
							<hr />
							<p className="header-description2">
								Алатки фокусирани на имплементација, егзекуција и поддршка на промените во
								тимот.
							</p>
						</div>
						<div className="header-inner">
							<img src={require('../assets/img/img-header/05.png')} alt="header-img" />
							<h4>
								ИЗГРАДИ НЕПОБЕДЛИВ <span>ТИМ</span>
							</h4>
							<hr />
							<p className="header-description last-p">
								Алатки за ефективни тимови - поттикнување доверба и отвореност за поголема
								соработка.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center ">
						<button className="start-btn" onClick={toggleHeader}>
							Започни
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
