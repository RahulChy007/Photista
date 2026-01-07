import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { AppointmentContext } from "../context/AppointmentContext";
import { motion } from "framer-motion";

const Booking = () => {
  const { pId } = useParams();
  const { photographers, currencySymbol, addBooking } = useContext(AppContext);
  const navigate = useNavigate();
 
  const photographer = photographers.find((p) => p._id === pId);

  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  if (!photographer) {
    return (
      <p className="text-center mt-10 text-red-500">Photographer not found.</p>
    );
  }

  // ✅ handle equipment selection
  const handleEquipmentChange = (eq) => {
    setSelectedEquipments((prev) =>
      prev.includes(eq) ? prev.filter((e) => e !== eq) : [...prev, eq]
    );
  };

  // ✅ calculate total price
  const totalPrice =
    photographer.basePrice +
    selectedEquipments.reduce(
      (sum, eq) => sum + photographer.equipments[eq],
      0
    );

  // ✅ handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const { addAppointment } = useContext(AppointmentContext);


  // // ✅ payment + booking
  // const handlePayment = (e) => {
  //   e.preventDefault();

  //   const bookingData = {
  //     photographer,
  //     client: formData,
  //     selectedEquipments: selectedEquipments.map((eq) => ({
  //       name: eq,
  //       price: photographer.equipments[eq],
  //     })),
  //     totalPrice,
  //   };

  //   const options = {
  //     key: "rzp_test_1234567890", // 🔑 replace with your real Razorpay key
  //     amount: totalPrice * 100, // paise
  //     currency: "INR",
  //     name: "Photista",
  //     description: "Photographer Booking Payment",
  //     handler: function (response) {
  //       alert("Payment Successful ✅ ID: " + response.razorpay_payment_id);

  //       const confirmedBooking = {
  //         ...bookingData,
  //         paymentId: response.razorpay_payment_id,
  //         paymentStatus: "Paid",
  //       };

  //       // Save to localStorage
  //       const existing = JSON.parse(localStorage.getItem("appointments")) || [];
  //       existing.push(confirmedBooking);
  //       localStorage.setItem("appointments", JSON.stringify(existing));

  //       console.log("📌 Final Booking Object:", confirmedBooking);

  //       navigate("/my-appointments");
  //     },
  //     prefill: {
  //       name: formData.name,
  //       email: formData.email,
  //     },
  //     theme: {
  //       color: "#5f6FFF",
  //     },
  //   };

  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };

  const handleBookingConfirm = (e) => {
  e.preventDefault();

  const appointment = {
    id: Date.now(),
    photographer: {
      id: photographer._id,
      name: photographer.name,
      image: photographer.image,
      speciality: photographer.speciality,
    },
    client: formData,
    selectedEquipments: selectedEquipments.map((eq) => ({
      name: eq,
      price: photographer.equipments[eq],
    })),
    totalPrice,
    bookingDate: new Date().toISOString(),
    bookingStatus: "Confirmed",
  };

  addAppointment(appointment); // ✅ USE CONTEXT

  alert("Appointment Confirmed ✅");

  navigate("/my-appointments"); // ✅ ABSOLUTE PATH
};



  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-4">
        Booking with {photographer.name}
      </h2>

      {/* Photographer Info */}
      <motion.div
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img
          src={photographer.image}
          alt={photographer.name}
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div>
          <p className="text-lg font-medium">{photographer.speciality}</p>
          <p className="text-gray-500">{photographer.experience}</p>
        </div>
      </motion.div>

      {/* Booking Form */}
      <form className="flex flex-col gap-4" onSubmit={handleBookingConfirm}>
        <label className="flex flex-col">
          <span className="text-sm font-medium">Your Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-md p-2"
            placeholder="Enter your name"
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Your Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md p-2"
            placeholder="Enter your email"
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Select Date</span>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border rounded-md p-2"
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Select Time</span>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border rounded-md p-2"
            required
          />
        </label>

        {/* ✅ Equipment checkboxes */}
        <div>
          <span className="text-sm font-medium">Add Equipments</span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {Object.entries(photographer.equipments).map(([eq, price]) => (
              <label
                key={eq}
                className="flex items-center gap-2 border rounded-md p-2 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={selectedEquipments.includes(eq)}
                  onChange={() => handleEquipmentChange(eq)}
                />
                <span className="text-sm">
                  {eq} (+{currencySymbol}
                  {price})
                </span>
              </label>
            ))}
          </div>
        </div>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Additional Notes</span>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="border rounded-md p-2"
            placeholder="Any special requests?"
            rows="3"
          ></textarea>
        </label>

        {/* ✅ Total Price */}
        <p className="text-lg font-semibold mt-2">
          Total Price: {currencySymbol} {totalPrice}
        </p>

        <motion.button
          type="submit"
          className="bg-primary text-white py-2 rounded-lg hover:bg-primary/80 transition"
          whileTap={{ scale: 0.95 }}
        >
          Confirm Booking
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Booking;
