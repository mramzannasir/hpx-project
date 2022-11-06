import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="gridbg">
        <div className="px-2 md:px-4 lg:px-16 xl:px-24 2xl:px-36">
          <div>
            <Navbar />
          </div>{" "}
          <div>
            <Banner />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
