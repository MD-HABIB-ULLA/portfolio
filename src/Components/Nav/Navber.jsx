import { IoHome } from "react-icons/io5";
import { Link } from "react-scroll";
import { GrContactInfo } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineSms } from "react-icons/md";


const Navber = () => {
  return (
    <div className=" fixed w-full bottom-2 lg:bottom-8 z-50 px-5">
      <div className="container mx-auto  ">
        <div className="bg-black/20 justify-between text-2xl items-center px-5  flex  h-[96px] max-w-[460px] rounded-full mx-auto backdrop-blur-2xl">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to="home"
            className="cursor-pointer  flex items-center justify-center h-[60px] w-[60px]"
          >
            <IoHome />
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to="about"
            className="cursor-pointer  flex items-center justify-center h-[60px] w-[60px]"
          >
            <GrContactInfo />
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="skills"
            duration={500}
            className="cursor-pointer  flex items-center justify-center h-[60px] w-[60px]"
          >
            <FaUserGear />
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="projects"
            duration={500}
            className="cursor-pointer  flex items-center justify-center h-[60px] w-[60px]"
          >
            <GoProjectRoadmap />
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="contact"
            duration={500}
            className="cursor-pointer  flex items-center justify-center h-[60px] w-[60px]"
          >
            <MdOutlineSms />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
