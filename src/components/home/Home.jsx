import Hero from "./Hero";
import Project from "./Projects";
import About from "./About";
import "./styles/Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Project />
      <About />
    </div>
  );
};

export default Home;
