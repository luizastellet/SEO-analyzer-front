import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import ResultPage from "../pages/ResultPage"
import Informacoes from "../pages/Informacoes"

const AppRoutes = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<ResultPage/>} path="/resultado"/>
          <Route element={<Informacoes/>} path="/informacoes"/>
        </Routes>
      </BrowserRouter>
    ) 
}

export default AppRoutes; 