import React from "react";

const SectionTitle = ({ eyebrow, title, description, action }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl space-y-3">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
};

export default SectionTitle;
