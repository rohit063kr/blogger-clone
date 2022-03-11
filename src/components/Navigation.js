const Navigation = function () {
  return (
    <div className="navigation">
      <h3 className="navigation__logo">blooger</h3>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__list-items">
            <a href="#" className="navigation__link">
              Home
            </a>
            <a href="#" className="navigation__link">
              category
            </a>
            <a href="#" className="navigation__link">
              archive
            </a>
            <a href="#" className="navigation__link">
              pages
            </a>
            <a href="#" className="navigation__link">
              contact us
            </a>
          </li>
        </ul>
      </nav>
      <div className="navigation__social social">
        <ul className="social__list">
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
    </div>
  );
};

export default Navigation;
