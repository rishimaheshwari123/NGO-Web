import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import { Admin } from "./components/Admin/Layout";
import Login from "./components/Admin/pages/Login";
import Dashboard from "./components/Admin/pages/Dashboard";
import CreateEvent from "./components/Admin/pages/CreateEvent";
import GetAllEvents from "./components/Admin/pages/GetAllEvents";
import Events from "./pages/Events";
import CreateOrganizationData from "./components/Admin/pages/excel/CreateOrganizationData";
import GetOrganization from "./components/Admin/pages/excel/GetOrganization";
import ScrollToTop from "./components/ScrollToTop";
import Whatsapp from "./components/Whatsapp";
import Popup from "./components/Popup";
import Donet from "./pages/Donet";
import Highlight from "./pages/HighLight";
import { useSelector } from "react-redux";
import Product from "./pages/Product";
import CreateGallery from "./components/Admin/pages/CreateGallery";
// import CreateCulture from "./components/Admin/pages/CreateCulture";
// import GetAllCulture from "./components/Admin/pages/GetAllCulture";

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsPopupVisible(true);
  }, []);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <>
      <div>
        <Popup isVisible={isPopupVisible} onClose={handleClosePopup} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donet />} />
          <Route path="/highlight" element={<Highlight />} />
          <Route path="/product" element={<Product />} />

          <Route path="/admin" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addEvent" element={<CreateEvent />} />
            <Route path="getEvents" element={<GetAllEvents />} />
            <Route path="gallery" element={<CreateGallery />} />
            {/* <Route path="createCulture" element={<CreateCulture />} />
            <Route path="getCulture" element={<GetAllCulture />} /> */}
            <Route
              path="createOrganizationData"
              element={<CreateOrganizationData />}
            />
            <Route path="getOrganizationData" element={<GetOrganization />} />
          </Route>
        </Routes>
        {!token && <Whatsapp />}
        <ScrollToTop />
      </div>
    </>
  );
};

export default App;
