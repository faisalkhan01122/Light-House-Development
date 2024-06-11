import React from "react";

import Cards from "./Card";

const PriceingPlans = () => {
  return (
    <>
      <div className="container my-20">
        <div className="flex   flex-col pt-20 gap-5 items-center">
          <h1 className="text-5xl font-bold  ">Pricing Plans</h1>
          <p className="text-center opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore <br />
            magna aliqua.
          </p>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default PriceingPlans;
