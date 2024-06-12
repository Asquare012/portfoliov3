import "./styles/About.scss";
import { NavLink } from "react-router-dom";
import me from "./images/me.png";

const About = () => {
  return (
    <div className="About">
      <div className="About-Top">ABOUT ME</div>
      <div className="About-Bottom">
        <div className="Bottom-Left">
          <img src={me} alt="about-me" />
        </div>
        <div className="Bottom-Right">
          <span className="Right-Title">
            Nigerian Frontend Developer and Passionate Crypto Enthusiast on a
            Journey to Become Full-Stack Development
          </span>
          As a Frontend Developer, I`m diving into MERN full-stack development,
          eager to master backend technologies like Node.js, Express.js, and
          MongoDB. <br />I strive for flawless user experiences in web apps,
          while also exploring crypto and Web3 tech. When I`m not coding, you`ll
          find me relaxing with movies or gaming, striking a balance between
          learning and leisure.
          <br />
          <span className="Right-Link">
            <NavLink to={"/about"}>MORE ABOUT ME</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
