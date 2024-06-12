import "./Footer.scss";
import linkdn from "./home/images/linkdn.png";
import github from "./home/images/github.png";
import x from "./home/images/x.png";
import ig from "./home/images/ig.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Left">
        <div className="Left-First">LET`S CONNECT</div>
        <div className="Left-Second">
          Say hello at abass.hassan.7798@gmail.com
          <br />
          For more info, here`s my resume
        </div>
        <div className="Left-Third">
          <ol>
            <li>
              <img src={linkdn} alt="linkdn" />
            </li>
            <li>
              <img src={github} alt="github" />
            </li>
            <li>
              <img src={x} alt="x" height="24px" />
            </li>
            <li>
              <img src={ig} alt="instagram" height="26px" />
            </li>
          </ol>
        </div>
      </div>
      <div className="Footer-Right"></div>
    </div>
  );
};

export default Footer;
