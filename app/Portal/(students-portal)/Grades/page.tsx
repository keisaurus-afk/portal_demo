export default function GradesPage() {
  const grades = [
    { course: "Computer Programming 1", instructor: "Mr. Raymond Grulla", grade: "1.25", units: "3", status: "Complete" },
    { course: "Database Systems", instructor: "Mr. Raymond Grulla", grade: "1.75", units: "3", status: "Complete" },
    { course: "Modern Math", instructor: "Ms. Lujimae Quijano", grade: "1.50", units: "2", status: "Complete" },
  ];

  
  return (

    
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="text-lg font-semibold text-gray-800 mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Old Grades</h3>
          <select
                  name="School Year"
                  className="border border-gray-300 rounded-lg px-4 h-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                  required
                >
                  <option value="">Select Year</option>
                  <option>2022-2023</option>
                  <option>2023-2024</option>
                </select>
  </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Grades</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Course</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Grade</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Units</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {grades.map((g, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{g.course}</div>
                  <div className="text-sm text-gray-500">{g.instructor}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">{g.grade}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{g.units} Units</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">{g.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-gray-800">Overall GPA: 1.50</h4>
      </div>
    </div>
  );
}