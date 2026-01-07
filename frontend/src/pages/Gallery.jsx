import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Gallery = () => {
  const { pId } = useParams();
  const { photographers } = useContext(AppContext);
  const [photos, setPhotos] = useState([]);
  const [sortType, setSortType] = useState("recent");

  useEffect(() => {
    const pInfo = photographers.find((p) => p._id === pId);
    if (pInfo) {
      // assuming you add "gallery" field in dataset (array of objects: {url, category, date})
      setPhotos(pInfo.gallery || []);
    }
  }, [photographers, pId]);

  const sortedPhotos = [...photos].sort((a, b) => {
    if (sortType === "recent") return new Date(b.date) - new Date(a.date);
    if (sortType === "oldest") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-8 lg:px-16 py-8"
    >
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Photographer’s Gallery
      </h1>

      {/* Sorting Options */}
      <div className="flex gap-4 mb-6">
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border border-gray-400 px-3 py-2 rounded-lg shadow-sm focus:outline-none"
        >
          <option value="recent">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedPhotos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={photo.url}
              alt={`Gallery ${index}`}
              className="w-full h-48 object-cover"
            />
            <p className="text-xs text-gray-500 text-center mt-1">
              {photo.category}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
