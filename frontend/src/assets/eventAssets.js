// src/assets/eventAssets.js

export const eventAssets = {
  // Minimum fee applied regardless of number of photographers
  minimumBookingFee: 2000,  

  // Types of events your platform supports
  eventCategories: [
    {
      id: 1,
      name: "Wedding",
      description: "Full wedding photography & videography coverage.",
      basePrice: 15000,
      image: "/images/events/wedding.jpg", // you can replace later
    },
    {
      id: 2,
      name: "Birthday",
      description: "Capture memorable birthday moments with style.",
      basePrice: 5000,
      image: "/images/events/birthday.jpg",
    },
    {
      id: 3,
      name: "Corporate Event",
      description: "Professional shoots for conferences, parties & launches.",
      basePrice: 10000,
      image: "/images/events/corporate.jpg",
    },
    {
      id: 4,
      name: "Other",
      description: "Customize your own event with chosen photographers.",
      basePrice: 3000,
      image: "/images/events/other.jpg",
    },
  ]
}  


