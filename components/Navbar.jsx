import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <ul className="flex gap-2 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>
              <button className="px-2 py-4 ">MarketPlace</button>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
