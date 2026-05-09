"use client";

import React, { useState } from 'react';

// --- TypeScript Interfaces for Props ---
interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  readOnly?: boolean;
  value?: string;
}

interface SelectFieldProps {
  label: string;
  options: string[];
}

// --- Helper Components ---
const InputField: React.FC<InputFieldProps> = ({ label, type = "text", placeholder, defaultValue, readOnly, value }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-black uppercase text-slate-400 ml-1">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      defaultValue={defaultValue}
      readOnly={readOnly}
      value={value}
      className={`w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-slate-300 ${readOnly ? 'bg-slate-100 cursor-not-allowed text-slate-500 font-bold' : ''}`} 
    />
  </div>
);

const SelectField: React.FC<SelectFieldProps> = ({ label, options }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-black uppercase text-slate-400 ml-1">{label}</label>
    <div className="relative">
      <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-yellow-400 transition-all appearance-none text-sm text-slate-700">
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
        <i className="fas fa-chevron-down text-xs"></i>
      </div>
    </div>
  </div>
);

// --- Main Dashboard Component ---
export default function AdmissionDashboard() {
  const [activeTab, setActiveTab] = useState<'admission' | 'enrollment'>('admission');
  const [isApproved, setIsApproved] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#1E293B] p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Branding Header */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-[#451a03] tracking-tight text-uppercase">SGCST Admission</h1>
            <p className="text-slate-500 font-medium italic">Saint Gregory College of Science and Technology</p>
          </div>
          <a 
          href="/portal/admission" 
          className="text-sm font-bold text-slate-400 hover:text-red-600 transition-colors flex items-center"
          >
            Logout <i className="fas fa-sign-out-alt ml-1"></i>
            </a>
        </div>

        {/* Top Status Boxes (Navigation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Admission Box */}
          <button 
            onClick={() => setActiveTab('admission')}
            className={`relative p-8 rounded-2xl border-2 transition-all text-left flex flex-col justify-between h-48 shadow-sm ${
              activeTab === 'admission' 
              ? 'bg-yellow-400 border-yellow-500 text-yellow-950 ring-4 ring-yellow-100' 
              : 'bg-white border-slate-200 text-slate-400'
            }`}
          >
            <div className="flex justify-between items-start w-full">
              <i className="fas fa-file-signature text-3xl"></i>
              <span className={`text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter ${
                isApproved ? 'bg-green-600 text-white' : (activeTab === 'admission' ? 'bg-yellow-900/10 text-yellow-900' : 'bg-slate-100 text-slate-400')
              }`}>
                {isApproved ? 'Completed' : 'Phase 1'}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-black">Admission Form</h2>
              <p className="text-xs font-bold opacity-70 mt-1">Status: {isApproved ? 'Approved by Registrar' : 'Awaiting Submission'}</p>
            </div>
          </button>

          {/* Enrollment Box */}
          <button 
            onClick={() => setActiveTab('enrollment')}
            className={`relative p-8 rounded-2xl border-2 transition-all text-left flex flex-col justify-between h-48 shadow-sm ${
              activeTab === 'enrollment' 
              ? 'bg-yellow-400 border-yellow-500 text-yellow-950 ring-4 ring-yellow-100' 
              : 'bg-white border-slate-200 text-slate-400'
            }`}
          >
            <div className="flex justify-between items-start w-full">
              <i className="fas fa-university text-3xl"></i>
              <span className={`text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter ${
                isApproved ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-400'
              }`}>
                {isApproved ? 'Unlocked' : 'Locked'}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-black">Enrollment Form</h2>
              <p className="text-xs font-bold opacity-70 mt-1">Status: {isApproved ? 'Ready for Enlistment' : 'Unlock requires Approval'}</p>
            </div>
          </button>
        </div>

        {/* Main Form Display Area */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 min-h-[600px]">
          
          {activeTab === 'admission' ? (
            /* --- ADMISSION FORM --- */
            <div className="animate-in fade-in duration-500">
              <div className="mb-10 pb-4 border-b border-slate-100">
                <h3 className="text-2xl font-black text-[#451a03]">Personal Information</h3>
                <p className="text-slate-400 text-sm">Please provide accurate details for your application.</p>
              </div>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField label="First Name *" placeholder="Juan" />
                  <InputField label="Middle Name" placeholder="Protacio" />
                  <InputField label="Last Name *" placeholder="Dela Cruz" />
                  <InputField label="Email Address *" type="email" placeholder="juan@example.com" />
                  <InputField label="Phone Number *" placeholder="+63 9xx xxx xxxx" />
                  <InputField label="Date of Birth *" type="date" />
                  <SelectField label="Gender *" options={["Select Gender", "Male", "Female", "Other"]} />
                  <InputField label="Nationality *" placeholder="Filipino" />
                </div>

                <div>
                  <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-6 pt-4">Academic Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectField label="Desired Track/Strand *" options={["Select a Track", "Information and Communication Technology", "Hotel and Restaurant Management"]} />
                    <InputField label="Previous School Name *" placeholder="High School Name" />
                    <InputField label="Year Graduated *" placeholder="2024" />
                    <InputField label="General Average *" placeholder="90.00" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-6 pt-4">Address Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2"><InputField label="Street Address *" placeholder="Unit/House No, Building, Street" /></div>
                    <InputField label="City / Municipality *" placeholder="Manila" />
                    <InputField label="State / Province *" placeholder="Metro Manila" />
                    <InputField label="Zip / Postal Code *" placeholder="1000" />
                    <InputField label="Country *" placeholder="Philippines" defaultValue="Philippines" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-6 pt-4">Requirements & Additional Info</h4>
                  <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Personal Statement *</label>
                      <textarea rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-yellow-400 transition-all text-sm" placeholder="Why do you want to join SGCST?"></textarea>
                    </div>
                    <div className="p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 text-center">
                      <i className="fas fa-upload text-2xl text-slate-300 mb-2"></i>
                      <p className="text-sm font-bold text-slate-600">Required Documents *</p>
                      <p className="text-xs text-slate-400 mb-4">Upload Report Card and Birth Certificate (PDF, JPG, PNG)</p>
                      <button className="px-6 py-2 bg-white border border-slate-300 rounded-lg text-[10px] font-black uppercase hover:bg-slate-50">Browse Files</button>
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 accent-yellow-500 rounded" />
                      <span className="text-xs font-medium text-slate-500">I certify that all information provided is true and correct.</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="w-full py-5 bg-[#451a03] text-white rounded-2xl font-black hover:bg-[#2d1102] transition-all shadow-xl uppercase tracking-widest">
                  Submit Application
                </button>
              </form>
            </div>
          ) : (
            /* --- ENROLLMENT FORM --- */
            <div className="animate-in fade-in duration-500">
              {isApproved ? (
                <div>
                  <div className="mb-10 pb-4 border-b border-slate-100">
                    <h3 className="text-2xl font-black text-[#451a03]">Account Setup</h3>
                    <p className="text-slate-400 text-sm">Create your student portal access.</p>
                  </div>

                  <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Student ID" readOnly value="SGCST-2026-0001" />
                      <div className="hidden md:block"></div>
                      <InputField label="Password *" type="password" placeholder="••••••••" />
                      <InputField label="Confirm Password *" type="password" placeholder="••••••••" />
                    </div>

                    <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-6 pt-4">Personal Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <InputField label="Last Name *" placeholder="Dela Cruz" />
                      <InputField label="First Name *" placeholder="Juan" />
                      <InputField label="Middle Name" placeholder="Protacio" />
                      <SelectField label="Suffix" options={["None", "Jr.", "Sr.", "II", "III"]} />
                    </div>

                    <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-6 pt-4">Academic Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <SelectField label="Enrollment Type *" options={["Select", "New Student", "Transferee"]} />
                      <SelectField label="Grade Level *" options={["Select", "Grade 11", "Grade 12"]} />
                      <SelectField label="Track/Strand *" options={["Select your track", "TVL — ICT", "TVL — HRM"]} />
                      <InputField label="LRN" placeholder="12-digit LRN" />
                      <div className="md:col-span-2"><InputField label="Previous School" placeholder="School Name" /></div>
                    </div>

                    <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-6 pt-4">Emergency Contact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <InputField label="Contact Person *" placeholder="Full Name" />
                      <InputField label="Relationship *" placeholder="e.g. Guardian" />
                      <InputField label="Contact Number *" placeholder="+63 9xx xxx xxxx" />
                    </div>

                    <div className="pt-6">
                      <label className="flex items-center gap-3 cursor-pointer group mb-10">
                        <input type="checkbox" className="w-5 h-5 accent-green-600 rounded" />
                        <span className="text-xs font-medium text-slate-500">I agree to the Data Privacy Policy and Enrollment Terms.</span>
                      </label>
                      <button type="submit" className="w-full py-5 bg-[#166534] text-white rounded-2xl font-black hover:bg-[#14532d] transition-all shadow-xl uppercase tracking-widest">
                        Submit Enrollment Form
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-300 border-2 border-dashed border-slate-200">
                    <i className="fas fa-lock text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-400 mb-2 uppercase">Enrollment Locked</h3>
                  <p className="text-slate-400 max-w-sm text-sm">Access is granted once the <span className="text-[#451a03] font-black underline decoration-yellow-400">Admission Form</span> is approved by the registrar.</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* --- Admin Simulator (Toggle Approval Status) --- */}
        <div className="mt-12 text-center">
           <button 
             onClick={() => setIsApproved(!isApproved)}
             className="text-[9px] font-bold text-slate-300 hover:text-slate-500 uppercase tracking-[0.3em] transition-all"
           >
             {isApproved ? 'Admin: Set Status to Pending' : 'Admin: Approve Admission'}
           </button>
        </div>
      </div>
    </div>
  );
}