import { TbFileTypeHtml } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";

const About = () => {
  return (
    <div id="about" className=" py-8 lg:py-24 min-h-screen  flex items-center justify-center">
      <div className="container m-auto flex flex-col items-center">
        <h1 className="capitalize text-4xl font-bold">About me </h1>
        <p className=" text-center">
          Hello, I'm Habib Ulla, a passionate frontend web developer skilled in
          JavaScript, React, and Tailwind CSS. I specialize in creating visually
          appealing and user-friendly websites by translating design concepts
          into functional and interactive web applications. With a keen eye for
          detail and a commitment to staying updated with the latest trends, I
          deliver high-quality websites that exceed client expectations and
          drive business growth. My approach is marked by effective
          communication, collaboration, and a passion for innovation.
        </p>
        <div className="">
            <h1 className="text-2xl  font-bold capitalize text-center mt-5 mb-5">What i do</h1>
         <div className="flex lg:flex-row flex-col  lg:gap-20 gap-8 ">
         <div className="relative py-5 pl-16 px-10  bg-gradient-to-r from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4]  rounded-r-full text-xl font-bold ">
            <span className="absolute text-4xl -left-10 -top-2 bg-white h-20 w-20 p-5 rounded-full text-[#FE54F5] flex items-center justify-center">
              <TbFileTypeHtml className="" />
            </span>{" "}
            Figma to HTML{" "}
          </div>
          <div className="relative py-5 pl-16 px-10  bg-gradient-to-r from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4]  rounded-r-full text-xl  font-bold ">
            <span className="absolute text-4xl -left-10 -top-2 bg-white h-20 w-20 p-5 rounded-full text-[#FE54F5]  flex items-center justify-center">
              <MdDeveloperMode className="" />
            </span>{" "}
            Full stack websites
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default About;
