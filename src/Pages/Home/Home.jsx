import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <div
      id="home"
      className="  lg:h-screen  flex  justify-between items-center flex-col    "
    >
      <div className="lg:space-y-10">
   <Header/>
        <Banner />
      </div>
    </div>
  );
};

export default Home;
