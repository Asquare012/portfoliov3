import "./AboutPage.scss";
import Experience from "./components/Experience";
import Info from "./components/Info";
import Skills from "./components/Skills";

const About = () => {
  return (
    <div className="AboutPage">
      <Info />
      <Skills />
      <Experience />
    </div>
  );
};

export default About;
