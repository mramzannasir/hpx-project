import Image from "next/image";
import React from "react";
import img1 from "../Images/3rd-box-ico1.png";
import img2 from "../Images/3rd-box-ico2.png";
import img3 from "../Images/3rd-box-ico3.png";
import img4 from "../Images/3rd-box-ico4.png";
import img5 from "../Images/3rd-box-ico5.png";
import img6 from "../Images/3rd-box-ico6.png";
import img7 from "../Images/3rd-box-ico7.png";
import img8 from "../Images/3rd-box-ico8.png";
import img9 from "../Images/3rd-box-ico9.png";
import img10 from "../Images/3rd-box-ico10.png";
import img11 from "../Images/3rd-box-ico11.png";
import dedco from "../Images/dedco.png";
import polygn from "../Images/polygn.png";
import Doc_ico from "../Images/Doc_ico.png";

const Section3 = () => {
  return (
    <>
      <div className="py-6 md:py-8 xl:py-10">
        <h1 className="text-center fancy-text text-lg md:text-xl font-bold">
          What can Hpx Really do?
        </h1>
      </div>
      <section className="text-white">
        <div>
          <h2 className="text-xl md:text-3xl text-center font-semibold">
            Meet the founder of hpx
          </h2>
        </div>
        <div className="xl:px-40 xl:py-10">
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gElfIo6uw4g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-4 lg:gap-6 xl:gap-11 text-white items-center justify-center mt-4 md:mt-8 2xl:mt-10">
        <div>
          <h1 className="text-center text-lg md:text-xl font-semibold">
            The top 10 most sacrificed cryptos so far:
          </h1>
          <div className="flex flex-col md:flex-row gap-2 mt-4 justify-center">
            <div className="list-none">
              <li className="mb-1">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={img1} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg ">USD Coin</h1>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-sm md:text-lg ">$8181</h1>
                  </div>
                </div>
              </li>
              <li className="mb-1 ">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={img3} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg ">ETH</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-lg ">$3669</h1>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={img5} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg ">Tether</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-lg ">$1269</h1>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={img7} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg ">HEX</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-lg ">$801</h1>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={img9} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg ">Dai</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-lg ">$8184.10</h1>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={img11} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg ">
                        Founder Seed Investment
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-lg ml-10">$37000 </h1>
                  </div>
                </div>
              </li>
            </div>
            <div className="list-none">
              <li className="mb-1">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={img2} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg ">Hedron</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-lg ">$0</h1>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={dedco} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg ">Dodeca</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-lg ">$0</h1>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={polygn} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg">Polygon</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-lg ">$0</h1>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={img8} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg ">Shiba Inu</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-lg ">$0</h1>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div className=" font-semibold flex justify-between border border-[#22262e]  hover:opacity-70 cursor-pointer duration-300 rounded-xl py-4 px-2 items-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={img10} alt="" srcSet="" />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-lg ">Wrapped Coin</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-lg ml-28">$8184.10</h1>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
        {/* 2nd Box */}
        <div className="flex flex-col rounded-xl  py-6 px-3 bg-[#13161b] opacity-95">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-center">
              Totol Sacrifices in USD so <br /> far
            </h1>
          </div>
          <div className="p-4 bg-[#0d0f15] rounded-2xl my-2 cursor-pointer md:mt-6 xl:mt-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold fancy-text text-center ">
              $51836.79
            </h1>
          </div>
          <div className="mb-4 md:mb-9">
            <p
              className="text-sm lg:text-base
             font-semibold text-center">
              This is an estimate and only includes <br /> Sacrifices on the
              Ethereum chain.
            </p>
          </div>

          <div
            className="gradient-bordersrch pl-2 pr-1 py-1 flex items-center justify-between mb-6"
            id="boxsrch">
            <div>
              <h1 className="text-sm md:text-lg font-normal">
                asasnklasdkalsdk
              </h1>
            </div>
            <div>
              <Image src={Doc_ico} alt="" />
            </div>
          </div>

          <div className="mt-9 xl:mt-16">
            <button className="btn md:text-lg px-6 py-1 my-3 md:my-0 rounded-full w-full">
              Check accepted coin
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
