import React from "react";
import services from "../assets/service.png";
import { ArrowRight, Check } from "lucide-react";
const WorkingSection = () => {
  return (
    <>
      <div className="container h-[200vh] bg-[#8b0000]">
        <div className="flex flex-col items-center text-center justify-center gap-10 pt-20">
          <h1
            className="text-center text-5xl text-white font-bold
          "
          >
            We Build any Kind Of <br /> Technology
          </h1>
          <p className="text-center text-xl text-white opacity-50">
            Credibly grow premier ideas rather than bricks-and-clicks strategic{" "}
            <br />
            theme areas distributed for stand-alone web-readiness.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center pt-10 text-white font-semibold text-xl">
          <a href="#" className="border-b-2 border-blue-700">
            Web Design
          </a>
          <a href="#" className="hover:text-black">
            App Development
          </a>
          <a href="#" className="hover:text-black">
            UX/UI Designer
          </a>
        </div>
        <section className="grid grid-cols-2 items-center justify-center gap-5 mt-10">
          <div>
            <img src={services} alt="" />
          </div>
          <div className="flex flex-col text-white gap-5">
            <h1 className="text-4xl font-bold">
              We are working with <br />
              15 years experience
            </h1>
            <p className="text-xl opacity-50">
              Continually network effective bandwidth whereas goal-oriented
              schemas. Intrinsicly incentivize corporate synergy with accurate
              task bricks-and-clicks leadership skills.
            </p>
            <div>
              <h2 className="flex text-xl justify-start items-center gap-1">
                <Check /> Digital Conference
              </h2>
              <h2 className="flex  text-xl justify-start items-center gap-2">
                <Check /> Great Speak
              </h2>
              <h2 className="flex text-xl justify-start items-center gap-2">
                <Check />
                Event Management
              </h2>
            </div>
            <div className="text-xl flex items-center">
              <h1>Know More About Us </h1>
              <ArrowRight />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkingSection;
