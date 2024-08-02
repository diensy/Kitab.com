import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import FreeBook_Section from "../Components/FreeBook_Section";
import Footer from "../Footer";
const Home = () => {
  return (
    <>
      <div className="dark:bg-slate-950 dark:text-white">
        <Navbar />
        <Banner />
        <FreeBook_Section />
        <Footer />
      </div>
    </>
  );
};

export default Home;
