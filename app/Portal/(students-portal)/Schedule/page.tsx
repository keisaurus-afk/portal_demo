export default function SchedulePage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  return (
    <div className="ClassSchedule">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Schedule</h3>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {days.map((day) => (
          <div key={day} className="border border-gray-200 rounded-lg p-3">
            <h4 className="font-semibold text-center text-gray-800 mb-3">{day}</h4>
            {day === "Monday" && (
              <div className="text-xs p-2 bg-blue-100 rounded text-blue-800 space-y-1">
                <p className="font-bold">9:00 - 10:30</p>
                <p>Algorithms</p>
                <p>Mr. Edmund Gonsay</p>
                <p>Room CS-205</p>
              </div>
            )}
            {day === "Monday" && (
              <div className="text-xs p-2 bg-red-100 rounded text-blue-800 space-y-1">
                <p className="font-bold">10:30 - 12:00</p>
                <p>Computer Programming 1</p>
                <p>Mr. Raymond Grulla</p>
                <p>Room CS-107</p>
              </div>
            )}
            {day === "Tuesday" && (
              <div className="text-xs p-2 bg-red-100 rounded text-blue-800 space-y-1">
                <p className="font-bold">10:30 - 12:00</p>
                <p>Computer Programming 1</p>
                <p>Mr. Raymond Grulla</p>
                <p>Room CS-107</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}