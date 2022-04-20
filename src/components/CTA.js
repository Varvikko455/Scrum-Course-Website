import React from 'react';
import '../scss/components/_cta.scss';
import { useTranslation } from "react-i18next";

function CTA(props) {
  
  const { t } = useTranslation();

  return (
    <div className="cta">
      <h1 className="title center">{t('vi designar din hemsida från')}
        <span>{t('400kr/tim')}</span>
      </h1>
      <a href="#contact" type="button" className="btn btn-cta center">{t('kontakta oss')}</a>
    </div>
  );
}

export default CTA;