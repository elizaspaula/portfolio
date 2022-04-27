import "./ContactForm.scss";
import emailicon from "../../assets/icons/email_icon.svg";
import linkedinicon from "../../assets/icons/linkedin_icon.svg";
import githubicon from "../../assets/icons/github_icon.svg";

function ContactForm() {
  return (
    <>
      <div className="contact">
        <h2 className="contact__title">Connect</h2>
        <p className="contact__content">Let's work together !</p>
        <div className="contact__wrapper">
          <div className="contact__icons">
            <a
              className="contact__link"
              href="mailto:elizabete.silvapaula@gmail.com"
            >
              <img src={emailicon} alt="email icon" />
            </a>
          </div>

          <div className="contact__icons">
            <a
              className="contact__link"
              href="mailto:elizabete.silvapaula@gmail.com"
            >
              <img src={linkedinicon} alt="email icon" />
            </a>
          </div>

          <div className="contact__icons">
            <a
              className="contact__link"
              href="mailto:elizabete.silvapaula@gmail.com"
            >
              <img src={githubicon} alt="email icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
