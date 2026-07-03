import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const Appointments = () => {
  const { pId } = useParams();
  const { photographers, currencySymbol } = useContext(AppContext);
  const [photographerInfo, setPhotographerInfo] = useState(null);

  useEffect(() => {
    setPhotographerInfo(photographers.find((item) => item._id === pId) || null);
  }, [photographers, pId]);

  const reviewSummary = useMemo(() => {
    if (!photographerInfo) {
      return { count: 0, average: 0 };
    }

    const reviews = Array.isArray(photographerInfo.reviews)
      ? photographerInfo.reviews
      : [];
    const count = reviews.length;
    const average = count
      ? (
          reviews.reduce((sum, item) => sum + Number(item.rating || 0), 0) / count
        ).toFixed(1)
      : photographerInfo.rating?.toFixed?.(1) || photographerInfo.rating || "0";

    return { count, average };
  }, [photographerInfo]);

  if (!photographerInfo) {
    return (
      <div className="app-surface rounded-[32px] px-6 py-10 text-center text-slate-600">
        Photographer not found.
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Photographer profile"
        title={photographerInfo.name}
        description="Review the profile, explore the gallery, and move into booking once the package and style feel right."
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"
      >
        <div className="space-y-4">
          <div className="app-surface overflow-hidden rounded-[34px]">
            <img
              className="h-full min-h-[420px] w-full object-cover"
              src={photographerInfo.image}
              alt={photographerInfo.name}
            />
          </div>

          <Link
            to={`/appointments/${photographerInfo._id}/gallery`}
            className="app-button-secondary w-full"
          >
            View gallery
          </Link>
        </div>

        <div className="app-surface rounded-[34px] px-6 py-7 sm:px-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  {photographerInfo.name}
                </h1>
                <div className="app-pill">
                  <img className="h-4 w-4" src={assets.verified_icon} alt="verified" />
                  Verified profile
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="app-pill">{photographerInfo.speciality}</span>
                <span className="app-pill">{photographerInfo.expertise}</span>
                <span className="app-pill">{photographerInfo.experience}</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] bg-panel px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  Rating
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  {reviewSummary.average}/5
                </p>
              </div>
              <div className="rounded-[24px] bg-panel px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  Reviews
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  {reviewSummary.count}
                </p>
              </div>
              <div className="rounded-[24px] bg-panel px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  Base fee
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  {currencySymbol}
                  {photographerInfo.basePrice}
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-100 bg-slate-50 px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                About this photographer
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {photographerInfo.about}
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-100 bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                Why clients may choose them
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] bg-slate-50 px-4 py-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Trusted speciality match
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Strong for {photographerInfo.speciality.toLowerCase()} with {photographerInfo.expertise.toLowerCase()} direction.
                  </p>
                </div>
                <div className="rounded-[24px] bg-slate-50 px-4 py-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Clear price starting point
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Base price is visible upfront before any add-ons are selected.
                  </p>
                </div>
                <div className="rounded-[24px] bg-slate-50 px-4 py-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Review-backed confidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Existing review signals help clients compare quality before booking.
                  </p>
                </div>
                <div className="rounded-[24px] bg-slate-50 px-4 py-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Location visible
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {photographerInfo.address?.line1}, {photographerInfo.address?.line2}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to={`/appointments/${photographerInfo._id}/booking`}
                className="app-button-primary"
              >
                Book now
              </Link>
              <Link
                to={`/appointments/${photographerInfo._id}/gallery`}
                className="app-button-secondary"
              >
                Browse gallery
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Reviews"
          title="What clients are saying"
          description="The same trust-first tone as the app: comments are visible before booking."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {photographerInfo.reviews.map((review) => (
            <div key={review.id} className="app-surface rounded-[28px] px-5 py-5">
              <p className="text-sm leading-7 text-slate-600">“{review.text}”</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900">{review.user}</p>
                  <p className="text-sm text-slate-500">Client review</p>
                </div>
                <span className="app-pill">⭐ {review.rating}/5</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Appointments;
