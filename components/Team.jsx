/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import img1 from "../Images/1st.png";
import img2 from "../Images/2nd.png";
import img3 from "../Images/3rd.png";
import img4 from "../Images/4.png";
import img5 from "../Images/5th.png";
import img6 from "../Images/6th.png";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Team = () => {
  return (
    <>
      <section className="text-white pt-8 xl:pt-16 2xl:pt-24">
        <h1 className="text-xl md:text-2xl xl:text-3xl text-center  font-semibold ">
          Meet Our Team
        </h1>
        {/* Boxxxxxxxxxxxxxxxxxxxxxxxxxxx Parent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-10 2xl:gap-14 mt-16">
          {/* Child */}
          <div className="flex flex-col bg-[#333333]  rounded-2xl items-center mt-14">
            <div>
              <Image src={img2} className="-mt-20" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium my-3">
                Beniamin Mincu
              </h1>
            </div>
            <div>
              <p className="text-base font-normal text-stone-300">
                {" "}
                Backend Developer{" "}
              </p>
            </div>
            {/* Icoooooooo */}
            <div className="flex gap-6 mt-6 items-center pb-6">
              <div>
                {" "}
                <BsTwitter className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <BsLinkedin className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <RiInstagramFill className="text-2xl" />{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#333333]  rounded-2xl items-center mt-20 sm:mt-14">
            <div>
              <Image src={img1} className="-mt-20" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium my-3">
                Beniamin Mincu
              </h1>
            </div>
            <div>
              <p className="text-base font-normal text-stone-300">
                {" "}
                Founder Chairman{" "}
              </p>
            </div>
            {/* Icoooooooo */}
            <div className="flex gap-6 mt-6 items-center pb-6">
              <div>
                {" "}
                <BsTwitter className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <BsLinkedin className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <RiInstagramFill className="text-2xl" />{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#333333]  rounded-2xl items-center mt-20 sm:mt-14">
            <div>
              <Image src={img3} className="-mt-16" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium my-3">
                Lucian Todea
              </h1>
            </div>
            <div>
              <p className="text-base font-normal text-stone-300">
                {" "}
                Febrit CEO{" "}
              </p>
            </div>
            {/* Icoooooooo */}
            <div className="flex gap-6 mt-6 items-center pb-6">
              <div>
                {" "}
                <BsTwitter className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <BsLinkedin className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <RiInstagramFill className="text-2xl" />{" "}
              </div>
            </div>
          </div>
        </div>
        {/* Parent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-10 2xl:gap-14 mt-16 pb-16 xl:pb-24">
          {/* Child */}
          <div className="flex flex-col bg-[#333333]  rounded-2xl items-center mt-14">
            <div>
              <Image src={img5} className="-mt-16" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium my-3">
                Beniamin Mincu
              </h1>
            </div>
            <div>
              <p className="text-base font-normal text-stone-300">
                {" "}
                Backend Developer{" "}
              </p>
            </div>
            {/* Icoooooooo */}
            <div className="flex gap-6 mt-6 items-center pb-6">
              <div>
                {" "}
                <BsTwitter className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <BsLinkedin className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <RiInstagramFill className="text-2xl" />{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#333333]  rounded-2xl items-center mt-20 sm:mt-14">
            <div>
              <Image src={img6} className="-mt-20" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium my-3">
                Lucian Mincu
              </h1>
            </div>
            <div>
              <p className="text-base font-normal text-stone-300">
                {" "}
                Febrit CEO{" "}
              </p>
            </div>
            {/* Icoooooooo */}
            <div className="flex gap-6 mt-6 items-center pb-6">
              <div>
                {" "}
                <BsTwitter className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <BsLinkedin className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <RiInstagramFill className="text-2xl" />{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#333333]  rounded-2xl items-center mt-20 sm:mt-14">
            <div>
              <Image src={img4} className="-mt-16" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium my-3">
                Radu Chis
              </h1>
            </div>
            <div>
              <p className="text-base font-normal text-stone-300">
                {" "}
                Graphic Designer{" "}
              </p>
            </div>
            {/* Icoooooooo */}
            <div className="flex gap-6 mt-6 items-center pb-6">
              <div>
                {" "}
                <BsTwitter className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <BsLinkedin className="text-xl" />{" "}
              </div>
              <div>
                {" "}
                <RiInstagramFill className="text-2xl" />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
