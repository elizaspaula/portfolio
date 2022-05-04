import "./Background.scss";
import frontendicon from "../../assets/icons/frontend_icon.svg";
import backendicon from "../../assets/icons/backend_icon.svg";
import othericon from "../../assets/icons/other_icon.svg";

function Background() {
  return (
    <>
      <div className="background">
        <div className="background__wrapper">
          <article className="about">
            <div className="about__header">
              <h2 class="about__title">About </h2>
            </div>
            <div className="about__container">
              <p class="about__content" id="about">
                My passion for technology comes from my experience as a System
                Analyst. I love the challenge of facing project problems and
                delivering solutions that make people's life easier. My
                experience as a System Analyst gives me the ability to approach
                solutions from a logical perspective and helps me design better,
                more robust solutions. My motivation for switching career paths
                is to immerse myself in a constantly evolving industry. I am
                eager to tackle new challenges, contribute my creativity and
                problem-solving skills to the team, and start a career in web
                development.
              </p>
            </div>
          </article>
          <div className="skills__wrapper-bck">
            <article className="skills">
              <div className="skills__header">
                <h2 class="skills__title">Skills</h2>
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
                    <li className="skills__item">Node.JS</li>
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
                    <li className="skills__item">Postman</li>
                    <li className="skills__item">VSCode</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <article className="projects">
            <div className="projects__header">
              <h2 class="projects__title" id="projects">
                Projects
              </h2>
              <p className="projects__content">
                Here are a few design projects I've worked on recently. Want to
                see more?{" "}
                <a
                  className="projects__link"
                  href="mailto:elizabete.silvapaula@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Email me.{" "}
                </a>
              </p>
            </div>

            <div className="projects__wrapper">
              <div className="projects__container meowfinder">
                <h2 className="projects__subtitle">MeowFinder</h2>
                <p className="projects__stack">React | SASS | Node | MongoDB</p>
                <a
                  href="https://meowfinder.netlify.app/"
                  className="projects__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the website
                </a>
              </div>

              <div className="projects__container instock">
                <h2 className="projects__subtitle">InStock</h2>
                <p className="projects__stack">React | SASS | Node | Express</p>
                <a
                  href="https://elizabete-paula-instock.netlify.app/"
                  className="projects__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the website
                </a>
              </div>

              <div className="projects__container brainflix">
                <h2 className="projects__subtitle">BrainFlix</h2>
                <p className="projects__stack"> React | SASS | BEM </p>
                <a
                  href="https://elizabete-paula-brainflix.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="projects__btn"
                >
                  Visit the website
                </a>
              </div>

              <div className="projects__container bandsite">
                <h2 className="projects__subtitle">BandSite</h2>
                <p className="projects__stack"> JS | SASS | API </p>
                <a
                  href="https://elizabete-paula-bandsite.netlify.app/"
                  className="projects__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the website
                </a>
              </div>

              <div className="projects__container travelsite">
                <h2 className="projects__subtitle">TravelSite</h2>
                <p className="projects__stack">HTML | CSS | BEM</p>
                <a
                  href="https://elizabete-travelsite.netlify.app/"
                  className="projects__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the website
                </a>
              </div>
              <div className="projects__container coffeeshop">
                <h2 className="projects__subtitle">Coffee Shop</h2>
                <p className="projects__stack">HTML | CSS | BEM </p>
                <a
                  href="https://elizabete-coffeeshop.netlify.app/"
                  className="projects__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the website
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Background;
