import "./Background.scss";
import frontendicon from "../../assets/icons/frontend_icon.svg";
import backendicon from "../../assets/icons/backend_icon.svg";
import othericon from "../../assets/icons/other_icon.svg";

function Background() {
  return (
    <>
      <div className="background">
        <article className="about">
          <div className="about__header">
            <h2 class="about__title">About </h2>
          </div>
          <div className="about__container">
            <p class="about__content">
              I’m a multi-focused designer working on interfaces and branding
              for digital products. Award winning interdisciplinary Designer &
              Art director. a team who specialise in coding websites and themes
              of style and function for a wide range of interactive. Lorem ipsum
              dolor sit consectetur adipiscing morbi venenatis et tortor
              consectetur adipisicing lacinia. Check my works there Dribbble,
              Behance and Twitter dolor sit amet consectetur.
            </p>
          </div>
        </article>
        <article className="skills">
          <div className="skills__header">
            <h2 class="skills__title">What I Do</h2>
          </div>
          <div className="skills__wrapper">
            <div className="skills__content">
              <div className="skills__content-header">
                <figure className="skills__image">
                  <img
                    className="skills__icon"
                    src={frontendicon}
                    alt="front end icon"
                  />
                </figure>
                <h2 className="skills__subtitle"> Front-end</h2>
              </div>
              <ul className="skills__list">
                <li className="skills__item">React</li>
                <li className="skills__item">JavaScript</li>
                <li className="skills__item">BEM</li>
                <li className="skills__item">HTML</li>
                <li className="skills__item">CSS</li>
                <li className="skills__item">SASS</li>
                <li className="skills__item">Axios</li>
                <li className="skills__item">Responsive Design</li>
              </ul>
            </div>
            <div className="skills__content">
              <div className="skills__content-header">
                <figure className="skills__image">
                  <img
                    className="skills__icon"
                    src={backendicon}
                    alt="front end icon"
                  />
                </figure>
                <h2 className="skills__subtitle"> Back-end</h2>
              </div>
              <ul className="skills__list">
                <li className="skills__item">Node</li>
                <li className="skills__item">Express</li>
                <li className="skills__item">MongoDB</li>
                <li className="skills__item">MySQL</li>
                <li className="skills__item">SQL</li>
                <li className="skills__item">API's</li>
              </ul>
            </div>
            <div className="skills__content">
              <div className="skills__content-header">
                <figure className="skills__image">
                  <img
                    className="skills__icon"
                    src={othericon}
                    alt="front end icon"
                  />
                </figure>
                <h2 className="skills__subtitle">Other Tools</h2>
              </div>
              <ul className="skills__list">
                <li className="skills__item">GitHub</li>
                <li className="skills__item">Jira</li>
                <li className="skills__item">JWT</li>
                <li className="skills__item">Heroku</li>
                <li className="skills__item">Netlify</li>
                <li className="skills__item">ERP</li>
                <li className="skills__item">BPMN</li>
                <li className="skills__item">ITIL</li>
              </ul>
            </div>
          </div>
        </article>
        <article className="projects">
          <div className="projects__header">
            <h2 class="projects__title">My Projects</h2>
            <p className="projects__content">
              Here are a few design projects I've worked on recently. Want to
              see more? <a> Email me. </a>
            </p>
          </div>
          <div className="projects__container">
            <h2 className="projects__subtitle">Coffee Shop</h2>
            <p className="projects__stack">HTML | CSS</p>
            <a href="/website" className="projects__btn">
              Visit the website
            </a>
          </div>

          <div className="projects__container">
            <h2 className="projects__subtitle">Travel Site</h2>
            <p className="projects__stack">HTML | CSS</p>
            <a href="/website" className="projects__btn">
              Visit the website
            </a>
          </div>

          <div className="projects__container">
            <h2 className="projects__subtitle">Band Site</h2>
            <p className="projects__stack">HTML | CSS</p>
            <a href="/website" className="projects__btn">
              Visit the website
            </a>
          </div>

          <div className="projects__container">
            <h2 className="projects__subtitle">BrainFlix</h2>
            <p className="projects__stack">HTML | CSS</p>
            <a href="/website" className="projects__btn">
              Visit the website
            </a>
          </div>

          <div className="projects__container">
            <h2 className="projects__subtitle">InStock</h2>
            <p className="projects__stack">HTML | CSS</p>
            <a href="/website" className="projects__btn">
              Visit the website
            </a>
          </div>

          <div className="projects__container">
            <h2 className="projects__subtitle">MeowFinder</h2>
            <p className="projects__stack">HTML | CSS</p>
            <a href="/website" className="projects__btn">
              Visit the website
            </a>
          </div>
        </article>
      </div>
    </>
  );
}

export default Background;
