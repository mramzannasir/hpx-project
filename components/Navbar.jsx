/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";
import globe from "../Images/globe.png";
import { BsChevronDown } from "react-icons/bs";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const onclick = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="flex pt-2 flex-col md:flex-row text-white md:justify-between md:items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white">HPX</h1>
        </div>

        <div
          onClick={onclick}
          className="cursor-pointer md:hidden right-1 top-2 absolute text-2xl">
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div>
          <ul
            className={`flex flex-col md:items-center pl-2 md:pl-0  md:flex-row md:space-x-3 absolute md:static ${
              open ? "top-10" : "top-[-480px]"
            }  md:bg-inherit w-full md:w-auto left-0 transition-all font-semibold ease-in duration-300 bg-stone-500  opacity-75 text-black md:text-white`}>
            <li>Sacrifice</li>
            <li>Tokenomic</li>
            <li>Airdrop</li>
            <li>Team</li>
            <li>FAQs</li>
            <li>About</li>
            <li>
              <button className="btn px-6 py-1 my-3 md:my-0 rounded-full">
                MarketPlace
              </button>
            </li>
            <li>
              <button className="px-6 py-1  rounded-full border-2 border-[#2deca1b3] ">
                Referral
              </button>
            </li>
            <li className="flex gap-1 items-center my-4 md:my-0">
              <div>
                <Image src={globe}></Image>
              </div>
              <div className="text-white font-semibold">ENG</div>
              <div className="cursor-pointer">
                {" "}
                <BsChevronDown />{" "}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
