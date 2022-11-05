import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="gridbg h-full">
        <div className="px-2  md:px-24 lg:px-48">
          <Navbar />
        </div>
        <div className="p-9">
          {" "}
          <Banner />
        </div>
      </div>
    </>
  );
};

export default Layout;
