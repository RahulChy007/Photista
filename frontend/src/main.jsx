import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import EventBookingProvider from './context/EventBookingContext.jsx';
import AppointmentProvider from './context/AppointmentContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <EventBookingProvider>
        <AppointmentProvider>
          <App />
        </AppointmentProvider>  
      </EventBookingProvider>
    </AppContextProvider>
  </BrowserRouter>
)
