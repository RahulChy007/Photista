// src/pages/MyEventBookings.jsx
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { EventBookingContext } from "../context/EventBookingContext";
import { AppContext } from "../context/AppContext";

const MyEventBookings = () => {
  const { eventBookings } = useContext(EventBookingContext);
  const { currencySymbol } = useContext(AppContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        📅 My Event Bookings
      </h1>

      {eventBookings.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 text-lg"
        >
          No events booked yet
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventBookings.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="border rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">
                {event.eventName}
              </h2>

              <p className="text-gray-600">
                🎯 {event.eventType?.name}
              </p>

              <p className="text-gray-600">
                📍 {event.eventLocation}
              </p>

              <p className="text-gray-600">
                📅 {event.eventDate}
              </p>

              <p className="mt-2 font-medium text-sm">
                Photographers:
              </p>
              <p className="text-sm text-gray-600">
                {event.photographers.map((p) => p.name).join(", ")}
              </p>

              <p className="mt-2 font-bold text-primary">
                Total Price: {currencySymbol}
                {event.totalPrice}
              </p>

              <p className="mt-1 text-xs text-green-600">
                ✅ {event.bookingStatus}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEventBookings;
