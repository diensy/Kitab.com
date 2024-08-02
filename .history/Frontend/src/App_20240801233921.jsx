import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom"; 
import Courses from "./Courses/Courses";
const App = () => {
  return (
    <>
    <div className="">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
      </Routes>
    </div>
    </>
  );
};

export default App;
