import { Panel } from "../../utils";
import "./Navbar.scss";

const Navbar = () => {

  return (
    <div className="Navbar">
        {Panel.map((e) => (
          <nav> 
            <div >
            <img className="content__img"width={25} height={25}src={`./img/${e.img}`}alt=""/>
        {e.name}
            </div>
        </nav>
        ))}
    </div>
  );
};

export default Navbar;
