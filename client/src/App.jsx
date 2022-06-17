import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/navbar/Header";

import Home from "pages/Home";
import About from "pages/About";

const App = () => {
  const homeRoute = "client";

  return (
    <>
      <Header homeRoute={homeRoute} />
      <Routes>
        <Route path={`${homeRoute}`} element={<Home />} />
        <Route path={`${homeRoute}/about`} element={<About />} />
      </Routes>
    </>
  );
};

export default App;
