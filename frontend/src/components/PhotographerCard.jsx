import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const getLocationLabel = (photographer = {}) =>
  [photographer?.address?.line1, photographer?.address?.line2]
    .filter(Boolean)
    .join(", ");

const PhotographerCard = ({
  photographer,
  onClick,
  compact = false,
}) => {
  if (!photographer) {
    return null;
  }

  const reviewCount = Array.isArray(photographer.reviews)
    ? photographer.reviews.length
    : 0;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
      className={`app-surface group flex w-full cursor-pointer flex-col overflow-hidden text-left transition ${
        compact ? "rounded-[26px]" : "rounded-[30px]"
      }`}
    >
      <div className="relative overflow-hidden bg-[linear-gradient(180deg,#eef3ff_0%,#f7f9ff_100%)]">
        <img
          className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
            compact ? "h-52" : "h-72"
          }`}
          src={photographer.image}
          alt={photographer.name}
        />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/92 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-slate-950">
                  {photographer.name}
                </h3>
                <img
                  src={assets.verified_icon}
                  alt="verified"
                  className="h-4 w-4"
                />
              </div>
              <p className="text-sm font-medium text-slate-600">
                {photographer.speciality}
              </p>
            </div>
            <div className="rounded-2xl bg-primary/10 px-3 py-2 text-right">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/70">
                Starts at
              </p>
              <p className="text-sm font-semibold text-primary">
                ₹{photographer.basePrice}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
              <img src={assets.stars} alt="stars" className="h-3.5 w-[68px]" />
              {photographer.rating}/5
            </span>
            <span>{reviewCount} review{reviewCount === 1 ? "" : "s"}</span>
            <span>{photographer.experience}</span>
          </div>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-slate-600">
          {photographer.about}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3">
          <p className="line-clamp-1 text-sm text-slate-500">
            {getLocationLabel(photographer)}
          </p>
          <span className="text-sm font-semibold text-primary">
            View profile →
          </span>
        </div>
      </div>
    </motion.button>
  );
};

export default PhotographerCard;
