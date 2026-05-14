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
