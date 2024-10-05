import { Forms } from "../../utils";
import "./Profil.scss";

const Profil = () => {

  return (
    <div className="profil ">
      <div className="profil__tab"> <div className="profil__tab--nav"><nav>Edit Profile</nav><nav>Preferences</nav><nav>Security</nav></div>  </div>
      <div className="profil__item " >
        <div>
            <img width={130} height={130}src="./img/Mask Groupa.png" alt="ddd"/>
          <img className="profil__item--sett" width={30} height={30}src="./img/Group 194.svg"alt=""/>
        </div>
        <form className="profil__form">
        {Forms.map((e) => (
            <div className="profil__form--item">
              <div> {e.name}</div>
              <input value={e.value} className="profil__form--input" type={e.type}/>
            </div>
        ))}
        <button className="profil__form--button">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Profil;
