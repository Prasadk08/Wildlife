import React from "react";
import { Route, Routes } from "react-router";
import Applayout from "../Layout/Applayout";
import Home from "../pages/Home";
import Wildlife from "../pages/Wildlife";

import Join from "../pages/Join";
import Program from "../pages/Program"; 
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Programdt from "../pages/Programdt";


const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Home />} />
          <Route path="Wildlife" element={<Wildlife />} />
          <Route path="JoinUs" element={<Join />} />
          <Route path="Program" element={<Program />}/>
          <Route path="program/:id" element={<Programdt />}/>
          <Route path="ContactUs" element={<Contact />} />
          <Route path="Blog" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Approutes;
