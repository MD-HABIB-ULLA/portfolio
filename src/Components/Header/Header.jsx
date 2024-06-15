const Header = () => {
  return (
    <div   className="  ">
      <div className="container m-auto flex items-center justify-between">
        <div className="md:text-5xl text-4xl mt-5 uppercase font-bold">
          <span className="bg-gradient-to-r from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4]     text-transparent  bg-clip-text ">
            Habib
          </span>{" "}
          <br /> ulla
        </div>
        <div className="text-bold  text-xl ">
          {" "}
          <button className="shadow-sm shadow-white px-5 py-2 bg-gradient-to-r  from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4] capitalize     rounded-full ">
            work with me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
