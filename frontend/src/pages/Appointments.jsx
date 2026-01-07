import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Appointments = () => {
  const { pId } = useParams();
  const { photographers, currencySymbol } = useContext(AppContext);

  const [pInfo, setPInfo] = useState(null);

  const fetchPhotographerInfo = () => {
    const pInfo = photographers.find((p) => p._id === pId);
    setPInfo(pInfo);
  };

  useEffect(() => {
    fetchPhotographerInfo();
  }, [photographers, pId]);

  return (
    pInfo && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 lg:px-16 py-6"
      >
        {/*--------------- Photographer Details -----------------*/}
        <div className="flex flex-col sm:flex-row gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="bg-primary w-full sm:max-w-72 rounded-2xl shadow-md"
              src={pInfo.image}
              alt={pInfo.name}
            />
            <Link to={`/appointments/${pInfo._id}/gallery`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 rounded-3xl px-4 py-2 mt-4 w-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white shadow-md hover:shadow-lg transition-all"
              >
                View Gallery
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 border border-gray-300 rounded-2xl p-6 bg-white shadow-md"
          >
            <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900 ">
              {pInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="verified" />
            </p>

            <div className="flex items-center gap-2 text-sm mt-2 text-gray-600 flex-wrap">
              <p>
                {pInfo.expertise} - {pInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full hover:border-green-500 transition-all">
                {pInfo.experience}
              </button>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <p className="text-xl font-semibold text-gray-800">
                {pInfo.rating}/5
              </p>
              <img className="w-28" src={assets.stars} alt="rating" />
              <span className="text-sm text-gray-500">
                ({pInfo.reviews.length} reviews)
              </span>
            </div>

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-4">
                About <img src={assets.info_icon} alt="info" />
              </p>
              <p className="text-sm text-gray-600 max-w-[700px] mt-2">
                {pInfo.about}
              </p>
            </div>

            <p className="text-gray-700 font-medium mt-4">
              Base fee:{" "}
              <span className="text-black font-semibold">
                {currencySymbol} {pInfo.basePrice}
              </span>
            </p>

            <Link to={`/appointments/${pInfo._id}/booking`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 rounded-3xl px-4 py-2 mt-5 bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md hover:shadow-lg transition-all"
              >
                Book Now
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* ---------------- Reviews Section ---------------- */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Reviews</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {pInfo.reviews.map((review) => (
              <motion.div
                key={review.id}
                whileHover={{ scale: 1.05 }}
                className="min-w-[250px] bg-white shadow-md rounded-xl p-4 border border-gray-200"
              >
                <p className="text-gray-700 text-sm italic">"{review.text}"</p>
                <div className="mt-3 flex items-center gap-2">
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {review.user}
                    </p>
                    <p className="text-xs text-gray-500">
                      ⭐ {review.rating}/5
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    )
  );
};

export default Appointments;
