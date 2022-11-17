import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const AirDrop = () => {
  const [verified, setVerified] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  return (
    <>
      <section className="text-white py-24 opacity-95">
        <div className="opacity-95">
          <h1 className="text-xl font-semibold md:text-3xl text-center xl:text-4xl">
            <span className="fancy-text font-bold">$HPX</span> Air Drop
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-3 xl:gap-12 mt-6">
            <div className="border border-stone-700 p-4 rounded-xl flex flex-col  items-center">
              <h1 className="text-xl font-semibold mb-4">
                Add Wallet Address{" "}
              </h1>
              <div className="gi mb-6 " id="boxi">
                <div>
                  <input
                    className="text-sm px font-normal px-2 py-2 w-56 md:w-[100%] outline-none text-stone-300 bg-neutral-800 rounded-full border-none"
                    placeholder="Wallet Address ox..."
                  />
                </div>
              </div>

              <div className="my-4 px-8 overflow-hidden">
                <ReCAPTCHA
                  className="g"
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                />
              </div>
              <div>
                <button
                  className="btn px-6 py-3 my-3 md:my-0 rounded-full inline-block"
                  disabled={!verified}>
                  Send
                </button>
              </div>
              <div>
                <p className="text-center text-lg ">
                  We only need your public Ethereum wallet address, so there is
                  no <br /> way you can get your wallet hacked.
                </p>
              </div>
            </div>

            <div className="">
              <h1 className="text-xl font-semibold lg:text-2xl">
                How the Hpx air drop work.?
              </h1>
              <p className="text-sm font-normal my-3 opacity-70">
                If you provided your address above and you own or have
                sacrificed one of these projects, you will receive a $Hpx when
                the Pulse Chain main network goes live. Selected projects: Hex,
                Pulsechain Hedron Maxi PulseX Phiat LiquidLoans Icosa Hurricash
              </p>
              <div>
                <h1 className="text-xl font-semibold lg:text-2xl">
                  How many $Hpx will i receive
                </h1>
                <p className="text-sm font-normal my-3 opacity-70">
                  Value of dollar will of mentioned project 5*55 = number $Hpx
                  airdropped
                </p>
              </div>
              <div>
                <h1 className="text-xl font-semibold lg:text-2xl">
                  If my coins from the mentioned projects are staked, will my
                  wallet be credited with $Hpx??
                </h1>
                <p className="text-sm font-normal my-3 opacity-70">No</p>
              </div>
              <div>
                <h1 className="text-xl font-semibold lg:text-2xl">
                  When will your snapshot take place?
                </h1>
                <p className="text-sm font-normal my-3 opacity-70">
                  Once our sacrifice phase will end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AirDrop;
