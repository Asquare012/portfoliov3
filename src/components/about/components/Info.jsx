import "../styles/Info.scss";
import linkdn from "../images/linkdn.png";
import github from "../images/github.png";
import arrow from "../images/arrow.png";

const Info = () => {
  return (
    <div className="Info">
      <div className="Info-Top">
        <div className="Top-Left">ABOUT ME</div>
        <div className="Top-Right">
          <span className="Right-Title">
            Nigerian Frontend Developer and Passionate Crypto Enthusiast <br />
            on a Journey to Become Full-Stack Development
          </span>
          As a Frontend Developer, I`m diving into MERN full-stack development,
          eager to master backend technologies like Node.js, Express.js, and
          MongoDB. <br />I strive for flawless user experiences in web apps,
          while also exploring crypto and Web3 tech. When I`m not coding, you`ll
          find me relaxing with movies or gaming, striking a balance between
          learning and leisure.
          <br />
          <div className="Buttons">
            <button>
              CONTACT ME
              <span className="Dot">
                <img src={arrow} alt="arrow" />
              </span>
            </button>
            <button>
              <img src={linkdn} alt="linkdn" />
            </button>
            <button>
              <img src={github} alt="github" />
            </button>
          </div>
        </div>
      </div>
      <div className="Info-Bottom"></div>
    </div>
  );
};

export default Info;
