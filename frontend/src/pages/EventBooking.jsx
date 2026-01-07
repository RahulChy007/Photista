// src/pages/EventBooking.jsx
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { EventBookingContext } from "../context/EventBookingContext";

const EventBooking = () => {
  const { photographers, minimumBookingFee, currencySymbol, eventCategories } =
    useContext(AppContext);

  const { addEventBooking } = useContext(EventBookingContext);

  const [selectedPhotographers, setSelectedPhotographers] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigate = useNavigate();

  // Toggle photographer selection
  const togglePhotographer = (_id) => {
    setSelectedPhotographers((prev) =>
      prev.includes(_id) ? prev.filter((p) => p !== _id) : [...prev, _id]
    );
  };

  //Price calculation 
  const calculatePrice = () => {
    let total = 0;

    // 1️⃣ Add platform minimum booking fee
    total += minimumBookingFee;

    // 2️⃣ Add selected event base price
    if (selectedEvent?.basePrice) {
      total += selectedEvent.basePrice;
    }

    // 3️⃣ Add base price of each selected photographer
    selectedPhotographers.forEach((_id) => {
      const photographer = photographers.find((p) => p._id === _id);
      if (photographer?.basePrice) {
        total += photographer.basePrice;
      }
    });

    return total;
  };

  // ✅ FINAL SUBMIT HANDLER (NO PAYMENT)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedEvent) {
      alert("⚠️ Please select an event type.");
      return;
    }

    const bookingData = {
      id: Date.now(),
      eventName,
      eventDate,
      eventLocation,
      eventType: selectedEvent,
      photographers: selectedPhotographers.map((_id) =>
        photographers.find((p) => p._id === _id)
      ),
      totalPrice: calculatePrice(),
      bookingStatus: "Confirmed",
      createdAt: new Date().toISOString(),
    };

    addEventBooking(bookingData); // ✅ CONTEXT SAVE

    alert("🎉 Event Booking Confirmed!");
    navigate("/my-event-bookings");
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        🎉 Book Your Event
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Event Name"
            className="w-full border p-3 rounded-lg"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
          <input
            type="date"
            className="w-full border p-3 rounded-lg"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>

        <input
          type="text"
          placeholder="Event Location"
          className="w-full border p-3 rounded-lg"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          required
        />

        {/* Event Type */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Select Event Type:</h2>
          <select
            className="w-full border p-3 rounded-lg"
            value={selectedEvent ? selectedEvent.id : ""}
            onChange={(e) => {
              const ev = eventCategories.find(
                (cat) => cat.id === Number(e.target.value)
              );
              setSelectedEvent(ev || null);
            }}
            required
          >
            <option value="">-- Select Event Type --</option>
            {eventCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Select Photographers */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Choose Photographers:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photographers.map((p) => {
              const isSelected = selectedPhotographers.includes(p._id);
              return (
                <motion.div
                  key={p._id}
                  whileHover={{ scale: 1.03 }}
                  className={`border p-3 rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${
                    isSelected ? "bg-primary text-white" : "bg-gray-100"
                  }`}
                  onClick={() => togglePhotographer(p._id)}
                >
                  <div
                    className="flex items-center gap-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/appointments/${p._id}`);
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="font-medium">{p.name}</span>
                  </div>

                  <div className="ml-auto">
                    {isSelected ? (
                      <span className="px-2 py-1 text-xs rounded bg-white text-primary">
                        Selected
                      </span>
                    ) : (
                      <span className="text-xs text-gray-600">Select</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pricing */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <p>
            Minimum Booking Fee:{" "}
            <strong>
              {currencySymbol}
              {minimumBookingFee}
            </strong>
          </p>
          <p className="font-bold text-lg mt-2">
            Total Price: {currencySymbol}
            {calculatePrice()}
          </p>
        </div>

        {/* Submit */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition text-lg font-medium"
          disabled={selectedPhotographers.length === 0 || !selectedEvent}
        >
          Confirm Event Booking
        </motion.button>
      </form>
    </motion.div>
  );
};

export default EventBooking;
