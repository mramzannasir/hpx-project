import React from "react";
import Chart2 from "./Chart2";
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
          <div className="p-4 lg:px-8 bg-[#2c2a2a] rounded-2xl cursor-pointer inline-block">
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

      <section className="mt-10 opacity-95 pb-8">
        <div className="gradient-b py-5 relative" id="boxb">
          <h1 className="text-xl xl:text-4xl font-semibold text-center absolute -inset-5 left-[29%] md:left-[40%]  xl:left-[38%] bg-[#13161B]  w-[48%] xl:w-[18%]  md:w-[22%] h-[2rem]">
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
    </>
  );
};

export default Section4;
