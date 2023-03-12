import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import ResultPage from "../pages/ResultPage"

const AppRoutes = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<ResultPage/>} path="/resultado"/>
        </Routes>
      </BrowserRouter>
    ) 
}

export default AppRoutes; 