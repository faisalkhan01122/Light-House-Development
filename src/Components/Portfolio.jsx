import React from "react";
import Pic1 from "../assets/pic1.png";
import Pic2 from "../assets/pic2.png";
const Portfolio = () => {
  return (
    <div className=" container bg-[#e0e4e9d1]">
      <div className="pt-20 pb-20 flex flex-col justify-center gap-5 ">
        <h1 className="text-5xl font-bold text-center">Our Portfolio</h1>
        <p className="opacity-50 text-center">
          Credibly grow premier ideas rather than bricks-and-clicks strategic
          theme areas distributed for stand-alone web- <br />
          readiness.
        </p>
      </div>
      <section className="">
        <div className="flex justify-center items-center text-xl font-semibold gap-16 ">
          <button className="btn">All</button>
          <button className="">Branding</button>
          <button className="">Design</button>
          <button className="">Logo</button>
          <button className=" ">Web</button>
        </div>

        <div className="grid grid-cols-3  gap-5 pt-20  ">
          <img
            className="rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover: duration-500 ..."
            src={Pic1}
            alt=""
          />
          <img
            className="rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover: duration-500 ..."
            src={Pic2}
            alt=""
          />
          <img
            className="rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover: duration-500 ..."
            src={Pic2}
            alt=""
          />
          <img
            className="rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover: duration-500 ..."
            src={Pic2}
            alt=""
          />
          <img
            className="rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover: duration-500 ..."
            src={Pic2}
            alt=""
          />
          <img
            className="rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover: duration-500 ..."
            src={Pic2}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
