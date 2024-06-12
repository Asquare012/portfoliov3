import "../styles/Experience.scss";
const Experience = () => {
  return (
    <div className="Experience">
      <div className="Experience-Left">MY EXPERIENCE</div>
      <div className="Experience-Right">
        <ol>
          <li>
            <div className="Item-Top">
              <span>
                Frontend Intern
                <br />
                <strong style={{ color: "#F1B739", fontWeight: "600" }}>
                  HNG
                </strong>
              </span>
              <span>2023</span>
            </div>
            <div className="Item-Bottom">
              During my 2-month frontend remote internship with HNG in 2023, I
              utilized HTML, Sass/SCSS, JavaScript, and React to implement
              modern web design, contribute to frontend features, ensure
              performance and cross-browser compatibility, and received
              commendations for dedication and problem-solving.
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
