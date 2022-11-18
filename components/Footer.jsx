import React from "react";
import { BsTwitter } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";
import { SiTelegram } from "react-icons/si";

SiTelegram;
const Footer = () => {
  return (
    <>
      <section className="text-white py-28 bg-[#13161b] rounded-xl">
        <div>
          <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold text-center">
            Join with us
          </h1>
          <div className="flex gap-6 mt-6 items-center justify-center pb-6 ">
            <div className="p-4 bg-[#191D24] rounded-full btnx">
              {" "}
              <SiTelegram className="text-xl md:text-2xl  rounded-full" />{" "}
            </div>
            <div>
              {" "}
              <BsTwitter className="text-xl md:text-2xl  rounded-full" />{" "}
            </div>
            <div>
              {" "}
              <TiSocialYoutube className="text-xl md:text-2xl  rounded-full" />{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
