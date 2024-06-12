import "./styles/Hero.scss";
import heroImg from "./images/hero.png";
import linkdn from "./images/linkdn.png";
import github from "./images/github.png";
import arrow from "./images/arrow.png";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Left">
        <div className="Title">
          HI, I AM <br />
          HASSAN ABASS.
        </div>
        <div className="SubTitle">
          Passionate frontend developer skilled in creating dynamic and
          responsive web interfaces. Currently expanding expertise into backend
          technologies to build comprehensive, full-stack solutions. Committed
          to delivering seamless, user-friendly experiences.
        </div>
        <div className="Buttons">
          <button onClick={() => window.scrollTo(0, 4250)}>
            CONTACT ME
            <span className="Dot">
              <img src={arrow} alt="arrow" />
            </span>
          </button>
          <button>
            <img src={linkdn} alt="linkdn" />
          </button>
          <button>
            <a href="https://github.com/asquare012" target="_blank">
              <img src={github} alt="github" />
            </a>
          </button>
        </div>
      </div>
      <div className="Hero-Right">
        <img src={heroImg} alt="heroImg" height="65%" width="70%" />
      </div>
    </div>
  );
};

export default Hero;
