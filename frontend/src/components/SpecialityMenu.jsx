import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const SpecialityMenu = () => {
  return (
    <section className="space-y-8" id="speciality">
      <SectionTitle
        eyebrow="Specialities"
        title="Find by speciality"
        description="The same discovery language as the app, translated into a cleaner desktop experience."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {specialityData.map((item) => (
          <Link
            key={item.speciality}
            to={`/photographers/${item.speciality}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="app-surface group flex items-center gap-4 rounded-[28px] p-5 hover:-translate-y-1"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-panel">
              <img className="h-10 w-10 object-contain" src={item.image} alt={item.speciality} />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-slate-950">{item.speciality}</p>
              <p className="text-sm text-slate-600">
                Browse curated profiles and move straight into booking.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialityMenu;
