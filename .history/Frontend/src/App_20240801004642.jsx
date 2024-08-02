import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
