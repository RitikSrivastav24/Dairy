import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";



function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate= useNavigate();
  const handleLogout= async()=>{
    try {
      const response= await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
        withCredentials: true,
        }
      )
      alert(response.data.message);

    navigate("/");
    } catch (error) {
      alert("Logout Failed");
    }
  }
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 bg-[#111827] border-r border-slate-800 p-5 pt-20 lg:pt-6 transform transition-transform duration-300 lg:relative ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 px-3">
          Diary Menu
        </p>

        {/* Menu Items */}
        <div className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-400 font-medium"
          >
            <span>📖</span>
            All Notes
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800/60 hover:text-white transition"
          >
            <span>⭐</span>
            Favorites
          </a>

          <a
            href="/categories"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800/60 hover:text-white transition"
          >
            <span>🗂️</span>
            Categories
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800/60 hover:text-white transition"
          >
            <span>🕒</span>
            Recent Notes
          </a>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition"
          >
            <span>🚪</span>
            Logout
          </button>
        </div>

        {/* Bottom Card */}
        <div className="mt-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-3xl p-5">
          <h3 className="font-bold text-white text-lg">Daily Writing Goal</h3>

          <p className="text-sm text-slate-400 mt-2">
            You’ve written 4 entries this week.
          </p>

          <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-[70%] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          </div>

          <p className="text-xs text-pink-400 mt-2 font-medium">
            70% Completed
          </p>
        </div>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
