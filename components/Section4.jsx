/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import Chart2 from "./Chart2";
import igm1 from "../Images/4th-box-ico1.png";
import igm2 from "../Images/4th-box-ico2.png";
import igm3 from "../Images/4th-box-ico3.png";
import igm4 from "../Images/4th-box-ico4.png";

const Section4 = () => {
  return (
    <>
      <section className="flex flex-col box-border overflow-hidden gap-5 lg:flex-row pt-8 md:pt-16 xl:pt-32 text-white">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Earliest Scarifies <br /> bonus
          </h1>
          <p className="text-sm font-normal my-2 md:my-5 xl:my-6 text-stone-300">
            Hpx will work as an index for all nfts on Pushchair. Once an nft
            transaction is made through our <br /> platform, you will earn
            interest each time a transaction is made, just like a shareholder of
            a company.
          </p>
          <div className="p-4 lg:px-8 bg-[#22252a] rounded-2xl cursor-pointer inline-block">
            <h1 className="text-base font-semibold">End in</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold fancy-text text-center ">
              00:30:20:33
            </h1>
          </div>
          <div className="relative cursor-pointer">
            <p className="text-base font-bold fancy-text my-4">
              How dose it really work
            </p>
            <div className="hidden md:flex bg-gradient-to-r from-[#276EA3] via-[#0FB3C5] to-[#0CC77D] top-5 h-[2px] absolute w-44"></div>
          </div>
        </div>
        <div className="flex-1">
          <Chart2 />
        </div>
      </section>

      <section className="mt-10 xl:my-28 opacity-95 pb-8">
        <div className="gradient-b py-5  duration-300 relative" id="boxb">
          <h1 className="text-xl xl:text-4xl font-semibold text-center absolute -inset-5 left-[29%] md:left-[40%]  xl:left-[38%] bg-[#0d0f15]  w-[48%] xl:w-[18%]  md:w-[22%] h-[2rem]">
            Project Status
          </h1>

          <div>
            <p className="text-sm md:text-base  font-normal text-center my-4">
              Couple days after the PulseChain mainnet release Sacrificers will
              be able to access their HPX.
            </p>
            <p className="text-sm md:text-base  font-normal text-center my-4">
              To keep update with latest announcement join official{" "}
              <span className="text-[#0FB3C5] cursor-pointer">
                Telegram Chat
              </span>{" "}
              and follow the{" "}
              <span className="text-[#0FB3C5] cursor-pointer">Twitter</span>{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="text-white mt-8 2xl:mt-16">
        <div>
          <h1 className="text-center text-xl md:text-2xl xl:text-4xl font-semibold">
            $Hpx designed to increase in value
          </h1>
        </div>
        <p className="text-center text-sm xl:text-lg font-semibold my-4 ">
          The 10,000 tokenomics
        </p>

        {/* --------------------------------Boxs--------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 2xl:gap-4">
          <div className="bg-[#13161b] rounded-md px-1 py-3  xl:px-3 xl:py-5 cursor-pointer hover:opacity-70 duration-300">
            <Image src={igm1} />
            <h1 className="my-5 text-2xl font-semibold md:text-3xl">
              $Hpx core utility
            </h1>
            <p className="text-sm font-normal text-stone-200">
              $Hpx will be used as one of four different trading methods, which
              will be the only one to benefit the x10 cheaper commission fees
              than other trading methods. (From 2.222% to 0.222%)
            </p>
          </div>
          <div className="bg-[#13161b] rounded-md px-1 py-3  xl:px-3 xl:py-5 cursor-pointer hover:opacity-70 duration-300">
            <Image src={igm2} />
            <h1 className="my-5 text-2xl font-semibold md:text-3xl">
              NFTs Trading
            </h1>
            <p className="text-sm font-normal text-stone-200">
              Pulsechain, pHex, pulseX and the USDL will be available as well
              for Nft trading methods. Once the trade is completed, they will be
              committed to an 2.22% commission fee.
            </p>
          </div>
          <div className="bg-[#13161b] rounded-md px-1 py-3  xl:px-3 xl:py-5 cursor-pointer hover:opacity-70 duration-300">
            <Image src={igm3} />
            <h1 className="my-5 text-2xl font-semibold md:text-3xl">
              Hpx staking
            </h1>
            <p className="text-sm font-normal text-stone-200">
              100% of our commission earned in PLS, PLSX and USDL will be given
              to $Hpx stakers. By staking it, you’re becoming stakeholder of
              Fmpany. The more $Hpx you stake, the more pulsechain, pulseX, pHex
              and USDL you will earn.
            </p>
          </div>
          <div className="bg-[#13161b] rounded-md px-1 py-3  xl:px-3 xl:py-5 cursor-pointer hover:opacity-70 duration-300">
            <Image src={igm4} />
            <h1 className="my-5 text-2xl font-semibold md:text-3xl">
              Hpx defilation
            </h1>
            <p className="text-sm font-normal text-stone-200">
              Once someone stakes $Hpx, 0.111% of their coins get’s burned.
            </p>
          </div>
        </div>
        <div className="pb-14">
          <h1 className="text-sm lg:text-base font-semibold mt-6 text-center cursor-pointer underline underline-offset-4">
            See Hpx advanced Techspecs
          </h1>
        </div>
      </section>
    </>
  );
};

export default Section4;
