folder structure ---

Diary/
│
├── client/                 # React Frontend
│
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/         # images, icons, fonts
│   │   │
│   │   ├── components/     # reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── EntryCard.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── pages/          # pages/screens
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── CreateEntry.jsx
│   │   │   └── EditEntry.jsx
│   │   │
│   │   ├── layouts/        # page layouts
│   │   │   └── MainLayout.jsx
│   │   │
│   │   ├── routes/         # react-router setup
│   │   │   └── AppRoutes.jsx
│   │   │
│   │   ├── services/       # API calls
│   │   │   ├── authService.js
│   │   │   └── diaryService.js
│   │   │
│   │   ├── context/        # auth/global state
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/          # custom hooks
│   │   │   └── useAuth.js
│   │   │
│   │   ├── utils/          # helper functions
│   │   │   └── formatDate.js
│   │   │
│   │   ├── styles/
│   │   │   └── global.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
│
├── server/                 # Node Backend
│
│   ├── config/
│   │   └── db.js           # MySQL connection
│   │
│   ├── controllers/        # business logic
│   │   ├── authController.js
│   │   └── diaryController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/             # database queries
│   │   ├── userModel.js
│   │   └── diaryModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── diaryRoutes.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── hashPassword.js
│   │
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── nodemon.json
│
│
└── README.md




/// Navbar
// import React, { useState } from "react";

// function DiaryDashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans">

//       {/* ================= NAVBAR ================= */}
//       <nav className="sticky top-0 z-40 bg-[#111827]/80 backdrop-blur-xl border-b border-slate-800 px-4 lg:px-8 py-3 flex items-center justify-between">

//         {/* Left */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="lg:hidden p-2 rounded-xl text-slate-400 hover:bg-slate-800 transition"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>

//           {/* Logo */}
//           <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-pink-500/20">
//             📔
//           </div>

//           <div>
//             <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
//               MyDiary
//             </h1>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-4">

//           {/* Search */}
//           <div className="hidden md:flex items-center bg-slate-800/70 border border-slate-700 rounded-xl px-3 py-2 w-72">
//             <svg
//               className="h-5 w-5 text-slate-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
//               />
//             </svg>

//             <input
//               type="text"
//               placeholder="Search diary notes..."
//               className="bg-transparent outline-none px-3 text-sm w-full placeholder:text-slate-500"
//             />
//           </div>

//           {/* User */}
//           <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
//             <img
//               src="https://i.pravatar.cc/100"
//               alt="profile"
//               className="h-10 w-10 rounded-full border border-slate-700"
//             />

//             <div className="hidden md:block">
//               <p className="text-sm font-semibold">Ritik</p>
//               <p className="text-xs text-slate-500">Diary Writer</p>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* ================= BODY ================= */}
//       <div className="flex flex-1 relative">

//         {/* ================= SIDEBAR ================= */}
//         <aside
//           className={`fixed inset-y-0 left-0 z-30 w-72 bg-[#111827] border-r border-slate-800 p-5 pt-20 lg:pt-6 transform transition-transform duration-300 lg:relative ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } lg:translate-x-0`}
//         >
//           <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 px-3">
//             Diary Menu
//           </p>

//           {/* Menu Items */}
//           <div className="space-y-2">

//             <a
//               href="#"
//               className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-400 font-medium"
//             >
//               <span>📖</span>
//               All Notes
//             </a>

//             <a
//               href="#"
//               className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800/60 hover:text-white transition"
//             >
//               <span>⭐</span>
//               Favorites
//             </a>

//             <a
//               href="#"
//               className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800/60 hover:text-white transition"
//             >
//               <span>🗂️</span>
//               Categories
//             </a>

//             <a
//               href="#"
//               className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800/60 hover:text-white transition"
//             >
//               <span>🕒</span>
//               Recent Notes
//             </a>

//             <a
//               href="#"
//               className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800/60 hover:text-white transition"
//             >
//               <span>⚙️</span>
//               Settings
//             </a>
//           </div>

//           {/* Bottom Card */}
//           <div className="mt-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-3xl p-5">
//             <h3 className="font-bold text-white text-lg">
//               Daily Writing Goal
//             </h3>

//             <p className="text-sm text-slate-400 mt-2">
//               You’ve written 4 entries this week.
//             </p>

//             <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
//               <div className="h-full w-[70%] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
//             </div>

//             <p className="text-xs text-pink-400 mt-2 font-medium">
//               70% Completed
//             </p>
//           </div>
//         </aside>

