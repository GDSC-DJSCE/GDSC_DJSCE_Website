import { useState, useEffect } from "react";
import Footer from "./components/home/Footer"
import Navbar from "./components/home/Navbar"
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import GalleryPage from './pages/GalleryPage';
import Team from "./pages/Team";
import Loader from "./components/loader/Loader";
import ContactUs from "./pages/ContactUs";

export default function RouterMain() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      <div className="block bg-App-bg bg-no-repeat bg-fixed overflow-auto bg-cover">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<AboutUs />} />
              <Route path="/events" element={<Events />} />
              {/* <Route path="/gallery" element={<Gallery />} /> */}
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  )
}