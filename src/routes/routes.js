import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Result from "../pages/Result"

const AppRoutes = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<Result/>} path="/resultado"/>
        </Routes>
      </BrowserRouter>
    ) 
}

export default AppRoutes; 