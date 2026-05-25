import React from "react";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <div>
      <nav className="sticky top-0 z-40 bg-[#111827]/80 backdrop-blur-xl border-b border-slate-800 px-4 lg:px-8 py-3 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-3">

          {/* Sidebar Toggle Button */}
          <button
            onClick={() => toggleSidebar(!isSidebarOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:bg-slate-800 transition"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-pink-500/20">
            📔
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              MyDiary
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center bg-slate-800/70 border border-slate-700 rounded-xl px-3 py-2 w-72">
            <svg
              className="h-5 w-5 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search diary notes..."
              className="bg-transparent outline-none px-3 text-sm w-full placeholder:text-slate-500"
            />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="h-10 w-10 rounded-full border border-slate-700"
            />

            <div className="hidden md:block">
              <p className="text-sm font-semibold">Ritik</p>
              <p className="text-xs text-slate-500">Diary Writer</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;