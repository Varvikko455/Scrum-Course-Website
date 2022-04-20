import React from 'react';
import '../scss/components/_contact.scss';

import { useTranslation } from "react-i18next";

function Contact(props) {

    const { t } = useTranslation();

    return (

        <div className="grid-container" id="contact">
            <div className="icon-container">
                <div className="icons">
                    <div className="icon"> <i className="fas fa-map-marker-alt fa-2x"></i> </div>
                    <div className="box-text">{t('adress')}: Kattstigen 52A  26334 Helsingborg</div>
                </div>
                <div className="icons">
                    <div className="icon"> <i className="fas fa-phone-alt fa-2x"></i></div>
                    <div className="box-text">{t('telefon')}: 042-333 12 52</div>
                </div>
                <div className="icons">
                    <div className="icon"> <i className="fas fa-envelope fa-2x"></i></div>
                    <div className="box-text">{t('e-post')}: Tamam@agile.se</div>
                </div>
            </div>
            <div className="grid-container-contact">
                <div className="grid-contactform">
                    <label for="fullname">{t('för- och efternamn')}</label>
                    <input type="text" id="fname" name="fullname" placeholder={t('namn')}></input>
                    <label for="email">{t('e-post')}</label>
                    <input type="text" id="email" name="email" placeholder={t('e-post')}></input>
                    <label for="subject">{t('ämne')}</label>
                    <select id="subject" name="Ämne">
                        <option value="Produktfråga">{t('produkt')}</option>
                        <option value="tjänst">{t('tjänst')}</option>
                        <option value="Fakturafrågor">{t('faktura')}</option>
                        <option value="Feedback">{t('feedback')}</option>
                        <option value="övrigt">{t('övrigt')}</option>
                    </select>
                    <label for="message">{t('meddelande')}</label>
                    <textarea id="message" name="message" placeholder={t('beskriv ditt ärende här..')} ></textarea>
                    <div><button className="button-send">{t('skicka')}</button></div>
                </div>
                <div className="grid-imgbox"></div>
            </div>
        </div>

    );
}

export default Contact;
