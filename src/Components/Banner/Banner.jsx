import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  const handleDownload = () => {
    const pdfUrl = "/cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Habib-ulla-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div style={{ height: "calc(100vh - 144px)" }}>
      <div className="flex items-center h-full">
        <div className="w-full justify-between flex   container m-auto ">
          <div className="flex justify-between flex-col lg:flex-row-reverse">
            <Fade duration={2000} direction={"up"} triggerOnce={true} cascade={true}>
              <div className="flex items-center justify-center">
                {" "}
                <div className="rounded-full border-2 border-[#5F8DE5]">
                  {" "}
                  <img
                    src="https://i.ibb.co/QvzcWvT/enhanced-173-removebg-preview.png"
                    className="max-w-sm  ml-2 mb-4 shadow-2xl rounded-full"
                  />
                </div>
              </div>
            </Fade>
            <div className="md:mt-0 mt-5">
              <Fade duration={1000} direction={"up"} triggerOnce={true} cascade={true}>
                {" "}
                <h1 className="lg:text-[120px] text-[80px] font-bold  uppercase">
                  Habib ulla
                </h1>
                <h1
                  style={{
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                  className="lg:text-5xl text-3xl uppercase"
                >
                  I am a{" "}
                  <span className="bg-gradient-to-r from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4]     text-transparent  bg-clip-text">
                    <Typewriter
                      words={[
                        "Frontend developer",
                        "React developer",
                        "MERN stack developer",
                      ]}
                      loop={10}
                      cursor
                      cursorStyle="_"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <p className="py-6 lg:w-2/3 text-xl ">
                  Motivated web developer with a strong background in React and
                  JavaScript, eager to contribute to real-world projects in a
                  dynamic team. Passionate about coding and continuous learning,
                  I create intuitive, user-friendly web experiences
                </p>
                <div className="flex gap-4">
                  <button className="shadow-sm shadow-white px-5 py-2 bg-gradient-to-r  from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4] capitalize     rounded-full ">
                    contact me
                  </button>

                  <button
                    onClick={handleDownload}
                    className=" flex gap-2 shadow-sm shadow-white px-5 py-2 bg-gradient-to-r  from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4] capitalize text-transparent  bg-clip-text    rounded-full "
                  >
                    <FaDownload className="text-white" /> download CV
                  </button>
                </div>{" "}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
