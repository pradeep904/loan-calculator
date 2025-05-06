import React from 'react'
import Navbar from "./Navbar";
import { Routes,Route } from "react-router";
import ExchangeRate from "../pages/ExchangeRate"
import Home from "../pages/Home";
import About from "../pages/About"
import ErrorPage from "../pages/ErrorPage"

const LandingPage = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/exchangerate" element={<ExchangeRate/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/errorpg" element={<ErrorPage/>} />
        </Routes>

    </>
  )
}

export default LandingPage