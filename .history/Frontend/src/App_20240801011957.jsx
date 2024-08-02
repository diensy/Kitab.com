import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Course from "./Courses/Course";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
      </Routes>
    </>
  );
};

export default App;
