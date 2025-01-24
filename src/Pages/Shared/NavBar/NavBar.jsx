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
    <div className="max-w-6xl mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1"> {navLinks}</ul>
        </div>
        <div className="">
          <a className="btn">Book a Table</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
