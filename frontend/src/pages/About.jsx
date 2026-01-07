import React from "react";
import { motion } from "framer-motion";
import {assets} from "../assets/assets"; // replace with your own image

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-primary">Photista</span>
      </motion.h1>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={assets.about_image}
            alt="About Photista"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Personal Photography Booking Platform
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Photista is your <span className="font-semibold">go-to platform</span> for finding and booking
            photographers based on their expertise, price, and rating. Whether it’s a wedding, fashion shoot, 
            or a corporate event – we make sure you find the perfect match.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to connect clients with passionate photographers, simplify the booking process, 
            and create unforgettable memories. With transparent pricing, verified reviews, and curated portfolios, 
            booking photography has never been easier.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-3xl font-bold text-primary">500+</h3>
          <p className="text-gray-600">Photographers</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-3xl font-bold text-primary">1200+</h3>
          <p className="text-gray-600">Bookings</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-3xl font-bold text-primary">4.9⭐</h3>
          <p className="text-gray-600">Avg. Rating</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-3xl font-bold text-primary">100%</h3>
          <p className="text-gray-600">Client Satisfaction</p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="mt-20 p-8 bg-gradient-to-r from-primary/80 to-indigo-500 text-white rounded-2xl shadow-xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-lg">
          To empower photographers and clients by building a trusted, seamless, and inspiring
          photography booking experience that captures life’s most precious moments beautifully.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
