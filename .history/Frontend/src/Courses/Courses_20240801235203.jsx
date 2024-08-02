import React from "react";
import Navbar from "../Components/Navbar";
import Course from "../Components/Course";
import Footer from "../Footer";

const Courses = () => {
  return (
    <>
      <div className="min-h-screen ">
        <Navbar />
        <Course />
      </div>
      <Footer />
    </>
  );
};

export default Courses;
