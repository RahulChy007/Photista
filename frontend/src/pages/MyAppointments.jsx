import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppointmentContext } from "../context/AppointmentContext";

const MyAppointments = () => {
  const { appointments } = useContext(AppointmentContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 sm:px-8 lg:px-16 py-8"
    >
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        My Appointments
      </h1>

      {appointments.length === 0 ? (
        <p className="text-gray-600">
          You haven't booked any appointments yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((appointment) => (
            <motion.div
              key={appointment.id}
              whileHover={{ scale: 1.02 }}
              className="border border-gray-300 rounded-2xl p-6 bg-white shadow-md"
            >
              {/* Photographer Info */}
              <div className="flex items-center gap-4">
                <img
                  src={appointment.photographer.image}
                  alt={appointment.photographer.name}
                  className="w-20 h-20 object-cover rounded-xl shadow-md"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {appointment.photographer.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {appointment.photographer.speciality}
                  </p>
                </div>
              </div>

              {/* Booking Info */}
              <div className="mt-4 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Date:</span>{" "}
                  {appointment.client.date}
                </p>
                <p>
                  <span className="font-medium">Time:</span>{" "}
                  {appointment.client.time}
                </p>
                <p>
                  <span className="font-medium">Client:</span>{" "}
                  {appointment.client.name}
                </p>
                <p>
                  <span className="font-medium">Notes:</span>{" "}
                  {appointment.client.notes || "N/A"}
                </p>
              </div>

              {/* Equipments */}
              <div className="mt-4">
                <p className="font-medium text-gray-800">
                  Selected Equipments:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                  {appointment.selectedEquipments.length > 0 ? (
                    appointment.selectedEquipments.map((eq, i) => (
                      <li key={i}>
                        {eq.name} – ₹{eq.price}
                      </li>
                    ))
                  ) : (
                    <li>No extra equipment selected</li>
                  )}
                </ul>
              </div>

              {/* Total Price */}
              <p className="mt-4 text-gray-900 font-semibold">
                Total Price: ₹{appointment.totalPrice}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default MyAppointments;
