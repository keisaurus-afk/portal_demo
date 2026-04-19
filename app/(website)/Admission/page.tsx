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
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <main className="flex-grow flex justify-center items-start px-4 pt-24 pb-20">
        <div className="w-full max-w-4xl">
          
          {/* --- HEADER SECTION --- */}
          <div className="text-center mb-16 h-20">
            <h2 className="text-4xl font-bold mb-6 ">
              Student Admission Application
            </h2>
            
            <p className="text-gray-600 mt-4">
              Complete your admission application below.
            </p>
          </div>


          {/* --- FORM START --- */}
          <div className="mx-auto">
            <form onSubmit={handleSubmit}>
              

              {/* SECTION: PERSONAL INFO */}
              <h3 className="text-2xl font-semibold mb-8">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <input
                  name="firstName"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                />
                
                <input
                  name="middleName"
                  placeholder="Middle Name"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                />
                
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                />
                
                <input
                  name="phone"
                  placeholder="Phone"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                />
                
                <input
                  type="date"
                  name="dob"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                />
                
                <select
                  name="gender"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>

                <input
                  name="nationality"
                  placeholder="Nationality"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                />
              </div>


              {/* SECTION: ACADEMIC INFO */}
              <h3 className="text-2xl font-semibold mb-8 mt-16">
                Academic Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <select
                  name="program"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                >
                  <option value="">Program</option>
                  <option>Information and Communication Technology</option>
                  <option>Hotel and Restaurant Management</option>
                </select>

                <input
                  name="yearGraduated"
                  placeholder="Year Graduated"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                />

                <input
                  name="gpa"
                  placeholder="GPA"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                />
                
                <input
                  name="school"
                  placeholder="Previous School"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white"
                  required
                />
              </div>


              {/* SECTION: ADDITIONAL INFO */}
              <h3 className="text-2xl font-semibold mb-8 mt-16">
                Additional Information
              </h3>

              <div className="space-y-6 mb-12">
                <textarea
                  name="address"
                  placeholder="Address"
                  className="border border-gray-300 rounded-lg px-4 py-3 h-24 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                  required
                />
                
                <textarea
                  name="statement"
                  placeholder="Personal Statement"
                  className="border border-gray-300 rounded-lg px-4 py-3 h-32 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                  required
                />

                {/* FILE UPLOAD BOX */}
                <div className="border-2 border-dashed border-gray-300 p-12 text-center rounded-lg bg-gray-100/30">
                  <p className="mb-6">Upload Documents</p>
                  
                  <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gray-200 px-10 py-3 rounded-lg hover:bg-gray-300 transition"
                  >
                    Browse Files
                  </button>
                </div>
              </div>


              {/* TERMS & CONDITIONS */}
              <div className="mb-12 flex items-center gap-3">
                <input type="checkbox" required className="w-4 h-4" />
                
                <span className="text-gray-700">
                  I agree to terms and conditions
                </span>
              </div>


              {/* SUBMIT BUTTON */}
              <div className="mt-16">
                <button className="w-full bg-indigo-600 text-white py-4 h-10 rounded-lg hover:bg-indigo-700 transition font-bold text-lg">
                  Submit Application
                </button>
              </div>

            </form>
          </div>
          {/* --- FORM END --- */}

        </div>
      </main>

    </div>
  );
}