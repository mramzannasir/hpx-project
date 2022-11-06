import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="gridbg">
        <div className="px-2 md:px-24 lg:px-48">
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
