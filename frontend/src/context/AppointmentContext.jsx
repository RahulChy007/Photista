import { createContext, useState } from "react";

export const AppointmentContext = createContext();

const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : [];
  });

  const addAppointment = (appointment) => {
    const updatedAppointments = [...appointments, appointment];
    setAppointments(updatedAppointments);
    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );
  };

  const removeAppointment = (id) => {
    const updated = appointments.filter((a) => a.id !== id);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointment,
        removeAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider;
