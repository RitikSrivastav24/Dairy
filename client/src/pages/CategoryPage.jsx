import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "😊 Happy", value: "😊 Happy", description: "Your happy memories" },
    { name: "😔 Sad", value: "😔 Sad", description: "Your emotional notes" },
    { name: "🔥 Motivated", value: "🔥 Motivated", description: "Your goals and energy" },
    { name: "😴 Tired", value: "😴 Tired", description: "Low energy days" },
    { name: "😌 Calm", value: "😌 Calm", description: "Peaceful thoughts" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Mood Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.value}
            onClick={() => navigate(`/category/${encodeURIComponent(cat.value)}`)}
            className="cursor-pointer bg-[#111827] border border-slate-800 rounded-3xl p-6 hover:scale-[1.03] transition shadow-xl"
          >
            <h2 className="text-2xl font-bold">{cat.name}</h2>
            <p className="text-slate-400 mt-3">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;