//         {/* Overlay */}
//         {isSidebarOpen && (
//           <div
//             onClick={() => setIsSidebarOpen(false)}
//             className="fixed inset-0 bg-black/40 z-20 lg:hidden"
//           ></div>
//         )}

//         {/* ================= MAIN CONTENT ================= */}
//         <main className="flex-1 p-6 lg:p-8 space-y-6 overflow-y-auto max-w-7xl mx-auto w-full">

//           {/* Hero */}
//           <div className="relative overflow-hidden bg-[#111827] border border-slate-800 rounded-3xl p-8 shadow-xl">
//             <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 blur-3xl"></div>

//             <h2 className="text-3xl font-extrabold tracking-tight">
//               Welcome Back, Ritik 👋
//             </h2>

//             <p className="mt-3 text-slate-400 max-w-xl">
//               Capture your thoughts, memories, and ideas beautifully inside
//               your personal digital diary notebook.
//             </p>

//             <button className="mt-6 px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 font-semibold shadow-lg shadow-pink-500/20 hover:scale-[1.02] transition">
//               + Create New Note
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

//             {/* Card */}
//             <div className="bg-[#111827] border border-slate-800 rounded-3xl p-5">
//               <p className="text-sm text-slate-500 font-medium">
//                 Total Notes
//               </p>

//               <h3 className="text-3xl font-bold mt-2">128</h3>

//               <p className="text-emerald-400 text-sm mt-2">
//                 +12 added this month
//               </p>
//             </div>

//             {/* Card */}
//             <div className="bg-[#111827] border border-slate-800 rounded-3xl p-5">
//               <p className="text-sm text-slate-500 font-medium">
//                 Favorite Entries
//               </p>

//               <h3 className="text-3xl font-bold mt-2">24</h3>

//               <p className="text-pink-400 text-sm mt-2">
//                 Most loved memories
//               </p>
//             </div>

//             {/* Card */}
//             <div className="bg-[#111827] border border-slate-800 rounded-3xl p-5">
//               <p className="text-sm text-slate-500 font-medium">
//                 Writing Streak
//               </p>

//               <h3 className="text-3xl font-bold mt-2">16 Days</h3>

//               <p className="text-orange-400 text-sm mt-2">
//                 Keep your streak alive 🔥
//               </p>
//             </div>
//           </div>

//           {/* Notes Grid */}
//           <div>
//             <div className="flex items-center justify-between mb-5">
//               <h3 className="text-xl font-bold">Recent Notes</h3>

//               <button className="text-sm text-pink-400 hover:text-pink-300 transition">
//                 View All
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

//               {/* Note Card */}
//               <div className="bg-[#111827] border border-slate-800 rounded-3xl p-5 hover:border-pink-500/30 transition cursor-pointer">
//                 <span className="text-xs text-slate-500">
//                   April 21, 2026
//                 </span>

//                 <h4 className="text-lg font-bold mt-3">
//                   My First Productive Day
//                 </h4>

//                 <p className="text-sm text-slate-400 mt-3 leading-relaxed">
//                   Today I completed my dashboard UI and learned more about
//                   responsive layouts with Tailwind CSS...
//                 </p>
//               </div>

//               {/* Note Card */}
//               <div className="bg-[#111827] border border-slate-800 rounded-3xl p-5 hover:border-purple-500/30 transition cursor-pointer">
//                 <span className="text-xs text-slate-500">
//                   April 18, 2026
//                 </span>

//                 <h4 className="text-lg font-bold mt-3">
//                   Ideas for New Project
//                 </h4>

//                 <p className="text-sm text-slate-400 mt-3 leading-relaxed">
//                   Thinking about creating a modern diary notebook application
//                   with authentication and cloud sync support...
//                 </p>
//               </div>

//               {/* Note Card */}
//               <div className="bg-[#111827] border border-slate-800 rounded-3xl p-5 hover:border-blue-500/30 transition cursor-pointer">
//                 <span className="text-xs text-slate-500">
//                   April 14, 2026
//                 </span>

//                 <h4 className="text-lg font-bold mt-3">
//                   Midnight Thoughts
//                 </h4>

//                 <p className="text-sm text-slate-400 mt-3 leading-relaxed">
//                   Sometimes silence helps us understand ourselves better than
//                   noise ever could...
//                 </p>
//               </div>

//             </div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// }

// export default DiaryDashboard;



import React from "react";

