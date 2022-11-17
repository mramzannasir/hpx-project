import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Section3 from "./Section3";
import Section4 from "./Section4";

import Chart from "./Chart";
import AirDrop from "./AirDrop";
import Team from "./Team";
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
      <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36 bg-[#13161B] ">
        {/* bg-[#1e1e1e]  */}
        <Section3 />
      </div>
      <div className="bg-neutral-800">
        <Chart />
      </div>
      <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36 bg-[#13161B] ">
        <Section4 />
      </div>
      <div className="bg-neutral-800 px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36">
        <AirDrop />
      </div>
      <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36 bg-[#13161B] ">
        <Team />
      </div>
    </>
  );
};

export default Layout;
