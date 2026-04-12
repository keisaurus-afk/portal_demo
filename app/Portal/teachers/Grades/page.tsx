import React from 'react';

export default function GradesPage() {
  // Mock data - in a real app, this would come from a database
  const students = [
    { id: "2024-001", name: "Sean Khryzz Santiago", grade: "1.50" },
    { id: "2024-002", name: "Samuel Fernandez jr.", grade: "1.75"},
    { id: "2024-003", name: "Chris Brown", grade: "2.00"},
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Grades Management</h2>
        <p className="text-gray-600">Update and review student performances.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-gray-700">Student ID</th>
              <th className="p-4 font-semibold text-gray-700">Student Name</th>
              <th className="p-4 font-semibold text-gray-700">Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4 text-gray-600">{student.id}</td>
                <td className="p-4 font-medium text-gray-800">{student.name}</td>
                <td className="p-4 text-gray-600">{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}