import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
      </Routes>
        <Route path="/" element={<Home />} />
    </>
  );
};

export default App;
