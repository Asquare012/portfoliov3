import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Routed components
import Home from "./components/home/Home";
import AboutPage from "./components/about/AboutPage";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
