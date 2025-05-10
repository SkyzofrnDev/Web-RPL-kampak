import { useState } from "react";

import "./App.css";
import { Footer, Navbar } from "./components/Index";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
