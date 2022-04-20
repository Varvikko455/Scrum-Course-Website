import React,{useState}from 'react';
import '../scss/components/_footer.scss';
import { Anchor } from 'antd';
import { useTranslation } from "react-i18next";

function Footer() {
  
  const { Link } = Anchor;
  const { t } = useTranslation();
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {

    if (!showScroll && window.pageYOffset > 400) {

      setShowScroll(true);

    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);
  return (
    <footer>
      <div className="arrow-up">
        <i className="fas fa-angle-double-up fa-2x" onClick={scrollTop}></i>
      </div>
      <Anchor targetOffset="80">
        <ul className="footer-list">
          <li>
            <Link href="#about" title={t('om oss')} />
          </li>
          
          <li>
            <Link href="#faq" title={t('vanliga frågor')} />
          </li>

          <li>
            <Link href="#contact" title={t('kontakt')} />
          </li>

          <li>
            <Link href="#article" title={t('Nyheter & Artiklar')} />
          </li>

        </ul>

      </Anchor>

      <div className="copyright">Copyright: Inc.{ new Date().getFullYear().toString() } all reserved</div>
     
    </footer>
  )
}

export default Footer;