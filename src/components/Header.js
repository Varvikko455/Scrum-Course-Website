import React from "react";
import "../scss/components/_header.scss";

import { Anchor } from "antd";
import { useTranslation } from "react-i18next";

function Header(props) {

  const { Link } = Anchor;
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div>
        <a href="/">
          <img src="/assets/logo.png " alt="logo" className="logo" />
        </a>
      </div>
      <nav className="nav-bar">
        <Anchor targetOffset="80">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link href="#about" title={t('om oss')} />
            </li>
            <li className="nav-list-item">
              <Link href="#faq" title={t('vanliga frågor')} />
            </li>
            <li className="nav-list-item">
              <Link href="#contact" title={t('kontakt')} />
            </li>
            <li>
            <Link href="#article" title={t('Nyheter & Artiklar')} />
            </li>
          </ul>
        </Anchor>
      </nav>
      <div className="flags">
        <button>
          <img
            className="swedish-symbol"
            src="/assets/se.png"
            alt="svenska"
            onClick={() => changeLanguage('sv')}
          />
        </button>
        <button>
          <img
            className="english-symbol"
            src="/assets/uk.png"
            alt="english"
            onClick={() => changeLanguage('en')}
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
