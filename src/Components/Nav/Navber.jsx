import { IoHome } from "react-icons/io5";
import { Link } from "react-scroll";

const Navber = () => {
  return (
    <div className=" fixed w-full bottom-2 lg:bottom-8 z-50 px-5">
      <div className="container mx-auto  ">
        <div className="bg-black/20 justify-between text-2xl items-center px-5  flex  h-[96px] max-w-[460px] rounded-full mx-auto backdrop-blur-2xl">
          <Link to="home" className="cursor-pointer  flex items-center justify-center h-[60px] w-[60px]">
            <IoHome />
          </Link>
          <Link className="cursor-pointer  flex items-center justify-center h-[60px] w-[60px]">
            <IoHome />
          </Link>
          <Link className="cursor-pointer  flex items-center justify-center h-[60px] w-[60px]">
            <IoHome />
          </Link>
          <Link className="cursor-pointer  flex items-center justify-center h-[60px] w-[60px]">
            <IoHome />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
