import React from "react";
import Basket from "./pages/Basket/Basket";

import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Menus from "./pages/Menus/Menus";
import History from "./pages/History/History";
import Order from "./pages/Order/Order";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/histoire" element={<History />} />
            <Route path="/commander" element={<Order />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
