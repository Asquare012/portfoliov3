import "./styles/Project.scss";
import ProjectData from "./ProjectData";
import arrow2 from "./images/arrow2.png";
import github from "./images/github.png";
import { NavLink } from "react-router-dom";
// import test from "../home/images/hero.png";

const Project = () => {
  return (
    <div className="Project" id="project">
      <div className="Project-Top">
        <div className="Top-Title">Featured Projects</div>
        <div className="Top-Subtitle">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </div>
      </div>
      <div className="Project-Bottom">
        <ol>
          {ProjectData.map((project) => {
            const { id, title, img, description, stack, year, code, live } =
              project;
            return (
              <li key={id}>
                <div className="Item-Img">
                  <img src={img} alt={title} height="80%" width="70%" />
                </div>
                <div className="Item-Content">
                  <div className="Content-Top">
                    <span>{title}</span>
                    {description}
                  </div>
                  <div className="Content-Mid">
                    <div>PROJECT INFO</div>
                    <div>
                      <span>Stack</span>
                      {stack}
                    </div>
                    <div>
                      <span>Year</span>
                      {year}
                    </div>
                    <div>
                      <span>Project type</span>Solo
                    </div>
                  </div>
                  <div className="Content-Bottom">
                    <span>
                      <NavLink to={live} target="_blank">
                        LIVE DEMO <img src={arrow2} alt="arrow" />
                      </NavLink>
                    </span>
                    <span>
                      <a href={code} target="_blank">
                        SEE ON GITHUB <img src={github} alt="github" />
                      </a>
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Project;
