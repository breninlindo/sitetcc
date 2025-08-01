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
import Info from "./components3/info";

import "./App.css";
import Info2 from "./components3/info2";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/home"
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
          path="/suporte" 
          element={
            <>
              <Politicas />
              <Footer2 />

            </>
          } />
          <Route 
          path="/sobre" 
          element={
            <>
              <Info/>
              <Info2/>
              <Footer2 />

            </>
          } />
      </Routes>
    </Router>
  );
}

export default App;
