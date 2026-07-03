import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="app-surface rounded-[34px] bg-[linear-gradient(180deg,#e7ebff_0%,#f7f8fe_100%)] px-6 py-8 sm:px-8 lg:px-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            For larger productions
          </p>
          <h3 className="text-3xl font-semibold tracking-tight text-highlight sm:text-4xl">
            Book full events with multi-photographer support.
          </h3>
          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Wedding, birthday, and corporate event booking all stay in one flow
            with transparent event pricing and team selection.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigate("/event-booking")}
            className="app-button-primary"
          >
            Start event booking
          </button>
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="app-button-secondary"
          >
            Talk to the team
          </button>
        </div>
      </div>

      <div className="app-surface relative overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#1d1437_0%,#0d1732_100%)] px-6 py-8 text-white sm:px-8 lg:px-10">
        <div className="absolute -right-10 top-6 h-32 w-32 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative flex h-full flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-md space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              For creators
            </p>
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Turn your studio into a verified Photista listing.
            </h3>
            <p className="text-sm leading-7 text-white/78 sm:text-base">
              Apply with your portfolio, submit packages, and move toward a live
              listing that mirrors the mobile creator experience.
            </p>
            <button
              type="button"
              onClick={() => navigate("/auth")}
              className="app-button-primary"
            >
              Create photographer account
            </button>
          </div>

          <img
            className="mx-auto w-full max-w-xs object-contain lg:max-w-sm"
            src={assets.appointment_img}
            alt="Photista booking experience"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
