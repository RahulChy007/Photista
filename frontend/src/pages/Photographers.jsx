import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import PhotographerCard from "../components/PhotographerCard";
import SectionTitle from "../components/SectionTitle";

const specialityLabels = [
  "Wedding Photographer",
  "Portrait Photographer",
  "Fashion Photographer",
  "Event Photographer",
  "Product Photographer",
  "Travel Photographer",
];

const Photographers = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { photographers } = useContext(AppContext);
  const [filteredPhotographers, setFilteredPhotographers] = useState([]);

  useEffect(() => {
    if (speciality) {
      setFilteredPhotographers(
        photographers.filter((photographer) => photographer.speciality === speciality)
      );
      return;
    }

    setFilteredPhotographers(photographers);
  }, [photographers, speciality]);

  const totalReviews = useMemo(
    () =>
      filteredPhotographers.reduce(
        (sum, item) => sum + (Array.isArray(item.reviews) ? item.reviews.length : 0),
        0
      ),
    [filteredPhotographers]
  );

  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Discover"
        title={
          speciality
            ? `${speciality} listings`
            : "Browse trusted photographers"
        }
        description={
          speciality
            ? "Filter the marketplace by one speciality and compare the strongest matching profiles."
            : "Open a profile, review pricing and ratings, then move straight into the booking flow."
        }
      />

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="app-surface rounded-[28px] px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
            Visible profiles
          </p>
          <p className="mt-3 text-3xl font-semibold text-slate-950">
            {filteredPhotographers.length}
          </p>
        </div>
        <div className="app-surface rounded-[28px] px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
            Review signals
          </p>
          <p className="mt-3 text-3xl font-semibold text-slate-950">
            {totalReviews}
          </p>
        </div>
        <div className="app-surface rounded-[28px] px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
            Current view
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-950">
            {speciality || "All photographers"}
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[270px_1fr]">
        <aside className="app-surface h-fit rounded-[32px] px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
            Filters
          </p>
          <div className="mt-4 space-y-3">
            <button
              type="button"
              onClick={() => navigate("/photographers")}
              className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium ${
                !speciality
                  ? "border-primary bg-primary text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-primary/30"
              }`}
            >
              All photographers
            </button>
            {specialityLabels.map((item) => {
              const active = speciality === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    active ? navigate("/photographers") : navigate(`/photographers/${item}`)
                  }
                  className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium ${
                    active
                      ? "border-primary bg-primary text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-primary/30"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </aside>

        <div className="grid app-grid-auto gap-5">
          {filteredPhotographers.map((photographer) => (
            <PhotographerCard
              key={photographer._id}
              photographer={photographer}
              compact
              onClick={() => {
                navigate(`/appointments/${photographer._id}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Photographers;
