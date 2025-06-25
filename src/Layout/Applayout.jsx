import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const Applayout = () => {
  const styles={
    marginTop: "64px",
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow" style={styles}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Applayout;

