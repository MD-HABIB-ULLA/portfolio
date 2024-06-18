// import { Link } from "react-scroll";

const Contacts = () => {
  return (
    <div id="contact" className="min-h-screen">
      <div className="p-8 rounded-lg ">
        <h2 className="capitalize text-5xl mb-4 font-bold text-center mt-5">
          Contact Information
        </h2>
        <div className="flex md:flex-row gap-4 flex-col  px-10 mt-10  justify-center container m-auto">
          <div className="md:w-1/2 w-full ">
            <h1 className="mb-2 text-3xl font-bold uppercase">
              md. habib ulla
            </h1>
            <p className="mb-2 flex items-center gap-2">
              <img
                src="https://i.ibb.co/gS6r910/gmail.png"
                className="h-7 w-7"
                alt=""
              />
              <a href="mailto:habibulla12782gmail.com" className="text-info">
                habibulla12782gmail.com
              </a>
            </p>
            <p className="mb-2 flex items-center gap-2">
              <img
                src="https://i.ibb.co/g9GL008/phone.png"
                className="h-7 w-7"
                alt=""
              />{" "}
              +8801310704365
            </p>
            <p className="mb-4 flex items-center gap-2">
              <img
                src="https://i.ibb.co/BNMrYBr/3d-map.png"
                className="h-7 w-7"
                alt=""
              />{" "}
              Faridgonj , Chandpur, Bangladesh
            </p>

            <div className="relative pt-14">
              <div className="px-4 py-2 bg-white text-black  absolute rounded-full  top-9 left-1/2 transform -translate-x-1/2 ">
                <h3 className="text-xl font-bold  ">Follow Me</h3>
              </div>
              <div className=" text-center px-10 ">
                <ul className="flex space-x-4 mb-4 pt-9 py-5 mx-auto justify-evenly border-[1px] rounded-full">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/habib-ulla/"
                      target="_blank"
                      className="text-blue-600"
                    >
                      <img
                        src="https://i.ibb.co/WPhfJCj/linkedin.png"
                        className="h-10 w-10"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/MD-HABIB-ULLA"
                      target="_blank"
                      className="text-blue-600"
                    >
                      <img
                        src="https://i.ibb.co/QrBHMbv/github-logo-1.png"
                        className="h-10 w-10"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/habib.ulla.1278/"
                      target="_blank"
                      className="text-blue-600"
                    >
                      <img
                        src="https://i.ibb.co/mtMcPD3/social.png"
                        className="h-10 w-10"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/habib_ualla_1278/?hl=en"
                      target="_blank"
                      className="text-blue-600"
                    >
                      <img
                        src="https://i.ibb.co/bHnmZ2B/instagram.png"
                        className="h-10 w-10"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" md:w-1/2 w-full ">
            {" "}
            <div>
              <h1 className="mb-2 text-3xl font-bold uppercase">
                Send Me a Message
              </h1>{" "}
              <form action="/contact" method="post" className="space-y-4">
                <div>
                  <label
                    for="name"
                    className="block text-base font-medium text-white"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="mt-3 block w-full px-3  border border-white bg-transparent  shadow-sm focus:outline-none focus:ring-white focus:border-white py-3 rounded-full sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block text-base font-medium text-white"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your name"
                    name="email"
                    required
                    className="mt-3 block w-full px-3  border border-white bg-transparent  shadow-sm focus:outline-none focus:ring-white focus:border-white py-3 rounded-full sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    for="message"
                    className="block text-base font-medium text-white"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Drop your massage "
                    required
                    className="mt-3 block w-full px-4  border border-white bg-transparent  shadow-sm focus:outline-none focus:ring-white focus:border-white py-3 rounded-full sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <div className="w-full flex justify-center lg:mb-0 mb-20">
                    <button
                      type="submit"
                      className="shadow-sm shadow-white px-5 py-2 bg-gradient-to-r  from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4] capitalize     rounded-full "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