function Navbar({ toggleSidebar }) {
    return (
        <nav className="sticky top-0 z-40 bg-[#111827]/80 backdrop-blur-xl border-b border-slate-800 px-4 lg:px-8 py-3 flex items-center justify-between">

            <div className="flex items-center gap-3">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 rounded-xl text-slate-400 hover:bg-slate-800"
                >
                    ☰
                </button>

                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                    📔
                </div>

                <h1 className="text-xl font-bold">MyDiary</h1>
            </div>

            <div className="flex items-center gap-3">
                <img
                    src="https://i.pravatar.cc/100"
                    alt=""
                    className="h-10 w-10 rounded-full"
                />
            </div>
        </nav>
    );
}

export default Navbar;

Notes Card

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

SideBar
import React from "react";

function Sidebar({ isSidebarOpen }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-72 bg-[#111827]
      border-r border-slate-800 p-5 pt-20 lg:pt-6
      transform transition-transform duration-300
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0 lg:relative`}
    >
      <div className="space-y-2">

        <a href="#" className="block px-4 py-3 rounded-2xl bg-pink-500/10 text-pink-400">
          📖 All Notes
        </a>

        <a href="#" className="block px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800">
          ⭐ Favorites
        </a>

        <a href="#" className="block px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800">
          ⚙️ Settings
        </a>

      </div>
    </aside>
  );
}

export default Sidebar;

Stats

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

userDashboard page


import React, { useState } from "react";


import Sidebar from "../../components/Sidebar";

import NotesCard from "../../components/NotesCard";
import Navbar from "../../components/Navbar";
import StatsCard from "../../components/Stats";

function Dashboard() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">

      <Navbar
        toggleSidebar={() =>
          setIsSidebarOpen(!isSidebarOpen)
        }
      />

      <div className="flex">

        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main className="flex-1 p-6 space-y-6">

          {/* Hero */}
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="text-slate-400 mt-3">
              Capture your memories beautifully.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <StatsCard
              title="Total Notes"
              value="128"
              subtitle="+12 this month"
            />

            <StatsCard
              title="Favorites"
              value="24"
              subtitle="Most loved notes"
            />

            <StatsCard
              title="Writing Streak"
              value="16 Days"
              subtitle="Keep writing 🔥"
            />

          </div>

          {/* Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            <NotesCard
              date="April 21, 2026"
              title="My Productive Day"
              description="Today I learned component architecture..."
            />

            <NotesCard
              date="April 18, 2026"
              title="New Ideas"
              description="Thinking about building a fullstack diary app..."
            />

          </div>

        </main>

      </div>
    </div>
  );
}

export default Dashboard;

Login page 
import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex bg-slate-950 justify-center items-center p-4">
      {/* Glow Effect Layer */}
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-30 animate-pulse"></div>
        
        {/* Main Card */}
        <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full p-8 sm:p-10 backdrop-blur-xl">
          <form className="space-y-6">
            
            {/* Header Section */}
            <div className="flex flex-col gap-3 items-center text-center">
              <div className="p-1 rounded-full bg-slate-800 border border-slate-700 shadow-inner">
                <img 
                  src="https://res.cloudinary.com/deuydehn5/image/upload/v1778651087/d2_th6yhm.jpg" 
                  className="h-12 w-12 rounded-full object-cover" 
                  alt="Logo"
                />
              </div>
              <div>
                <h1 className="font-extrabold text-2xl tracking-tight text-slate-100">Welcome Back</h1>
                <p className="text-sm text-slate-400 mt-1">Enter your details to access your account</p>
              </div>
            </div>

            {/* Input Fields Container */}
            <div className="space-y-4">
              {/* Username Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="username" className="font-semibold text-xs uppercase tracking-wider text-slate-400">
                  Username
                </label>
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  className="w-full bg-slate-800/50 border border-slate-700/80 rounded-xl text-slate-100 placeholder:text-slate-500 outline-none px-4 py-2.5 text-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                  placeholder="Enter your username" 
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="font-semibold text-xs uppercase tracking-wider text-slate-400">
                    Password
                  </label>
                  <a href="#forgot" className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    Forgot?
                  </a>
                </div>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="••••••••" 
                  className="w-full bg-slate-800/50 border border-slate-700/80 rounded-xl text-slate-100 placeholder:text-slate-500 outline-none px-4 py-2.5 text-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                  required
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200">
                Sign In
              </button>
            </div>

            {/* Footer Sign Up Link */}
            <p className="text-center text-sm text-slate-400 mt-2">
              Don't have an account?{' '}
              <a href="#register" className="font-medium text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4">
                Sign up
              </a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
