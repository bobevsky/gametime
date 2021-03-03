import React from "react";

const Footer = () => (
  <footer className="footer state-colored">
    <div className="inner-wrap">
      <div className="primary-segment">
        <div className="content-box">
          <h2>Brainster Box</h2>
          <p>
            Brainster Box е ресурс за секој што сака да ги направи работите покреативни и поефикасни
            во својот тим или компанија.
          </p>
        </div>
        <div className="content-box">
          <h2>За Нас</h2>
          <p>
            Brainster е иновативна компанија за едукација која комбинира врвен наставен план,
            експертиза и ефективна стратегија за обучување на компании и индивидуалци.
          </p>
        </div>
        <div className="content-box">
          <h2>Продукти на Brainster</h2>
          <ul>
            <li>
              <a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer">
                Корпоративни тренинзи
              </a>
            </li>
            <li>
              <a href="https://brainster.co/courses" target="_blank" rel="noopener noreferrer">
                Курсеви
              </a>
            </li>
            <li>
              <a href="https://codepreneurs.co/" target="_blank" rel="noopener noreferrer">
                Академија за програмирање
              </a>
            </li>
            <li>
              <a
                href="https://www.brainster.io/marketpreneurs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Академија за маркетинг
              </a>
            </li>
            <li>
              <a
                href="https://www.brainster.io/akademija-za-dizajn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Академија за дизајн
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="secondary-segment">
        <a href="https://www.facebook.com/brainster.co/" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/img/img-social/facebook.png")} alt="facebook-link" />
        </a>
        <a href="https://www.instagram.com/brainsterco/" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/img/img-social/instagram.png")} alt="instagram-link" />
        </a>
        <a
          href="https://www.linkedin.com/company/brainster-co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../assets/img/img-social/linkedin.png")} alt="linkedin-link" />
        </a>
        <a href="https://twitter.com/brainsterco" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/img/img-social/twitter.png")} alt="twitter-link" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
