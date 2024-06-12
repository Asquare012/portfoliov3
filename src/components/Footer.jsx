import "./Footer.scss";
import linkdn from "./home/images/linkdn.png";
import github from "./home/images/github.png";
import x from "./home/images/x.png";
import ig from "./home/images/ig.png";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Left">
        <div className="Left-First">LET`S CONNECT</div>
        <div className="Left-Second">
          Say hello at{" "}
          <span style={{ color: "#F1B739", fontWeight: 600 }}>
            abass.hassan.7798@gmail.com
          </span>
          <br />
          For more info,
          <span style={{ color: "#039e03", fontWeight: 600 }}>
            {" "}
            here`s my resume
          </span>
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
      <div className="Footer-Right">
        <FooterForm />
      </div>
    </div>
  );
};

export default Footer;
