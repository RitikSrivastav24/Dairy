import React from "react";

function NotesCard({ date, title, description }) {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-3xl p-5 hover:border-pink-500/30 transition">

      <span className="text-xs text-slate-500">
        {date}
      </span>

      <h4 className="text-lg font-bold mt-3">
        {title}
      </h4>

      <p className="text-sm text-slate-400 mt-3 leading-relaxed">
        {description}
      </p>

    </div>
  );
}

export default NotesCard;
