import React from "react";
import Navbar from "../Components/Navbar";
import Course from "../Components/Course";
import Footer from "../Footer";
import list from "../../public/list.json"
const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
};

export default Courses;
