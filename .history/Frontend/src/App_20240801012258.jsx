import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Course from "./Components/Course";
import Courses from "./Courses/Courses";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
      </Routes>
    </>
  );
};

export default App;
