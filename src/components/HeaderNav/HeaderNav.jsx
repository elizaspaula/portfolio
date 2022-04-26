import "./HeaderNav.scss";
import logo from "../../assets/logo/logo.svg";

function HeaderNav() {
  return (
    <>
      <div className="header">
        <nav className="nav">
          <div className="nav__container">
            <div className="nav__mid-mobile">
              <img className="nav__logo " src={logo} alt="company logo" />
            </div>

            <div className="nav__left">
              <a className="nav__link" href="/home">
                Home
              </a>
              <a className="nav__link" href="/about">
                About
              </a>
              <a className="nav__link" href="/portfolio">
                Portfolio
              </a>
            </div>
            <div className="nav__mid-desktop">
              <img className="nav__logo " src={logo} alt="company logo" />
            </div>
            <div className="nav__right-desktop">
              <a className="nav__contact mobile" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeaderNav;
