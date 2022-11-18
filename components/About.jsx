import React from "react";

const About = () => {
  return (
    <>
      <section className="text-white py-8 md:py-14 xl:py-28 ">
        <div>
          <h1 className="text-xl font-semibold md:text-2xl xl:text-3xl text-center">
            {" "}
            About HPX{" "}
          </h1>
        </div>
        {/* BOxxxxxxx Parent*/}
        <div className="flex flex-col md:flex-row mt-8 gap-4 md:gap-6 xl:gap-10">
          {/* Child */}
          <div className="flex-1">
            <div>
              <div className="flex gap-3 items-center">
                <div className="bg h-8 w-1"></div>
                <h1 className="text-xl xl:text-2xl ">What is HPX?</h1>
              </div>
              <div>
                <p className="text-sm font-light opacity-70 mt-4">
                  Hpx is a marketplace for NFT trading based on the PulseChain
                  Network. <br /> Make profits from owning $Hpx as one of the
                  shareholders of our venture.
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center mt-4 md:mt-6 xl:mt-8">
                <div className="bg h-8 w-1"></div>
                <h1 className="text-xl xl:text-2xl ">Enrich PulseX holders:</h1>
              </div>
              <div>
                <p className="text-sm font-light opacity-70 mt-4">
                  Hpx will have an auto swap system where users can buy their
                  favorite nft listed for Pulsechain (or pHex, PLSX and USDL){" "}
                  <br /> using our crypto currency, $Hpx and benefit skipping
                  our 2.22% commission.
                </p>
                <p className="text-sm font-light opacity-70 mt-6">
                  If person X decides to put his nft up for sale for 10,000,000
                  PLS person Y will be able to buy it back with our $Hpx token{" "}
                  <br />
                  using 0% commission. The savings on this transaction - 222,222
                  PLS. And will be subject to a commission of 0.29% through the
                  PulseX system
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <div className="flex gap-3 items-center mt-4 md:mt-6 xl:mt-8">
                <div className="bg h-8 w-1"></div>
                <h1 className="text-xl xl:text-2xl ">
                  All Ethereum NFT collection in one place.
                </h1>
              </div>
              <div>
                <p className="text-sm font-light opacity-70 mt-4">
                  All of your favorite NFT collections including BAYC, Crypto
                  Punks, Doodles etc... will be available on Hpx.
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center mt-4 md:mt-6 xl:mt-8">
                <div className="bg h-8 w-1"></div>
                <h1 className="text-xl xl:text-2xl ">
                  Making Pulse chain increase in value and helping it go viral.
                </h1>
              </div>
              <div>
                <p className="text-sm font-light opacity-70 mt-4">
                  Hpx will work like an Index for all nft’s on Pulsechain. Once
                  a nft trade is made thru our platform you will earn yields
                  each time a transaction is made, just like a shareholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
