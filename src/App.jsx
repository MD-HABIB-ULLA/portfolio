import Header from "./Components/Header/Header";
import bg from "../src/assets/site-bg.jpg";
import Navber from "./Components/Nav/Navber";
import Banner from "./Components/Banner/Banner";
import About from "./Pages/About/About";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat bg-cover overflow-hidden"
    >
      <Header />
      <Navber />
      <Banner/>
      <About/>

      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
