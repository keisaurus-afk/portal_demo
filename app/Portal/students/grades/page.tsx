export default function GradesPage() {
  const grades = [
    { course: "Computer Programming 1", instructor: "Mr. Raymond Grulla", grade: "95", units: "3", status: "Passed" },
    { course: "Database Systems", instructor: "Mr. Raymond Grulla", grade: "86", units: "3", status: "Passed" },
    { course: "Modern Math", instructor: "Ms. Lujimae Quijano", grade: "90", units: "2", status: "Passed" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Old Grades</h3>
        
        {/* Filter and Button Row */}
        <div className="flex flex-col md:flex-row items-end gap-4">
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">School Year</label>
              <select
                name="School Year"
                className="border border-gray-300 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white text-sm"
                required
              >
                <option value="">Select School Year</option>
                <option>2022-2023</option>
                <option>2023-2024</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Semester</label>
              <select
                name="Semester"
                className="border border-gray-300 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full bg-white text-sm"
                required
              >
                <option value="">Select Semester</option>
                <option>1st Semester</option>
                <option>2nd Semester</option>
              </select>
            </div>
          </div>

          {/* Show Grades Button */}
          <button className="w-full md:w-auto px-8 h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors shadow-sm whitespace-nowrap">
            Show Grades
          </button>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Grades</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Subjects</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Units</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {grades.map((g, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{g.course}</div>
                  <div className="text-sm text-gray-500">{g.instructor}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-blue-800">{g.grade}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{g.units} Units</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-green-100 text-green-800">{g.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-900">General Average: 90</h4>
      </div>
    </div>
  );
}