import React from "react";
import Home from "./Home/Home";
import {Routes} from "react-router-dom";
const App = () => {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element="{<Home/>}" />
      </Routes>
    </>
  );
};

export default App;
