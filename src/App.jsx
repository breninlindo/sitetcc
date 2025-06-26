import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Component2 from "./components/component2";
import Component3 from "./components/component3";
import Component4 from "./components/component4";
import Component5 from "./components/component5";
import Component6 from "./components/component6";
import Subfooter from "./components/subfooter";
import Footer from "./components/footer";
import Politicas from "./components2/politicas";
import Footer2 from "./components2/footer2";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Component2 />
              <Component3 />
              <Component4 />
              <Component5 />
              <Component6 />
              <Subfooter />
              <Footer />
            </>
          }
        />
        <Route 
          path="/politicas" 
          element={
            <>
              <Politicas />
              <Footer2 />

            </>
          } />
      </Routes>
    </Router>
  );
}

export default App;
