import React from 'react';
import '../scss/components/_landing-page.scss';
import CTA from './CTA';

import { useTranslation } from "react-i18next";

function LandingPage(props) {

  const { t } = useTranslation();
  
  return (
    <section id="landingpage" className="landing-page" style={{ background: `url('/assets/img/landing-page-bg.png') no-repeat center/cover` }}>
      <div className="paragraphs">
        <p className="center">
          {t('alltid undrat hur man kan behålla sin lugna tillstånd medan man bygger en perfekt sida som är både smidig och fin?')}
        </p>
        <p className="center">
          {t('vi på Agile Taman lovar att vi är de mest flexibla arbetarna ni kommer hitta inom Skåne.')}
        </p>
      </div>
      <CTA />
    </section >
  );
}

export default LandingPage;