import React from "react";
import Navbar from "../Components/Navbar";
import Course from "../Components/Course";
import Footer from "../Footer";

const Courses = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text">

      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Courses;
