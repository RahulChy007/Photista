import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iyxnrz3",     
        "template_s254xsc",    
        formRef.current,
        "MGydXoDF9kjWkciWt"      
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSent(false);
        }
      );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Page Title */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in <span className="text-primary">Touch</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          {isSent && (
            <motion.p
              className="mt-4 text-green-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message Sent Successfully! We'll Contact You Shortly!
            </motion.p>
          )}
        </motion.div>

        {/* Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
          <p className="text-gray-600">
            Have questions? Reach out to us and we’ll respond as soon as possible.
          </p>

          <div className="space-y-3">
            <p className="text-gray-700">📍 Haldia, West Bengal, India</p>
            <p className="text-gray-700">📞 +91 99735 71743</p>
            <p className="text-gray-700">✉️ support@photista.com</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.576447293666!2d88.1301!3d22.0669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA0JzAwLjgiTiA4OMKwMDcnNDguNCJF!5e0!3m2!1sen!2sin!4v1692950000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              title="Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
