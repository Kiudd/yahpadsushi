import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="app-background">
      <Header />

      <main className="main-content"></main>

      <Footer />
    </div>
  );
}
export default App;
