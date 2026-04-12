export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <p className="text-blue-100">GPA</p>
          <p className="text-3xl font-bold">1.50</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Mission</h3>
          <div className="space-y-3">
                <p className="font-medium">Please return used books here.</p>             
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Vission</h3>
          <div className="space-y-3">
                <p className="font-medium">To obeserve the silence at all times</p>             
          </div>
        </div>
      </div>

    </div>
  );
}