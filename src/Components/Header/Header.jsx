const Header = () => {
  return (
    <div className="  h-36">
      <div className="container m-auto flex items-center justify-between">
        <div className="text-5xl mt-5 uppercase font-bold">
          <span className="bg-gradient-to-r from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4]     text-transparent  bg-clip-text ">
            Habib
          </span>{" "}
          <br /> ulla
        </div>
        <div className="text-bold  text-xl ">
          {" "}
          <button className=" shadow-sm shadow-white px-5 py-2 bg-gradient-to-r  from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4]     rounded-full capitalize">
            {" "}
            work with me{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
