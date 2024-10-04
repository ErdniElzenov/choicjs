import "./Header.scss";

const Header = ( ) => {
  return (
      <div className="header">
        <div className="header__setting">Setting</div>
        <div className="header__search" >
            <input type="search" placeholder="Search for something" className="header__search--input"/> 
            <div className="header__search--logo"><img  width={25} height={25} src="./img/settings1.svg"/></div>   
            <div className="header__search--logo"><img  width={25} height={25} src="./img/002-notification-1.svg"/></div> 
            <img className="header__search--img" width={60} height={60} src="./img/Mask Group.png"/>
          </div>
      </div>
  );
}

export default Header;
