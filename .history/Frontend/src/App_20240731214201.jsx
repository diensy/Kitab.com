import React from "react";
import Navbar from "./Components/Navbar";
import Banners from "./Components/Banner";
import Footer from "./Footer";
import Freebook from "./Components/Freebook";
import FreeBook_Section from "./Components/FreeBook_Section";
import Card from "./card";
const App = () => {
  return (
    <>
      <Navbar />
      <Banners />
      <Freebook />
      <FreeBook_Section />
      <Card/>
      <Footer />
    </>
  );
};

export default App;
