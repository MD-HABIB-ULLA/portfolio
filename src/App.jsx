import Header from "./Components/Header/Header";
import bg from "../src/assets/site-bg.jpg";
import Navber from "./Components/Nav/Navber";
import Banner from "./Components/Banner/Banner";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import Contacts from "./Pages/Contact/Contacts";
import ProjectShow from "./Pages/Projects/ProjectShow";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat bg-cover overflow-hidden px-3 lg:p-0"
    >
      <Home />
      <About />
      <Navber />
      <Skills />
      <ProjectShow/>
      <Contacts />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

export default App;
