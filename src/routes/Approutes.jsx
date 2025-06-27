import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Applayout from "../Layout/Applayout";


const Loader = lazy(()=> import("../components/Loader"))
const Home = lazy(() => import("../pages/Home"));
const Wildlife = lazy(() => import("../pages/Wildlife"));
const Join = lazy(() => import("../pages/Join"));
const Program = lazy(() => import("../pages/Program"));
const Programdt = lazy(() => import("../pages/Programdt"));
const Contact = lazy(() => import("../pages/Contact"));
const Blog = lazy(() => import("../pages/Blog"));

const Approutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Home />} />
          <Route path="Wildlife" element={<Wildlife />} />
          <Route path="JoinUs" element={<Join />} />
          <Route path="Program" element={<Program />} />
          <Route path="program/:id" element={<Programdt />} />
          <Route path="ContactUs" element={<Contact />} />
          <Route path="Blog" element={<Blog />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Approutes;
