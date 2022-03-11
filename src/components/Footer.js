import cardImg1 from "../assets/img/instagram/thumb-card3.png";
import cardImg2 from "../assets/img/instagram/thumb-card4.png";
import cardImg3 from "../assets/img/instagram/thumb-card5.png";
import cardImg6 from "../assets/img/instagram/thumb-card6.png";
import cardImg5 from "../assets/img/instagram/thumb-card7.png";
import cardImg4 from "../assets/img/instagram/thumb-card8.png";

const Footer = function () {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h1 className="footer__heading heading-primary heading--white">
          About Us
        </h1>
        <p className="paragraph footer__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quia atque nemo ad modi officiis iure, autem nulla tenetur
          repellendus.
        </p>
      </div>

      <div className="footer-newsletter">
        <h1 className="footer__heading heading-primary heading--white">
          Newsletter
        </h1>
        <p className="paragraph footer__para">Stay updated with our latest</p>
      </div>

      <div className="footer-insta">
        <h1 className="footer__heading heading-primary heading--white">
          Instagram
        </h1>
        <div className="footer__gallary">
          <img src={cardImg1} />
          <img src={cardImg2} />
          <img src={cardImg3} />
          <img src={cardImg4} />
          <img src={cardImg5} />
          <img src={cardImg6} />
        </div>
      </div>

      <div className="footer-insta">
        <h1 className="footer__heading heading-primary heading--white">
          Follow us
        </h1>
        <p className="paragraph footer__para">Let us be social</p>
        <ul className="footer__social social__list">
          <li className="social__list-item">
            <a href="#" className="social__link">
              <i className="social__icon fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="social__list-item">
            <a href="#" className="social__link">
              <i className="social__icon fab fa-instagram"></i>
            </a>
          </li>
          <li className="social__list-item">
            <a href="#" className="social__link">
              <i className="social__icon fab fa-twitter"></i>
            </a>
          </li>
          <li className="social__list-item">
            <a href="#" className="social__link">
              <i className="social__icon fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
