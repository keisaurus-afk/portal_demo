"use client";
import React from 'react';

const MasterListPage = () => {
  const subjects = [
    { id: "001", name: "Programming 1", section: "ICT-1" },
    { id: "002", name: "Introduction to Computer Concepts & Office Application", section: "ICT-1" },
    { id: "003", name: "Practical Research 1", section: "ICT-1" },
    { id: "004", name: "Programming 3", section: "ICT-2" },
  ];

  const handleDownload = (subjectName: string) => {
    // Logic for downloading would go here
    console.log(`Downloading list for: ${subjectName}`);
    alert(`Generating download for ${subjectName}...`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Master List</h2>
        <p className="text-gray-600">Overview of all subjects and sections currently managed.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 font-semibold text-gray-700">Subject ID</th>
                <th className="p-4 font-semibold text-gray-700">Subject Name</th>
                <th className="p-4 font-semibold text-gray-700">Section</th>
                <th className="p-4 font-semibold text-gray-700 text-center">Options</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((item) => (
                <tr key={item.id} className="border-b last:border-0 hover:bg-gray-50 transition">
                  <td className="p-4 text-gray-500 font-mono text-sm">{item.id}</td>
                  <td className="p-4 font-medium text-gray-800">{item.name}</td>
                  <td className="p-4 text-gray-600">
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md text-xs font-bold text-slate-600 border border-slate-200">
                      {item.section}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-4">
                      {/* View Option */}
                      <button className="text-blue-600 hover:text-blue-800 font-bold text-sm transition-colors">
                        View
                      </button>
                      
                      <span className="text-gray-300">|</span>
                      
                      {/* Download Option */}
                      <button 
                        onClick={() => handleDownload(item.name)}
                        className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-800 font-bold text-sm transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MasterListPage;