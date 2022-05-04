import "./HeaderNav.scss";

function HeaderNav() {
  return (
    <div className="header__wrapper-bck">
      <div className="header">
        <nav className="nav">
          <div className="nav__logo">
            <a className="nav__link-logo" href="/home">
              EP.
            </a>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link links" href="#about">
                About
              </a>
            </li>
            <li className="nav_item">
              <a className="nav__link links" href="#projects">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNav;
