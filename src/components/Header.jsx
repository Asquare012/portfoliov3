import "./Header.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import open from "./home/images/open.png";
import close from "./home/images/close.png";

const Header = () => {
  const [Menu, setMenu] = useState(null);

  const handleClick = () => {
    setMenu(!Menu);
  };
  return (
    <div className="Header">
      <ul>
        <li>
          <NavLink to={"/"}>HASSAN ABASS</NavLink>
        </li>
        <li onClick={() => window.scrollTo(0, 750)}>Project</li>
        <li onClick={() => window.scrollTo(0, 2300)}>About</li>
        <li onClick={() => window.scrollTo(0, 3000)}>Contact</li>
        <li onClick={handleClick}>
          <img src={Menu ? close : open} alt="hamburger" height="30px" />
        </li>
      </ul>
      <br />
      {Menu && (
        <div className="Menu">
          <ol>
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>ABOUT</NavLink>
            </li>
            <li>
              <button>DOWNLOAD RESUME</button>
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default Header;
