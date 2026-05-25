import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/Stats";
import NotesCard from "../components/NotesCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState({});
  const [notes, setNotes] = useState([]);
  const naviGate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    mood: "",
  });
  const validateForm = () => {
    let newError = {};
    if (!formData.title.trim()) {
      console.log("Enter Title");
      newError.title = "Title Required";
    }
    if (!formData.content.trim()) {
      console.log("Enter Content");
      newError.content = "Content Required!";
    }
    if (!formData.mood.trim()) {
      console.log("Select Mood");
      newError.mood = "Select YOur Mood";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };
  const fetchNotes = async () => {
    try {
      const response =await axios.get("http://localhost:5000/api/notes/getnotes", {
        withCredentials: true,
      });
      setNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/notes",
        formData,
        {
          withCredentials: true,
        },
      );

      alert(response.data.message);
      naviGate("/dashboard");
      setIsModalOpen(false);

      setFormData({
        title: "",
        content: "",
        mood: "",
      });
      fetchNotes();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const calculateStreak = (notes) => {
  if (!notes.length) return 0;

  const uniqueDates = [
    ...new Set(
      notes.map(note =>
        new Date(note.created_at)
          .toISOString()
          .split("T")[0]
      )
    ),
  ];

  uniqueDates.sort(
    (a, b) => new Date(b) - new Date(a)
  );

  let streak = 0;
  const today = new Date();

  for (let i = 0; i < uniqueDates.length; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() - i);

    const formatted = checkDate
      .toISOString()
      .split("T")[0];

    if (uniqueDates.includes(formatted)) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};
 const writingStreak = calculateStreak(notes);
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main className="flex-1 p-6 space-y-6">
          {/* Hero */}
          <div className="relative overflow-hidden bg-[#111827] border border-slate-800 rounded-3xl p-8 shadow-xl">
            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 blur-3xl"></div>
            <div className="text-3xl font-extrabold tracking-tight">
              Welcome Back, Ritik 👋
            </div>
            <p className="mt-3 text-slate-400 max-w-xl">
              Capture your thoughts, memories, and ideas beautifully inside your
              personal digital diary notebook.
            </p>
            <button
              className="mt-6 px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 font-semibold shadow-lg shadow-pink-500/20 hover:scale-[1.02] transition"
              onClick={() => setIsModalOpen(true)}
            >
              + Create New Note
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <StatsCard
              title="Total Notes"
              value={notes.length}
              subtitle="+12 this month"
            />

            <StatsCard
              title="Favorites"
              value={notes.filter(note => note.is_favourite).length}
              subtitle="Most loved notes"
            />

            <StatsCard
              title="Writing Streak"
              value={writingStreak}
              subtitle="Keep writing 🔥"
            />
          </div>

          {/* Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
  {notes.map((note) => (
    <NotesCard
      key={note.id}
      date={new Date(note.created_at).toDateString()}
      title={note.title}
      description={note.content}
    />
  ))}
</div>
        </main>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 blur-3xl"></div>

            {/* Heading */}
            <h2 className="text-3xl font-bold mb-6">Create New Note ✨</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title */}
              <div>
                <label className="block mb-2 text-slate-300">Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter note title..."
                  className="w-full px-4 py-3 bg-[#1e293b] border border-slate-700 rounded-2xl outline-none focus:border-pink-500 transition"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block mb-2 text-slate-300">Content</label>

                <textarea
                  rows="5"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your thoughts..."
                  className="w-full px-4 py-3 bg-[#1e293b] border border-slate-700 rounded-2xl outline-none focus:border-purple-500 transition resize-none"
                ></textarea>
              </div>

              {/* Mood */}
              <div>
                <label className="block mb-2 text-slate-300">Mood</label>

                <select
                  name="mood"
                  value={formData.mood}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1e293b] border border-slate-700 rounded-2xl outline-none focus:border-pink-500 transition"
                >
                  <option value="">Select Mood</option>
                  <option value="😊 Happy">😊 Happy</option>
                  <option value="😔 Sad">😔 Sad</option>
                  <option value="🔥 Motivated">🔥 Motivated</option>
                  <option value="😴 Tired">😴 Tired</option>
                  <option value="😌 Calm">😌 Calm</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-3 rounded-2xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 font-semibold shadow-lg shadow-pink-500/20 hover:scale-[1.02] transition"
                >
                  Save Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
