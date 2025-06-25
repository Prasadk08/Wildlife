import React from "react";
import "../styles/home.css"; // Assuming you have a CSS file for styling
import { ImagesSliderDemo } from "../components/importedUi/ImagesSliderDemo"; // Adjust the import path as necessary
import { AuroraBackgroundDemo } from "../components/importedUi/AuroraBackgroundDemo";

const Home = () => {
  return (
    <>
      <div className="hmtop h-screen">
        <ImagesSliderDemo />
      </div>
      <div className="homd w-screen h-[40rem] flex items-center justify-center">
        <AuroraBackgroundDemo />
      </div>
    </>
  );
};

export default Home;
