import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";
import Follow from "./pages/Follow";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import LatestNews from "./pages/LatestNews";
import Notice from "./pages/Notice";
import Program from "./pages/Program";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  const location = useLocation();
  if (location.pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Enroll" element={<Enroll />} />
        <Route path="/Follow" element={<Follow />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Latest" element={<LatestNews />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/Program" element={<Program />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
