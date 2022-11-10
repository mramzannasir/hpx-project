import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Section3 from "./Section3";

const Layout = () => {
  return (
    <>
      <div className="gridbg">
        <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36">
          <div>
            <Navbar />
          </div>{" "}
          <div className="">
            <Banner />
          </div>
        </div>
      </div>
      <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36 bg-[#1e1e1e] ">
        {/* bg-[#1e1e1e]  */}
        <Section3 />
      </div>
    </>
  );
};

export default Layout;
