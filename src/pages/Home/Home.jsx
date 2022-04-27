import "./Home.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Background from "../../components/Background/Background";

function Home() {
  return (
    <>
      <HeaderNav />
      <div className="home">
        <div className="hero">
          <p className="hero__content"> Hey there, I am Elizabete</p>
          <h1 className="hero__title">Full-Stack Developer</h1>
          <button className="hero__btn">Download Resume PDF</button>
        </div>
        <Background />
      </div>
    </>
  );
}

export default Home;
