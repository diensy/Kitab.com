import React from "react";
import Navbar from "../Components/Navbar";
import Course from "../Components/Course";
import Footer from "../Footer";

const Courses = () => {
  return (
    <>
      <div className="min-h-screen  dark:bg-slate-950 dark:text-white ">
        <br />
        <br />
        <Navbar />
        <Course />
        <Footer />
      </div>
    </>
  );
};

export default Courses;
