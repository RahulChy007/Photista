import React, { useContext, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { AppointmentContext } from "../context/AppointmentContext";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const Booking = () => {
  const { pId } = useParams();
  const { photographers, currencySymbol } = useContext(AppContext);
  const { addAppointment } = useContext(AppointmentContext);
  const navigate = useNavigate();

  const photographer = photographers.find((item) => item._id === pId);
  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const totalPrice = useMemo(
    () =>
      photographer
        ? photographer.basePrice +
          selectedEquipments.reduce(
            (sum, equipment) => sum + photographer.equipments[equipment],
            0
          )
        : 0,
    [photographer, selectedEquipments]
  );

  if (!photographer) {
    return (
      <div className="app-surface rounded-[32px] px-6 py-10 text-center text-slate-600">
        Photographer not found.
      </div>
    );
  }

  const handleEquipmentChange = (equipment) => {
    setSelectedEquipments((previous) =>
      previous.includes(equipment)
        ? previous.filter((item) => item !== equipment)
        : [...previous, equipment]
    );
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleBookingConfirm = (event) => {
    event.preventDefault();

    const appointment = {
      id: Date.now(),
      photographer: {
        id: photographer._id,
        name: photographer.name,
        image: photographer.image,
        speciality: photographer.speciality,
      },
      client: formData,
      selectedEquipments: selectedEquipments.map((equipment) => ({
        name: equipment,
        price: photographer.equipments[equipment],
      })),
      totalPrice,
      bookingDate: new Date().toISOString(),
      bookingStatus: "Confirmed",
    };

    addAppointment(appointment);
    window.alert("Appointment confirmed.");
    navigate("/my-appointments");
  };

  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Confirm booking"
        title={`Book ${photographer.name}`}
        description="This flow now follows the app more closely: photographer summary, selected add-ons, and a cleaner confirmation layout."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="app-surface rounded-[34px] px-6 py-6"
        >
          <div className="space-y-5">
            <img
              src={photographer.image}
              alt={photographer.name}
              className="h-72 w-full rounded-[26px] object-cover"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-950">
                {photographer.name}
              </h2>
              <p className="text-sm font-medium text-slate-600">
                {photographer.speciality} · {photographer.experience}
              </p>
              <p className="text-sm leading-7 text-slate-600">
                {photographer.about}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[24px] bg-panel px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  Base fee
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  {currencySymbol}
                  {photographer.basePrice}
                </p>
              </div>
              <div className="rounded-[24px] bg-panel px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  Rating
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  {photographer.rating}/5
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleBookingConfirm}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="app-surface rounded-[34px] px-6 py-6 sm:px-8"
        >
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="app-label">Full name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="app-input"
                  placeholder="Enter your name"
                  required
                />
              </label>
              <label className="space-y-2">
                <span className="app-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="app-input"
                  placeholder="Enter your email"
                  required
                />
              </label>
              <label className="space-y-2">
                <span className="app-label">Date</span>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="app-input"
                  required
                />
              </label>
              <label className="space-y-2">
                <span className="app-label">Time</span>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="app-input"
                  required
                />
              </label>
            </div>

            <label className="space-y-2">
              <span className="app-label">Additional notes</span>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="app-input min-h-28 resize-none"
                placeholder="Any special requests?"
              />
            </label>

            <div className="space-y-4">
              <div>
                <p className="app-label">Select add-ons</p>
                <p className="mt-1 text-sm text-slate-500">
                  Choose the equipment or extra setup you want included in the shoot.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.entries(photographer.equipments).map(([equipment, price]) => {
                  const selected = selectedEquipments.includes(equipment);
                  return (
                    <label
                      key={equipment}
                      className={`cursor-pointer rounded-[24px] border px-4 py-4 ${
                        selected
                          ? "border-primary bg-primary/8"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => handleEquipmentChange(equipment)}
                        className="hidden"
                      />
                      <div className="space-y-2">
                        <p className="font-semibold text-slate-900">{equipment}</p>
                        <p className="text-sm text-slate-500">
                          +{currencySymbol}
                          {price}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[28px] bg-slate-50 px-5 py-5">
              <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
                <span>Base fee</span>
                <span>
                  {currencySymbol}
                  {photographer.basePrice}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-3 text-sm text-slate-600">
                <span>Add-ons</span>
                <span>
                  {currencySymbol}
                  {selectedEquipments.reduce(
                    (sum, equipment) => sum + photographer.equipments[equipment],
                    0
                  )}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-4 text-lg font-semibold text-slate-950">
                <span>Total</span>
                <span>
                  {currencySymbol}
                  {totalPrice}
                </span>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="app-button-primary w-full"
            >
              Confirm booking
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Booking;
