import "./Footer.scss";
import emailicon from "../../assets/icons/email_icon.svg";
import linkedinicon from "../../assets/icons/linkedin_icon.svg";
import githubicon from "../../assets/icons/github_icon.svg";

function Footer() {
  return (
    <>
      <div className="contact">
        <h2 className="contact__title">
          Connect
          <span className="contact__headline">
            {" "}
            - Let's work together !
          </span>{" "}
        </h2>
        <p className="contact__content"></p>
        <div className="contact__wrapper">
          <div className="contact__icons">
            <a
              className="contact__link"
              href="mailto:elizabete.silvapaula@gmail.com"
            >
              <img className="contact__img" src={emailicon} alt="email icon" />
            </a>
          </div>

          <div className="contact__icons">
            <a
              className="contact__link"
              href="mailto:elizabete.silvapaula@gmail.com"
            >
              <img
                className="contact__img"
                src={linkedinicon}
                alt="linkedin icon"
              />
            </a>
          </div>

          <div className="contact__icons">
            <a
              className="contact__link"
              href="https://github.com/elizaspaula"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="contact__img"
                src={githubicon}
                alt="github icon"
              />
            </a>
          </div>
        </div>
        <div className="contact__copyright">
          <p className="contact__content-copyright">
            Copyright © 2022 Elizabete Paula
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
