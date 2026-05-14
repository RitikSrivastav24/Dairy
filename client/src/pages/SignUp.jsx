import React from "react";
import { useState } from "react";
import axios from "axios"
const SignUp = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState({});
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Name is Required!!"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is Required!!"
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please Enterv Email Address!!"
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is Required!!"
    }
    else if (formData.password.length < 6) {
      newErrors.password = "Password must be atlest 6 characters"
    }

    setError(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return

    try {
      setLoader(true);
      const response = await axios.post("http://localhost:5000/api/auth/signup",
        formData
      );
      alert(response.data.message || "SignUp Successfull")
      setFormData({
        username: "",
        email: "",
        password: ""
      });

      setError({})
    }

    catch (error) {
      console.log(error)
      alert(error.response?.data?.message || "Something Went Wrong ")
    }
    finally {
      setLoader(false)
    }
  }
  return (
    <>
      <div className="min-h-screen flex bg-slate-950 justify-center items-center p-4">
        {/* Glow Effect Layer */}
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-30 animate-pulse"></div>

          {/* Main Card */}
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full p-8 sm:p-10 backdrop-blur-xl">

            {/* Header Section */}
            <div className="flex flex-col gap-3 items-center text-center mb-8">
              <div className="p-1 rounded-full bg-slate-800 border border-slate-700 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db"
                  alt="Your Company"
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-extrabold text-2xl tracking-tight text-slate-100">
                  Sign in to your account
                </h2>
                <p className="text-sm text-slate-400 mt-1">Enter your details to access your account</p>
              </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-5">

              {/* Username Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="username" className="font-semibold text-xs uppercase tracking-wider text-slate-400">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="username"
                  placeholder="Enter your username"
                  className="w-full bg-slate-800/50 border border-slate-700/80 rounded-xl text-slate-100 placeholder:text-slate-500 outline-none px-4 py-2.5 text-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                {error.username && (
                  <p className="text-red-400 text-xs font-medium mt-1 pl-1">{error.username}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-semibold text-xs uppercase tracking-wider text-slate-400">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="name@example.com"
                  className="w-full bg-slate-800/50 border border-slate-700/80 rounded-xl text-slate-100 placeholder:text-slate-500 outline-none px-4 py-2.5 text-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                {error.email && (
                  <p className="text-red-400 text-xs font-medium mt-1 pl-1">{error.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="font-semibold text-xs uppercase tracking-wider text-slate-400">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full bg-slate-800/50 border border-slate-700/80 rounded-xl text-slate-100 placeholder:text-slate-500 outline-none px-4 py-2.5 text-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                {error.password && (
                  <p className="text-red-400 text-xs font-medium mt-1 pl-1">{error.password}</p>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loader}
                  className="w-full flex justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200"
                >
                  {loader ? "Creating Account..." : "Sign Up"}
                </button>
              </div>
            </form>

            {/* Footer Text */}
            <p className="mt-8 text-center text-sm text-slate-400">
              Not a member?{' '}
              <a
                href="#"
                className="font-medium text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
              >
                SignUp with us to save your experience!
              </a>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
