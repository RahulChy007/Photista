import React, { useState } from "react";
import { motion } from "framer-motion";

const AuthForm = ({ role }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      role,
      type: isLogin ? "login" : "signup",
      ...formData,
    };

    console.log("🚀 Auth Data:", payload);

    alert(`${role} ${isLogin ? "Login" : "Signup"} Successful ✅`);
    // 👉 Replace alert with API call to backend for authentication
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Sign Up"} as {role}
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="border rounded-md p-2"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border rounded-md p-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border rounded-md p-2"
            required
          />

          <motion.button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        <p
          className="text-sm text-center text-gray-600 mt-4 cursor-pointer hover:underline"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don’t have an account? Sign up"
            : "Already have an account? Login"}
        </p>
      </div>
    </motion.div>
  );
};

export default AuthForm;
