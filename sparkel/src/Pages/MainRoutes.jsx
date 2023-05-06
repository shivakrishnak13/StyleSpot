import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Admin from "./Admin";
import Login from "./Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/collection" element={<HomePage />} />
      <Route path="/blog" element={<HomePage />} />
      <Route path="/fashion" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
