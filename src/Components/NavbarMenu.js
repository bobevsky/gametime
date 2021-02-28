import React from "react";

const NavbarMenu = () => (
  <div className="col-md-12 col-sm-12">
    <div className="NavbarMenu text-center">
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
          <a href="http://codepreneurs.co/" target="_blank" rel="noopener noreferrer">
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
);

export default NavbarMenu;
