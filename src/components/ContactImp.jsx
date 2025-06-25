import React from "react";
import { toast } from "react-toastify";

const ContactImp = () => {
  const handlesubmit = (e)=>{
    e.preventDefault();
    toast.success("Form submitted successfully!");
  }
  return (
    <div className="lg:max-w-7xl h-full py-10 m-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-2 px-10 z-21">
      <div className="bg-white shadow-2xl rounded-xl p-8 space-y-2 border border-gray-400">
        <form className="space-y-2" onSubmit={handlesubmit}>
          <h2 className="text-center text-2xl font-bold py-2">
            Contact Us Form
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Enter First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your First Name" required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Enter Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your Last Name" required
              />
            </div>
          </div>
          <div className="py-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Enter Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter your Email" required
            />
          </div>
          <div className="py-4">
            <label className="block text-gray-700 font-semibold mb-1">
              What Can We Help You With?
            </label>
            <textarea
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter your Message" required
            />
          </div>
          <button className="px-6 py-2 border border-gray-400 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">Submit</button>
        </form>
      </div>
      <div className="space-y-4 flex flex-col">
        <div className="text-lg text-center font-bold shadow-2xl border rounded-xl border-gray-700 text-black p-22" style={{backgroundColor:"#4ffbdf"}}>
          True Love Without Fake Feelings
        </div>
        <div className="p-6 rounded-xl flex flex-grow text-center  flex-col items-center justify-center border-l-5" style={{ backgroundColor: "#fff6ff" }}>
          <span className="text-md font-bold">savewildlife@gmail.com</span>
          <span className="text-md font-bold">
            Name: John Smith<br/> Address: 742 Evergreen Terrace<br/> City: Springfield<br/> State: Illinois<br/> ZIP Code: 62704<br/> Phone: +1 (217) 555-0199
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactImp;
