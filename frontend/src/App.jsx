import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Photographers from "./pages/Photographers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import Gallery from "./pages/Gallery";
import AuthUser from "./pages/AuthUser";
import AuthAdmin from "./pages/AuthAdmin";
import EventBooking from "./pages/EventBooking";
import MyEventBookings from "./pages/MyEventBookings";

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-page pb-16 pt-6 sm:pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photographers" element={<Photographers />} />
          <Route path="/photographers/:speciality" element={<Photographers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/appointments/:pId" element={<Appointments />} />
          <Route path="/appointments/:pId/booking" element={<Booking />} />
          <Route path="/appointments/:pId/gallery" element={<Gallery />} />
          <Route path="/auth" element={<AuthUser />} />
          <Route path="/admin-auth" element={<AuthAdmin />} />
          <Route path="/event-booking" element={<EventBooking />} />
          <Route path="/my-event-bookings" element={<MyEventBookings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
