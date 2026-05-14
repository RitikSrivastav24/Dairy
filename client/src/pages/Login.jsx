import React from 'react'

function Login() {
    return (
        <>
            <div className='min-h-screen flex bg-gray-800 justify-center items-center'>
               
                <div className=' bg-white rounded-2xl shadow-2xl justify-between w-96 p-8 sm:mx-auto sm:w-full sm:max-w-sm'>
                    
                    <form className='gap-4 flex flex-col'>
                        <div className='flex flex-col gap-2 items-center  mx-auto mt-2'>
                            <img src='https://res.cloudinary.com/deuydehn5/image/upload/v1778651087/d2_th6yhm.jpg' className='h-10 w-10 rounded-full mx-auto' />
                            <h1 className='font-bold text-2xl text-gray-400'>Login in to Your Account</h1>
                        </div>
                        <div className='flex flex-col gap-2  mt-2'>
                            <label className='font-medium text-sm/6 block text-gray-400'>Username</label>
                            <input type="text" name="username" id="username" className='placeholder:text-gray-400 border border-gray-400 outline-none rounded shadow focus:border-gray-300 px-2 py-1 ' placeholder='Enter Your Username' required/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-medium text-sm/6 block text-gray-400'>Password</label>
                            <input type="password" name="password" id="password" placeholder='Enter Password' className='placeholder:text-gray-400 border border-gray-400 outline-none rounded shadow focus:border-gray-300 px-2 py-1' required/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <button className='bg-blue-400 px-3 py-2 font-bold text-white rounded-2xl w-full hover:bg-blue-600'>Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
