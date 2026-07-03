import React, { useContext, useMemo } from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopPhotographers from "../components/TopPhotographers";
import Banner from "../components/Banner";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { photographers } = useContext(AppContext);

  const metrics = useMemo(() => {
    const reviewCount = photographers.reduce(
      (sum, item) => sum + (Array.isArray(item.reviews) ? item.reviews.length : 0),
      0
    );
    const specialityCount = new Set(photographers.map((item) => item.speciality)).size;
    const averageStartingPrice =
      photographers.reduce((sum, item) => sum + Number(item.basePrice || 0), 0) /
      Math.max(photographers.length, 1);

    return [
      {
        label: "Live photographers",
        value: `${photographers.length}+`,
      },
      {
        label: "Specialities covered",
        value: `${specialityCount}`,
      },
      {
        label: "Visible review signals",
        value: `${reviewCount}`,
      },
      {
        label: "Average starting fee",
        value: `₹${Math.round(averageStartingPrice)}`,
      },
    ];
  }, [photographers]);

  return (
    <div className="space-y-8 sm:space-y-10">
      <Header />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
          <div key={item.label} className="app-surface rounded-[28px] px-5 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
              {item.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-slate-950">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section className="app-surface rounded-[34px] px-6 py-7 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Real photographers first",
              body: "The website now follows the app’s trust-first flow, so users see actual profiles, real pricing, and real review signals before booking.",
            },
            {
              title: "Cleaner booking journey",
              body: "Moving from discovery to detail to booking now feels closer to the mobile product instead of separate disconnected pages.",
            },
            {
              title: "Built for interviews and demos",
              body: "The layout is intentionally more polished, product-like, and easier to explain when you walk someone through the Photista experience.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-slate-100 bg-slate-50 px-5 py-5">
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <SpecialityMenu />
      <TopPhotographers />
      <Banner />
    </div>
  );
};

export default Home;
