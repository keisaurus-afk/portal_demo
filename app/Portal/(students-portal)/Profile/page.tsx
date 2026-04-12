export default function ProfilePage() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img src="https://placehold.co/150x150/4f46e5/white?text=SK" className="w-32 h-32 rounded-full border-4 border-blue-200" alt="Profile" />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Sean Khryzz Santiago</h2>
          <p className="text-gray-600">Student ID: 2024-001</p>
          <p className="text-gray-600">Year: 3rd</p>
          <div className="mt-2 flex gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Information Technology</span>
          </div>
        </div>
      </div>

    </div>
  );
}