import React from "react";

function StatsCard({ title, value, subtitle }) {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-3xl p-5">
      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>

      <p className="text-sm text-pink-400 mt-2">
        {subtitle}
      </p>
    </div>
  );
}

export default StatsCard;
