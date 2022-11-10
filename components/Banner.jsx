/* eslint-disable @next/next/no-img-element */
import React from "react";
import plybtn from "../Images/play.png";
import Image from "next/image";
import img from "../Images/12.png";
import img1 from "../Images/2nd_box-1st.png";
const Banner = () => {
  return (
    <>
      <div>
        <section className="flex flex-col md:flex-row items-center xl:gap-8 justify-between text-white pt-6 md:pt-9 xl:pt-16">
          <div className="flex flex-col flex-1">
            <div>
              <h1 className="text-center md:text-left text-3xl md:text-4xl xl:text-6xl font-semibold">
                Community owned NFT market place with a{" "}
                <span className="fancy-text font-bold shadow-xl">10,000x</span>{" "}
                native token
              </h1>
            </div>
            <div>
              <p className="text-xl font-semibold text-center md:text-left mt-2">
                From Community For Community
              </p>
            </div>
            <div>
              <p className="text-lg my-4 text-stone-300 text-center md:text-left">
                Hpx is a marketplace for NFT trading based on the Pulse Chain
                network. Make profits by owning $Hpx as one of our company
                shareholders.
              </p>
            </div>
            <div className="flex justify-center md:justify-start gap-2 items-center">
              <button className="btn px-6 py-1 my-3 md:my-0 rounded-full">
                MarketPlace
              </button>
              <div>
                <Image src={plybtn}></Image>
              </div>
              <div>
                <h1 className="text-sm md:text-xl font-semibold">
                  More about HPX
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:flex-1 ">
            <Image src={img}></Image>
          </div>
        </section>
        {/* __________________________________________________2nd Section start from here___________________________ */}
        <section className="flex flex-col md:flex-row gap-5 justify-center text-white">
          <div
            className="flex-1 p-2 md:p-4 justify-center items-center gradient-bordermax"
            id="boxmax">
            {/* ____________________1st_Row_______________________________________ */}

            <div className="flex flex-col xl:flex-row gap-1">
              <div className="flex gap-1">
                <div className="flex gap-1 items-center">
                  <h1 className="text-xl md:text-2xl xl:text-3xl font-bold fancy-text">
                    Stake
                  </h1>
                  <Image src={img1} alt="" srcSet="" />
                </div>
                <div className="flex gap-1 items-center">
                  <h1 className="text-xl md:text-2xl xl:text-3xl font-bold fancy-text">
                    $Hpx and earn
                  </h1>
                  <Image src={img1} alt="" srcSet="" />
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
                  PLS,
                </h1>
                <Image src={img1} alt="" srcSet="" />
              </div>
            </div>
            {/* ____________________________2nd_Row__________________________ */}
            <div className="flex flex-col xl:flex-row gap-1 mt-1">
              <div className="flex gap-1">
                <div className="flex gap-1 items-center">
                  <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
                    pHex
                  </h1>
                  <Image src={img1} alt="" srcSet="" />
                </div>
                <div className="flex gap-1 items-center">
                  <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
                    PLSX, and
                  </h1>
                  <Image src={img1} alt="" srcSet="" />
                </div>
              </div>

              <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
                USDL daily as rewards.
              </h1>
            </div>
            <div>
              <p className="text-sm md:text-lg  text-stone-400 my-4">
                To reward our earliest sacricers we made a bonus for them, the
                earlier you sacrifice the more points you will earn!
              </p>
            </div>

            <div className="">
              <button className="btn px-6 py-1 my-3 md:my-0 rounded-full text-lg font-semibold">
                Check how it work
              </button>
            </div>
          </div>

          <div
            className="flex-1 border border-[#2deca1b3] p-2 md:p-4 rounded-lg gradient-bordermax"
            id="boxmax">
            <div>
              <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
                The usefullness of Hpx for Pulsechain
              </h1>
            </div>
            <div>
              <p className="text-sm md:text-lg  text-stone-400 my-2 md:my-4 xl:my-6">
                By making Pulsechain, PulseX and pHex a pay-per-listing method
                (which no other pulse nft marketplace has done). We are
                increasing their prices exponentially.
              </p>
            </div>
            <div>
              <p className="text-sm md:text-lg  text-stone-400">
                Imagine this, if someone wants to buy an NFT listed by pHex,
                Pls, PlsX, they will be forced to trade them or buy them, in
                order to pay for their favorite NFTs. And above all, there will
                be more than 20,000,000 NFTs available on Hpx! Thats almost x100
                more than all p-erc-20 available on PulseChain!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
