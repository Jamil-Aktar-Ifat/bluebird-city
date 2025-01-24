const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <a className="text-blue-400">Home</a>
      </li>
      <li>
        <a href="">Offers</a>
      </li>
      <li>
        <a>Our Menu</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a href="">Contact Us</a>
      </li>
    </>
  );
  return (
    <div className="bg-[#15151580]">
      <div className="navbar fixed z-10 text-white bg-[#15151580] px-5 md:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button "
              className="btn btn-ghost lg:hidden"
            ></div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <a className="grid text-left cinzel-font">
            <p className="text-xl md:text-3xl font-bold">BLUEBIRD CITY</p>
            <span className="text-xs md:text-xl font-medium tracking-[9px] md:tracking-[12px]">
              RESTAURANT
            </span>
          </a>
        </div>
        <div className="navbar-end ">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {" "}
            {navLinks}
          </ul>
          <div className="">
            <button className="btn md:w-32">Book a Table</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
