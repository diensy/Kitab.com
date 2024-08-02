import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom"; 
import Courses from "./Courses/Courses";
const App = () => {
  return (
    <>
    div
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
      </Routes>
    </>
  );
};

export default App;
