import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Chart from "./Chart";
import AirDrop from "./AirDrop";
import Team from "./Team";
import About from "./About";
import Faq from "./Faq";
import Location from "./Location";
import Footer from "./Footer";
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
      <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36 bg-[#0d0f15] ">
        {/* bg-[#1e1e1e]  */}
        <Section3 />
      </div>
      <div className="bg-[#13161b]">
        <Chart />
      </div>
      <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36 bg-[#0d0f15] ">
        <Section4 />
      </div>
      <div className="bg-[#13161b] px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36">
        <AirDrop />
      </div>
      <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36 bg-[#0d0f15] ">
        <Team />
      </div>
      <div className="bg-[#13161b] px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36">
        <About />
      </div>
      <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36 bg-[#0d0f15] ">
        <Faq />
      </div>
      <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36 bg-[#0d0f15] ">
        <Location />
      </div>
      <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36 bg-[#0d0f15] ">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
