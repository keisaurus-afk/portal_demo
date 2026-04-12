export default function ManageTeachers() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Faculty Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Placeholder for Teacher Cards */}
        <div className="bg-white p-4 shadow rounded-lg border-l-4 border-blue-500">
          <h4 className="font-bold">Dr. Emily Chen</h4>
          <p className="text-sm text-gray-600">Department Head - Science</p>
        </div>
      </div>
    </div>
  );
}