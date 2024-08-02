import React from "react";
import list from "../../public/list.json";
import Card from "../Components"
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" mt-28 items-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="mt-10">
            Reading is a very good habit that one needs to develop in life. Good
            books can inform you, enlighten you and lead you in the right
            direction. There is no better companion than a good book. Reading is
            important because it is good for your overall well-being. Once you
            start reading, you experience a whole new world. When you start
            loving the habit of reading you eventually get addicted to it.
            Reading develops language skills and vocabulary. Reading books is
            also a way to relax and reduce stress. It is important to read a
            good book at least for a few minutes each day to stretch the brain
            muscles for healthy functioning.
          </p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
        </div>
        <div>
          {
            list.map((item)=>{
              <Card key={item.id} item={item}/>
            })
          }
        </div>
      </div>
    </>
  );
};

export default Course;
