import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";


const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [volunteers, setVolunteers] = useState(
    JSON.parse(localStorage.getItem("volunteers")) || []
  );

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const updatedVolunteers = [...volunteers, formData];
    localStorage.setItem("volunteers", JSON.stringify(updatedVolunteers));
    setVolunteers(updatedVolunteers);
    try{
      let res = await axios.post("https://wildlife-backend-oo00.onrender.com/jointeam", formData);
      // let res = await axios.post("http://localhost:8080/jointeam", formData);
      toast.success(res.data.message);
    }catch(err){
      console.error("Error submitting form", err);
      toast.error("Failed to submit the form. Please try again later.");
      return;
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left Section - Motivation & Highlights */}
        <div className="lg:col-span-2 space-y-10">
          {/* Hero Section */}
          <div className="bg-green-100 p-10 rounded-xl shadow-md hover:shadow-2xl transition">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Be the Change for Wildlife</h2>
            <p className="text-gray-700 text-lg">
              The Government of India is launching several initiatives for environmental sustainability. You can be part of this movement by volunteering to protect wildlife, spread awareness, and help create a better ecosystem for future generations.
            </p>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-xl p-8 space-y-6 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-green-700">Volunteer Form</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="1234567890"
                />
              </div>
              {/* <div className="flex items-center mt-8 space-x-2">
                <input
                  type="checkbox"
                  name="isIndianCitizen"
                  checked={formData.isIndianCitizen}
                  onChange={handleChange}
                  className="h-5 w-5 text-green-600"
                />
                <label className="text-gray-700 px-2">I am a citizen of India</label>
              </div> */}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Why do you want to volunteer?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Your thoughts..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition"
            >
              Join the Initiative
            </button>
          </form>
        </div>

        {/* Right Section - Stats & Motivation Cards */}
        <div className="space-y-6">
          <div className="bg-white border-l-4 border-green-600 shadow-md hover:shadow-lg transition p-4 rounded-md text-center">
            <h4 className="text-xl font-bold text-green-800">10,000+ Volunteers Joined</h4>
            <p className="text-gray-600 text-sm">Already part of our growing network across India</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="text-gray-700">
              “Volunteering here helped me connect with nature deeply and gave me a sense of purpose.”
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="text-gray-700">
              “Being part of a government-supported cause made me proud. Let’s preserve our forests together!”
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="text-gray-700">
              “The initiative brings communities together for the environment. Highly recommended!”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
