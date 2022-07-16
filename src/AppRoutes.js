import React from "react";
import { Routes, Route } from "react-router-dom";
import { Index } from "./Pages/Index";
import { Post } from "./Pages/Post";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="post/:id" element={<Post />} />
    </Routes>
  );
};
