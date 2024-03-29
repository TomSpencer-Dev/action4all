import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { redirect } from "react-router-dom";
import backgroundVideo from '../assets/backgroundVideo2.mp4';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {


        toast.success("User registered successfully!", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
          closeOnClick: true
        });
        window.location.href = '/';
      } else {

        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (<>
<div className="video-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <video autoPlay loop muted className='video' style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src={backgroundVideo} type='video/mp4'/>
            </video>
          </div>
    <div className="flex pt-40 min-h-full flex-col justify-center px-6 py-12 lg:px-8 animate__animated animate__headShake">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register as a user</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-indigo-600" id="grid-event_name" type="text" placeholder="Enter first name..." value={formData.firstName}
                onChange={handleChange} name='firstName' />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-indigo-600" id="grid-event_date" type="text" placeholder="Enter last name..." value={formData.lastName}
                onChange={handleChange} name='lastName' />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Email
              </label>
              <input className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-indigo-600" id="grid-start_time" type="text" placeholder="email@user.com" value={formData.email}
                onChange={handleChange} name='email' />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Password
              </label>
              <input className="appearance-none block w-full text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-event_length" type="password" placeholder="Enter password..." value={formData.password}
                onChange={handleChange} name="password" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 focus:ring-indigo-600" htmlFor="grid-city">
                City
              </label>
              <input className="appearance-none block w-full text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Vancouver"
                name="city"
                value={formData.city}
                onChange={handleChange} />
            </div>
          </div>

<button
              className="relative text-sm font-semibold w-full" type="button"
              onClick={handleSubmit}>
              <div className="absolute inset-x-0 h-full -bottom-2 bg-gray-300 mr-4 w-full justify-center rounded-md bg-opacity-50"></div>
              <div className="relative flex w-full justify-center rounded-md bg-sky-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition transform active:translate-y-2 mr-4 "
                
              >Submit</div>
            </button>
          {/* <button className="flex w-full justify-center rounded-md bg-sky-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
            onClick={handleSubmit}>
            Submit
          </button> */}
        </form>
      </div>
    </div>
</>
  );
}

export default Register;
