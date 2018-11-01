import React from 'react';
import firstImage from '../HeaderImages/01.png';
import secondImage from '../HeaderImages/02.png';
import thirdImage from '../HeaderImages/03.png';
import fourthImage from '../HeaderImages/04.png';
import fifthImage from '../HeaderImages/05.png';

const Header = (props) => {
  return (
    <div className="Header">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
					<h1>BRAINSTER BOX</h1>
					<p>Вашата лична кутија со ресурси и алатки за креативна колаборација и 
					откривање на потенцијалот во твојот тим или организација.</p>
				</div>
			</div>
			<div className="row m-y flex">
				<div className="col-md-3 text-center">
					<img src={firstImage} alt="header-img" />
					<h4 className="first-h4">РАЗДВИЖИ ГО ПРОСТОРОТ СО <span>ENERGIZERS</span></h4>
					<hr/>
					<p className="header-description">Алатки кои ја подигнуваат енергијата меѓу
					 процесите и луѓето преку забава.</p>
				</div>
				<div className="col-md-2 text-center">
					<img src={secondImage} alt="header-img" />
					<h4>ОТКЛУЧИ <br/><span>ИНОВАЦИИ</span></h4>
					<hr/>
					<p className="header-description">Алатки за ослободување на креативноста и
					 развивање нови продукти и услуги.</p>
				</div>
				<div className="col-md-2 text-center pr-0">
					<img src={thirdImage} alt="header-img" />
					<h4 className="special-h4">РАЗВИЈ ПЕРСОНАЛНО <span>ЛИДЕРСТВО</span></h4>
					<hr/>
					<p className="header-description">Алатки за персонален развој, самосвест и како
					да се интегрира постојано учење и раст.</p>
				</div>
				<div className="col-md-3 text-center pl-0">
					<img src={fourthImage} alt="header-img" className="relative-img"/>
					<h4 className="special-h4">НАПРАВИ ПРОМЕНА ПРЕКУ <br/><span>АКЦИЈА</span></h4>
					<hr/>
					<p className="header-description2">Алатки фокусирани на имплементација, егзекуција и 
					поддршка на промените во тимот.</p>
				</div>
				<div className="col-md-2 text-center">
					<img src={fifthImage} alt="header-img" className="relative-img"/>
					<h4 className="last-h4">ИЗГРАДИ НЕПОБЕДЛИВ <span>ТИМ</span></h4>
					<hr/>
					<p className="header-description last-p">Алатки за ефективни тимови - поттикнување доверба и 
					отвореност за поголема соработка.</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 text-center">
					<button className="start-btn" onClick={props.toggleHeader}>Започни</button>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Header;