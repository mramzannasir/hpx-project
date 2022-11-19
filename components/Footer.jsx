import React from "react";
import { BsTwitter } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";
import { SiTelegram } from "react-icons/si";

SiTelegram;
const Footer = () => {
  return (
    <>
      <section className="text-white pt-28 pb-4 bg-[#13161b] rounded-xl">
        <div>
          <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold text-center">
            Join with us
          </h1>
          <div className="flex gap-6 mt-6 items-center justify-center pb-6 ">
            <div className="p-4 bg-[#191D24] rounded-full btnx">
              {" "}
              <SiTelegram className="text-xl md:text-2xl  rounded-full" />{" "}
            </div>
            <div className="p-4 bg-[#191D24] rounded-full btnx">
              {" "}
              <BsTwitter className="text-xl md:text-2xl  rounded-full" />{" "}
            </div>
            <div className="p-4 bg-[#191D24] rounded-full btnx">
              {" "}
              <TiSocialYoutube className="text-xl md:text-2xl  rounded-full" />{" "}
            </div>
          </div>
        </div>
        <div className="px-2 md:px-6 lg:px-12">
          <div className="my-6 bg-[#191d24] h-[1px]  w-full" />
        </div>
        <div className="mt-8 md:mt-12 xl:mt-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-2 md:px-6 lg:px-12 gap-2 md:gap-4 xl:gap-7 justify-between">
          <div className="flex flex-col ">
            <h1 className="text-xl md:text-2xl font-semibold">HPX</h1>
            <p className="text-base font-normal mt-4 opacity-80">
              Hpx will work like an Index for all nfts on Pulsechain. Once a nft
              trade is made thru our platform you will earn yields each time a
              transaction is made, just like a shareholder
            </p>
          </div>
          <div className="md:ml-10 lg:ml-20">
            <ul className="flex flex-col gap-2">
              <li className="text-lg md:text-xl font-semibold">Explore</li>
              <li className="text-base opacity-70">Sacrifice</li>
              <li className="text-base opacity-70">Marketplace</li>
              <li className="text-base opacity-70">HPX Air Drop</li>
              <li className="text-base opacity-70">Elron</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="text-lg md:text-xl font-semibold">Community</li>
              <li className="text-base opacity-70">Home</li>
              <li className="text-base opacity-70">Project Status</li>
              <li className="text-base opacity-70">Value</li>
              <li className="text-base">Wallet</li>
            </ul>
          </div>
          <div className="flex">
            <ul className="flex flex-col gap-2">
              <li className="text-lg md:text-xl font-semibold">Company</li>
              <li className="text-base opacity-70">About</li>
              <li className="text-base opacity-70">Career</li>
              <li className="text-base opacity-70">Team</li>
              <li className="text-base opacity-70">Location</li>
            </ul>
          </div>
        </div>
        <div className="my-4 lg:mt-12 flex justify-between  px-2 md:px-6 lg:px-12">
          <h1 className="text-base font-medium ">HPX all rights resevred</h1>
          <h1 className="text-base font-medium ">Privacy Policy</h1>
        </div>
      </section>
    </>
  );
};

export default Footer;
