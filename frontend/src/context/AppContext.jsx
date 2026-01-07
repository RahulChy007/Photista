// src/context/AppContext.js
import { createContext, useState } from "react";
import { photographers } from "../assets/assets";
import { eventAssets } from "../assets/eventAssets";  // ✅ import the whole object

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₹";

  // ✅ Minimum booking fee from eventAssets
  const minimumBookingFee = eventAssets.minimumBookingFee;

  // ✅ Store user event bookings (persisted in localStorage)
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Function to add a booking
  const addBooking = (newBooking) => {
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("appointments", JSON.stringify(updatedBookings));
  };




  
  const value = {
    // Photographers Data
    photographers,
    currencySymbol,

    // Event Booking Data
    eventCategories: eventAssets.eventCategories,
    minimumBookingFee,

    // Bookings
    bookings,
    addBooking,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
