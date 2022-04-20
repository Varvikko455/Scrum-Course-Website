import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Loader from './Loader';
import '../scss/components/_about.scss';

import { useTranslation } from "react-i18next";

function About(props) {

  const { t, i18n } = useTranslation();

  const [personal, updatePersonal] = useState(null);
  const [isMounted, updateIsMounted] = useState(true);

  const FetchPersonalData = async () => {
    try {
      let path = `json/staff-${i18n.language}.json`;
      const personalPosts = await Axios.get(path)

      updatePersonal(personalPosts.data.staff);

    } catch (err) {
      console.error(err.message);
    }
  };


  // Funktion som hämtar data från useState personal och sedan mappar vi ut vår struktur.
  const mapOutStaff = () => {
    return personal.map((staff, key) =>
      <div className="personal-card" key={key}>
        <div className={`content`}>
          <img src={`/assets/img/${staff.img}`} alt="avartar of staff" />
          <h3>{staff.name}</h3>
          <h4>{staff.occupation}</h4>
          <a href={`mailto: ${staff.email}`}>{staff.email}</a>
        </div>
      </div>
    )
  };

  useEffect(() => {
    // Koll så data inte kommer försnabbt in 
    if (!isMounted) {
      return
    }
    // Här hämtar vi data och sparar ner det/uppdaterar till vår useState 
    FetchPersonalData();

    i18n.on('languageChanged', lang => {
      if (i18n.language === lang) {
        FetchPersonalData();
      }
    });

    // Stäng av vår loader.
    updateIsMounted(false);
    
  }, [])

  return (
    <section className="about" id="about" style={{ background: "url('/assets/img/about-bg.png') no-repeat center/cover" }}>
      <div className="container">
        <h2 className="title center">{t('om oss')}</h2>
        <h3 className="catchphrase center">{t('katter har inget mot oss i smidighet')}</h3>
        <p className="selling-words center">{t('vi bygger en snygg, modern och mobilvänlig hemsida som kan lyfta företaget mot nya möjligheter.')}</p>
        {isMounted && <Loader />}
        <div className="staff-container">
          {personal !== null && mapOutStaff()}
        </div>
      </div>
    </section>
  );
}

export default About;