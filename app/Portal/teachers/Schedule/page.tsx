import React from 'react';

const SchedulePage = () => {
  const periods = [
    { time: "08:00 AM", subject: "Mathematics - Grade 10", room: "Room 302" },
    { time: "09:30 AM", subject: "Advanced Algebra", room: "Room 305" },
    { time: "11:00 AM", subject: "Free Period", room: "Teacher's Lounge" },
    { time: "01:00 PM", subject: "Geometry - Grade 9", room: "Room 201" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Class Schedule</h2>
      <div className="grid gap-4">
        {periods.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-800 flex justify-between items-center">
            <div>
              <p className="text-blue-800 font-bold">{item.time}</p>
              <h3 className="text-lg font-medium">{item.subject}</h3>
            </div>
            <div className="text-gray-500 italic">
              <i className="fas fa-map-marker-alt mr-2"></i>{item.room}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;