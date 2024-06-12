import "./Footer.scss";
import linkdn from "./home/images/linkdn.png";
import github from "./home/images/github.png";
import x from "./home/images/x.png";
import ig from "./home/images/ig.png";
import FooterForm from "./FooterForm";

const Footer = () => {
  const d = new Date();
  const y = d.getFullYear();
  return (
    <div className="Footer">
      <div className="Footer-Left">
        <div className="Left-First">LET`S CONNECT</div>
        <div className="Left-Second">
          Say hello at{" "}
          <span>
            <a
              href="mailto:abass.hassan.7798@gmail.com"
              target="_blank"
              style={{
                color: "#F1B739",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              abass.hassan.7798@gmail.com
            </a>
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
              <a href="https://github.com/asquare012" target="_blank">
                <img src={github} alt="github" />
              </a>
            </li>
            <li>
              <a href="https://x.com/asquare012" target="_blank">
                <img src={x} alt="x" height="24px" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/asquare012" target="_blank">
                <img src={ig} alt="instagram" height="26px" />
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="Footer-Right">
        <FooterForm />
        <br />
        <p className="Copyright">
          © Hassan Abass Asquare{" "}
          <span style={{ color: "#F1B739", fontWeight: 600 }}>{y}</span>.<br />{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
