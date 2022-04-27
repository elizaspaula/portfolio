import "./HeaderNav.scss";
import logo from "../../assets/logo/logo.svg";

function HeaderNav() {
  return (
    <>
      <div className="header">
        <nav className="nav">
          <div className="nav__logo">
            <a className="nav__link-logo" href="/home">
              EP.
            </a>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link links" href="/about">
                About
              </a>
            </li>
            <li className="nav_item">
              <a className="nav__link links" href="/portfolio">
                Portfolio
              </a>
            </li>

            <li className="nav__item-desktop">
              <a className="nav__contact mobile" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HeaderNav;
