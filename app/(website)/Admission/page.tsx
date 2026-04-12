"use client";

import { useRef, FormEvent } from "react";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    alert(
      "Thank you for submitting your application! Our team will review your information and contact you shortly."
    );

    console.log("Form submitted:", Object.fromEntries(formData));
  };

  return (
    /* 1. Use min-h-screen and flex-col to push footer to bottom */
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* 2. flex-grow ensures this main area fills all available space */}
      <main className="flex-grow flex justify-center items-start px-4 py-8">
        <div className="w-full max-w-4xl">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Student Admission Application
            </h2>
            <p className="text-gray-600">
              Complete your admission application below.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 mx-auto mb-20">
            <form onSubmit={handleSubmit}>
              {/* Personal Info */}
              <h3 className="text-2xl font-semibold mb-6">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <input
                  name="firstName"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required
                />
                <input
                  name="middleName"
                  placeholder="Middle Name"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required
                />
                <input
                  type="date"
                  name="dob"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required
                />
                <select
                  name="gender"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              {/* Academic */}
              <h3 className="text-2xl font-semibold mb-6">
                Academic Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <select
                  name="program"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required
                >
                  <option value="">Program</option>
                  <option>Information and Communication Technology</option>
                  <option>Hotel and Restaurant Management</option>
                </select>

                <input
                  name="yearGraduated"
                  placeholder="Year Graduated"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required
                />

                <input
                  name="gpa"
                  placeholder="GPA"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required
                />
                <input
                  name="school"
                  placeholder="Previous School"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required      
                />
              </div>

              {/* Additional */}
              <h3 className="text-2xl font-semibold mb-6">
                Additional Information
              </h3>

              <div className="space-y-6 mb-10">
                <textarea
                  name="address"
                  placeholder="Address"
                  className="border border-gray-300 rounded-lg px-4 py-3 h-20 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <textarea
                  name="statement"
                  placeholder="Personal Statement"
                  className="border border-gray-300 rounded-lg px-4 py-3 h-20 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />

                {/* File Upload */}
                <div className="border-2 border-dashed border-gray-300 p-10 h-15 text-center rounded-lg">
                  <p className="mb-3">Upload Documents</p>

                  <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gray-200 px-30 py-12  rounded-lg hover:bg-gray-300 transition"
                  >
                    Browse Files
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="mb-6 flex items-start gap-2">
                <input type="checkbox" required className="mt-1" />
                <span>I agree to terms and conditions</span>
              </div>

              <button className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}