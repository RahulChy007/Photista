import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="app-surface relative overflow-hidden rounded-[38px] bg-[linear-gradient(135deg,#5f6fff_0%,#3947d8_100%)] px-6 py-8 text-white sm:px-8 lg:px-12 lg:py-12"
    >
      <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -right-8 bottom-4 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]">
            Premium mobile-inspired booking
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Find photographers you can trust for weddings, portraits, events,
              and brands.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
              Browse real profiles, compare transparent pricing, and move from
              discovery to booking in a flow that feels closer to the Photista
              app.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/photographers")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-[0_18px_38px_rgba(13,19,76,0.18)]"
            >
              Explore photographers
              <img className="w-3" src={assets.arrow_icon} alt="" />
            </button>
            <button
              type="button"
              onClick={() => navigate("/event-booking")}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white"
            >
              Book an event
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 rounded-[28px] border border-white/14 bg-white/10 px-5 py-4 backdrop-blur">
            <img className="w-32" src={assets.group_profiles} alt="" />
            <p className="max-w-xl text-sm leading-6 text-white/85">
              Real photographers, verified reviews, and clear pricing all stay
              visible before the client ever reaches checkout.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-10 bottom-0 h-12 rounded-full bg-black/15 blur-2xl" />
          <img
            className="relative mx-auto w-full max-w-lg object-contain drop-shadow-[0_35px_60px_rgba(14,20,80,0.28)]"
            src={assets.header_img}
            alt="Photista photographers"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
