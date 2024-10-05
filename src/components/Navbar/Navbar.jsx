import { Panel } from "../../utils";
import "./Navbar.scss";

const Navbar = () => {

  return (
    <div className="Navbar">
      <div className="Navbar__title">
      <img  width={36} height={36}src="./img/iconfinder_vector_65_09_473792 1.svg" alt=""/>
      <div >BankDash.</div>
      </div>
      <div className="Navbar__nav">
      {Panel.map((e) => (
                <nav> 
                  <div >
                  <img  width={25} height={25}src={`./img/${e.img}`}alt=""/>
                  {e.name}
                  </div>
              </nav>
              ))}
      </div>
            
    </div>
  );
};

export default Navbar;
