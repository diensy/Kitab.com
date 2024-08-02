import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold">
            Hello,Welcomes here to learn something
            <span className="text-pink-600 "> new everyday !!!</span>
          </h1>
          <p>
            “We are of opinion that instead of letting books grow moldy behind
            an iron grating, far from the vulgar gaze, it is better to let them
            wear out by being read.”
          </p>
        </div>
        <div className="w-full md:w-1/2">Right</div>
      </div>
    </>
  );
};

export default Banner;
