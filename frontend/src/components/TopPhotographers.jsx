import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import PhotographerCard from "./PhotographerCard";
import SectionTitle from "./SectionTitle";

const TopPhotographers = () => {
  const navigate = useNavigate();
  const { photographers } = useContext(AppContext);

  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Featured"
        title="Top photographers to book"
        description="Real names, real faces, and clear pricing take priority over inflated marketplace claims."
        action={
          <button
            type="button"
            onClick={() => {
              navigate("/photographers");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="app-button-secondary"
          >
            See all photographers
          </button>
        }
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {photographers.slice(0, 6).map((photographer) => (
          <PhotographerCard
            key={photographer._id}
            photographer={photographer}
            onClick={() => {
              navigate(`/appointments/${photographer._id}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TopPhotographers;
