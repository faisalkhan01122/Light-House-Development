import React from "react";
import TestimonialCarousel from "./Test";

const Testimonails = () => {
  return (
    <>
      <div className="container h-[100vh] bg-[#e0e4e9d1] ">
        <div className="flex h-[90vh] w-full flex-col justify-center gap-5 items-center">
          <h3 className="text-2xl font-semibold">Testimonails</h3>
          <h1 className="text-5xl font-bold">What’s Clients Say</h1>
          <p className=" opacity-50 text-center">
            Credibly grow premier ideas rather than bricks-and-clicks strategic
            theme areas distributed for stand-alone web- <br />
            readiness.
          </p>
        </div>
        <TestimonialCarousel />
      </div>
    </>
  );
};

export default Testimonails;
