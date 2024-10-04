import Navbar from "../Navbar/Navbar";
import "./Profil.scss";

const Profil = () => {

  return (
    <div className="profil ">
      <div className="profil__tab"> <div className="profil__tab--nav"><nav>Edit Profile</nav><nav>Preferences</nav><nav>Security</nav></div>  </div>
      <div className="profil__item " >
      <img width={130} height={130}src="./img/Mask Groupa.png"alt=""/>
      <img className="profil__item--sett" width={30} height={30}src="./img/Group 194.svg"alt=""/>
        <div className="profil__form">

        Your Name
        </div>

      </div>
    </div>
  );
};

export default Profil;
