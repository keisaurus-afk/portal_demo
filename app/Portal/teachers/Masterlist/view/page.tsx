"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SubjectDetails {
  scheduleCode: string;
  name: string;
  section: string;
  department: string;
}

interface Student {
  id: string;
  studentNumber: string;
  name: string;
}

export default function StudentMasterListPage() {
  const [subjectInfo] = useState<SubjectDetails>({
    scheduleCode: "20260001",
    name: "Programming 1",
    section: "ICT-1",
    department: "ICT",
  });

  const [students] = useState<Student[]>([
    { id: "1", studentNumber: "2026-0041", name: "Alexander, Ethan J." },
    { id: "2", studentNumber: "2026-0102", name: "Bautista, Maria Clara S." },
    { id: "3", studentNumber: "2026-0089", name: "Cruz, Juanito D." },
    { id: "4", studentNumber: "2026-0214", name: "Santos, Josephine G." },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [missingStudentNumber, setMissingStudentNumber] = useState("");

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.studentNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!missingStudentNumber.trim()) return;

    console.log(`Requested addition for student number: ${missingStudentNumber}`);
    alert(`Request submitted successfully for Student ID: ${missingStudentNumber}`);
    
    setMissingStudentNumber("");
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6 relative">
      
      <div className="p-5 bg-white shadow-sm rounded-t-xl border border-gray-200 border-b-gray-100">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Link
                href="/portal/teachers/masterlist"
                className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                Back to Master List
              </Link>

              <div className="space-y-1 mt-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded">
                    {subjectInfo.scheduleCode}
                  </span>
                  <span className="px-2 py-0.5 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 rounded">
                    {subjectInfo.section}
                  </span>
                  <span className="text-xs text-gray-400">|</span>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {subjectInfo.department} Department
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">{subjectInfo.name}</h2>
                <p className="text-xs text-gray-500">
                  This is the Master list of officially enrolled student accounts for this subject.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="py-1.5 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-xs rounded-md transition shadow-sm inline-flex items-center gap-1"
            >
              <span>Request Missing Student</span>
            </button>
          </div>

          <div className="relative w-full md:w-64 md:self-end">
            <input
              type="text"
              placeholder="Search student or number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      </div>

      <div className="bg-white p-6 shadow-sm rounded-b-xl border border-t-0 border-gray-200 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="text-gray-500 uppercase text-xs border-b border-gray-200 bg-gray-50/50">
              <th className="p-4 font-semibold text-gray-700 w-1/3">Student Number</th>
              <th className="p-4 font-semibold text-gray-700 w-2/3">Student Name</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50/80 transition">
                <td className="p-4 text-gray-500 font-mono text-sm">
                  {student.studentNumber}
                </td>
                <td className="p-4 font-medium text-gray-800">
                  {student.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredStudents.length === 0 && (
          <div className="text-center py-10 text-gray-500 italic">
            No enrolled students match your search criteria.
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl border border-gray-100 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
            
            <div className="p-5 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">Report Missing Student</h3>
              <p className="text-xs text-gray-500 mt-1">
                If an enrolled student is not showing on this sheet, submit their student number to sync records.
              </p>
            </div>

            <form onSubmit={handleRequestSubmit}>
              <div className="p-5 space-y-4">
                <div>
                  <label htmlFor="studentNumber" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Student Number
                  </label>
                  <input
                    id="studentNumber"
                    type="text"
                    required
                    placeholder="e.g., 2026-0001"
                    value={missingStudentNumber}
                    onChange={(e) => setMissingStudentNumber(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="p-4 bg-gray-50 flex justify-end items-center gap-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setMissingStudentNumber("");
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition shadow-sm"
                >
                  Submit Request
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}