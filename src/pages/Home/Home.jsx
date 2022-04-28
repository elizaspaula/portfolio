import "./Home.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Background from "../../components/Background/Background";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <HeaderNav />
      <div className="home">
        <div className="hero__wrapper-bck">
          <div className="hero">
            <p className="hero__content"> Hey there, I am Elizabete</p>
            <h1 className="hero__title">Full-Stack Developer</h1>
            <button className="hero__btn">Download Resume PDF</button>
          </div>
        </div>
      </div>
      <Background />
      <Footer />
    </>
  );
}

export default Home;
