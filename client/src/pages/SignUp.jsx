  import React from "react";
  import { useState } from "react";
  import axios from "axios"
  const SignUp = () => {

    const [formData, setFormData]= useState({
      username:"",
      email:"",
      password:""
    })
    const [error, setError]= useState({});
    const [loader,setLoader]= useState(false);

    const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }

    const validateForm =()=>{
      let newErrors={};
      if(!formData.username.trim()){
        newErrors.username="Name is Required!!"
      }
      if(!formData.email.trim()){
        newErrors.email="Email is Required!!"
      }
      else if(!/\S+@\S+\.\S+/.test(formData.email)){
        newErrors.email= "Please Enterv Email Address!!"
      }

      if(!formData.password.trim()){
        newErrors.password= "Password is Required!!"
      }
      else if(formData.password.length < 6 ){
        newErrors.password="Password must be atlest 6 characters"
      }

      setError(newErrors)
      return Object.keys(newErrors).length===0
    }

    const handleSubmit =async (e)=>{
      e.preventDefault();

      if(!validateForm()) return

      try {
        setLoader(true);
        const response= await axios.post("http://localhost:5000/api/auth/signup",
        formData      
        );
          alert(response.data.message || "SignUp Successfull")
          setFormData({
            username:"",
            email:"",
            password:""
          });

          setError({})
      }
    
      catch (error) {
        console.log(error)
        alert(error.response?.data?.message|| "Something Went Wrong ")
      }
      finally
      {
        setLoader(false)
      }
    }
    return (
      <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              src="https://images.unsplash.com/photo-1517842645767-c639042777db"
              alt="Your Company"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  UserName
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="username"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                  {
                    error.username && (
                      <p className="text-red-600 text-sm mt-1">{error.username}</p>
                    )
                  }
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                  {
                    error.email && (
                      <p className="text-red-600 text-sm mt-1">{error.email}</p>
                    )
                  }
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-100"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                      htmlForgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                  {
                    error.password && (
                      <p className="text-red-600 text-sm mt-1">{error.password}</p>
                    )
                  }
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loader}
                  className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sign in
                  {loader ? "Creating Account... ":" Sign Up"}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-400">
              Not a member?
              <a
                href="#"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                SignUp with us to save you experience!
              </a>
            </p>
          </div>
        </div>
      </>
    );
  };

  export default SignUp;
