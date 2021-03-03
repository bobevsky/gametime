import React from "react";

const Header = ({ isHeaderOpen, toggleHeader }) => (
  <div className={isHeaderOpen ? "Header state-active" : "Header"}>
    <div className="inner-wrap">
      <div className="content-box">
        <div className="main-titles">
          <h1>BRAINSTER BOX</h1>
          <p>
            Вашата лична кутија со ресурси и алатки за креативна колаборација и откривање на
            потенцијалот во твојот тим или организација.
          </p>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <div className="item-inner">
              <img src={require("../../assets/img/img-header/01.png")} alt="header-img" />
              <p className="block-title">ENERGIZERS</p>
              <p>Алатки кои ја подигнуваат енергијата меѓу процесите и луѓето преку забава.</p>
            </div>
          </div>
          <div className="grid-item">
            <div className="item-inner">
              <img src={require("../../assets/img/img-header/02.png")} alt="header-img" />
              <p className="block-title">ИНОВАЦИИ</p>
              <p>Алатки за ослободување на креативноста и развивање нови продукти и услуги.</p>
            </div>
          </div>
          <div className="grid-item">
            <div className="item-inner">
              <img src={require("../../assets/img/img-header/03.png")} alt="header-img" />
              <p className="block-title">ЛИДЕРСТВО</p>
              <p>
                Алатки за персонален развој, самосвест и како да се интегрира постојано учење и
                раст.
              </p>
            </div>
          </div>
          <div className="grid-item">
            <div className="item-inner">
              <img src={require("../../assets/img/img-header/04.png")} alt="header-img" />
              <p className="block-title">АКЦИЈА</p>
              <p>
                Алатки фокусирани на имплементација, егзекуција и поддршка на промените во тимот.
              </p>
            </div>
          </div>
          <div className="grid-item">
            <div className="item-inner">
              <img src={require("../../assets/img/img-header/05.png")} alt="header-img" />
              <p className="block-title">ТИМ</p>
              <p>
                Алатки за ефективни тимови - поттикнување доверба и отвореност за поголема
                соработка.
              </p>
            </div>
          </div>
        </div>
        <button className="btn state-secondary" onClick={toggleHeader}>
          Започни
        </button>
      </div>
    </div>
  </div>
);

export default Header;
