export default function GradesManagement() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Grades Management</h2>
        <div className="flex space-x-4 mb-6">
          <input type="text" placeholder="Search Student ID..." className="border p-2 rounded w-full" />
          <button className="bg-green-600 text-white px-6 py-2 rounded">Search</button>
        </div>
      </div>
    </div>
  );
}