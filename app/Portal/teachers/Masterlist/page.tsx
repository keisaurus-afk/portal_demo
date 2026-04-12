import React from 'react';

const MasterListPage = () => {
  const students = [
    { id: "001", name: "Programming 1", grade: "ICT-1", attendance: "View" },
    { id: "002", name: "Introduction to Computer Concepts & Office Application", grade: "ICT-1", attendance: "View" },
    { id: "003", name: "Practical Research 1", grade: "ICT-1", attendance: "View" },
    { id: "004", name: "Programming 3", grade: "ICT-2", attendance: "View" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Master List</h2>
        <p className="text-gray-600">Overview of all students currently enrolled in your classes.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-gray-700">Student ID</th>
              <th className="p-4 font-semibold text-gray-700">Subject Name</th>
              <th className="p-4 font-semibold text-gray-700">Section</th>
              <th className="p-4 font-semibold text-gray-700">Options</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4 text-gray-600">{student.id}</td>
                <td className="p-4 font-medium text-gray-800">{student.name}</td>
                <td className="p-4 text-gray-600">{student.grade}</td>
                <td className="p-4 text-blue-600 cursor-pointer">{student.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MasterListPage;