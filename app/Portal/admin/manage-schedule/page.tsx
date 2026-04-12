export default function ClassSchedule() {
  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Academic Timetable</h2>
        <div className="grid grid-cols-7 gap-2">
           {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
             <div key={day} className="text-center font-bold bg-gray-100 p-2 uppercase text-xs">{day}</div>
           ))}
        </div>
      </div>
    </div>
  );
}