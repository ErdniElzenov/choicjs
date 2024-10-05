
import "./Home.scss";
import Header from "../components/Header/Header.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Profil from "../components/Profil/Profil.jsx";



const Home = () => {
  return (
    <div className="home">
      <div className="home__intro"></div>
      <div className="wrapper">
        <div className="home__content">
          <Navbar />
          <div className="home__content--profil">
            <Header />
            <Profil/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
