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
      <div className="social-container">
        <a
          href="https://www.facebook.com/brainster.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon icon-facebook"
          aria-label="follow on facebook"
        />
        <a
          href="https://www.linkedin.com/company/brainster-co"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon icon-linkedin"
          aria-label="follow on linkedin"
        />
        <a
          href="https://twitter.com/brainsterco"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon icon-twitter"
          aria-label="follow on twitter"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
