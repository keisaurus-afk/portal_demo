"use client"; // Required for useState and search logic

import React, { useState } from 'react';

// Updated teacher data with specific IDs
const teachersData = [
  {
    id: 1,
    teacherId: "T-2024-001",
    name: "Dr. Emily Chen",
    role: "Department Head",
    department: "Science",
    email: "emily.chen@college.edu",
    status: "Active",
  },
  {
    id: 2,
    teacherId: "T-2024-002",
    name: "Prof. Marcus Rivera",
    role: "Senior Instructor",
    department: "Information Technology",
    email: "m.rivera@college.edu",
    status: "Active",
  },
  {
    id: 3,
    teacherId: "T-2024-003",
    name: "Engr. Sarah Santos",
    role: "Lead Researcher",
    department: "Engineering",
    email: "s.santos@college.edu",
    status: "On Leave",
  }
];

export default function ManageTeachers() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic: Checks if name or teacherId includes the search text
  const filteredTeachers = teachersData.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.teacherId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="p-4 bg-white flex flex-col md:flex-row justify-between items-center shadow rounded-t-xl border-b border-gray-100 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <h2 className="text-xl font-bold text-gray-800 whitespace-nowrap">Faculty Management</h2>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-sm w-full md:w-auto">
          Add Faculty
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 shadow rounded-b-xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="text-gray-500 uppercase text-xs tracking-wider border-b">
              <th className="pb-4 font-semibold">Teacher ID</th>
              <th className="pb-4 font-semibold">Faculty Name</th>
              <th className="pb-4 font-semibold">Department</th>
              <th className="pb-4 font-semibold">Status</th>
              <th className="pb-4 font-semibold">Role</th>
              <th className="pb-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredTeachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50 transition-colors group">
                <td className="py-4 text-sm font-mono text-gray-600">
                  {teacher.teacherId}
                </td>
                <td className="py-4">
                  <div className="font-semibold text-gray-900">
                    {teacher.name}
                  </div>
                  <div className="text-xs text-gray-500">{teacher.email}</div>
                </td>
                <td className="py-4 text-sm text-gray-700">
                  {teacher.department}
                </td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium 
                    ${teacher.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'}`}>
                    {teacher.status}
                  </span>
                </td>
                <td className="py-4 text-sm font-semibold text-gray-800">
                  {teacher.role}
                </td>
                <td className="py-4 text-right">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State when no results match search */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 italic">No faculty members match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}