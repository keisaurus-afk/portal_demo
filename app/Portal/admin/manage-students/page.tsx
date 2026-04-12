export default function ManageStudents() {
  return (
    <div className="p-6">
       <div className="p-4 bg-white flex justify-between items-center shadow rounded-t-xl">
          <h2 className="text-xl font-bold">Manage Students</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Student</button>
       </div>
       <div className="bg-white p-6 shadow rounded-b-xl">
          <p className="text-gray-500">Student List and Table goes here...</p>
       </div>
    </div>
  );
}