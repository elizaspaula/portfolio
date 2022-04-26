import "./Home.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";

function Home() {
  return (
    <>
      <HeaderNav />
      <div className="home">
        <h1 className="home__title">Creativity meets Technology</h1>
        <div className="home__hero"></div>
      </div>
    </>
  );
}

export default Home;
