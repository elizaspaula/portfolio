import "./Background.scss";

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
              <h2 className="skills__subtitle"> Front-End</h2>
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
              <h2 className="skills__subtitle"> Back-End</h2>
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
              <h2 className="skills__subtitle">Others</h2>
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
          </div>
          <ul className="projects__container">
            <li>Fatec</li>
            <li>BrainStation</li>
          </ul>
        </article>
      </div>
    </>
  );
}

export default Background;
