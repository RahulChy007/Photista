import React from "react";
import { Link } from "react-router-dom";
import { assets, specialityData } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="pb-8 pt-16">
      <div className="app-page">
        <div className="app-surface rounded-[34px] px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[2.1fr_1fr_1fr]">
            <div className="space-y-5">
              <img className="w-40" src={assets.logo} alt="Photista" />
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                Photista helps clients discover real photographers, compare
                transparent pricing, and book with a cleaner workflow across
                appointments, events, delivery, and support.
              </p>
              <div className="flex flex-wrap gap-2">
                {specialityData.slice(0, 4).map((item) => (
                  <span key={item.speciality} className="app-pill">
                    {item.speciality}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Explore
              </p>
              <div className="space-y-3 text-sm text-slate-600">
                <Link className="block hover:text-primary" to="/">
                  Home
                </Link>
                <Link className="block hover:text-primary" to="/photographers">
                  Photographers
                </Link>
                <Link className="block hover:text-primary" to="/event-booking">
                  Book Event
                </Link>
                <Link className="block hover:text-primary" to="/about">
                  About
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Contact
              </p>
              <div className="space-y-3 text-sm text-slate-600">
                <p>Haldia, West Bengal, India</p>
                <p>+91 99735 71743</p>
                <p>support@photista.com</p>
                <Link className="block hover:text-primary" to="/contact">
                  Need support?
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 Photista. All rights reserved.</p>
            <p>Designed to mirror the mobile booking experience.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
