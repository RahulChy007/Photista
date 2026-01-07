import { createContext, useState } from "react";
import { eventAssets } from "../assets/eventAssets";

export const EventBookingContext = createContext();

const EventBookingProvider = ({ children }) => {
  const minimumBookingFee = eventAssets.minimumBookingFee;

  const [eventBookings, setEventBookings] = useState(() => {
    const saved = localStorage.getItem("eventBookings");
    return saved ? JSON.parse(saved) : [];
  });

  const addEventBooking = (booking) => {
    const updated = [...eventBookings, booking];
    setEventBookings(updated);
    localStorage.setItem("eventBookings", JSON.stringify(updated));
  };

  return (
    <EventBookingContext.Provider
      value={{
        eventBookings,
        addEventBooking,
        minimumBookingFee,
        eventCategories: eventAssets.eventCategories,
      }}
    >
      {children}
    </EventBookingContext.Provider>
  );
};

export default EventBookingProvider;
