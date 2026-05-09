"use client";

import React from "react";

// 1. Updated interface to include time
interface Subject {
  schedCode: string;
  name: string;
  teacher: string;
  day: string;
  time: string;
  room: string;
}

interface CellProps {
  color: 'blue' | 'green' | 'orange' | 'pink' | 'purple' | 'teal';
  subject: string;
  teacher: string;
  room: string;
}

export default function Page() {
  const enrolledSubjects: Subject[] = [
    { schedCode: "10234", name: "General Mathematics", teacher: "Mr. Santos", day: "Mon/Thu", time: "12:00 - 1:00", room: "Room 201" },
    { schedCode: "10235", name: "Earth Science", teacher: "Ms. Garcia", day: "Tue/Fri", time: "12:00 - 1:00", room: "Lab 2" },
    { schedCode: "10236", name: "Intro to Philosophy", teacher: "Ms. Rodriguez", day: "Wednesday", time: "12:00 - 1:00", room: "Room 103" },
    { schedCode: "10237", name: "Practical Research 1", teacher: "Mr. Lopez", day: "Thursday", time: "1:00 - 2:00", room: "Library" },
    { schedCode: "10238", name: "Programming 1", teacher: "Ms. Torres", day: "Mon/Wed", time: "1:00 - 2:00", room: "Comp Lab A" },
    { schedCode: "10239", name: "Physical Education", teacher: "Mr. dela Cruz", day: "Fri", time: "4:00 - 5:00", room: "Gymnasium" },
    { schedCode: "10240", name: "Komunikasyon at Pananaliksik", teacher: "Mr. Bautista", day: "Tue", time: "3:00 - 4:00", room: "Room 105" },
    { schedCode: "10241", name: "Oral Communication", teacher: "Ms. Evangelista", day: "Wed", time: "4:00 - 5:00", room: "Audio Visual" },
    { schedCode: "10242", name: "Intro to Computer Concepts", teacher: "Ms. Torres", day: "Tue/Fri", time: "4:00 - 5:00", room: "Comp Lab B" },
  ];

  const timeClass = 'bg-gray-50 font-black text-gray-400 p-3 text-center border border-gray-100 text-[9px] tracking-tighter border-r-gray-200';

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-slate-100 to-slate-300 p-2 md:p-10 font-sans gap-8">
      
      {/* 1. ENROLLED SUBJECTS LIST */}
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-sm font-black uppercase tracking-widest">Enrolled Subjects List</h2>
          <span className="text-[10px] font-bold opacity-60 uppercase">S.Y. 2026-2027</span>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 text-[9px] font-black uppercase tracking-tighter text-gray-400">Sched Code</th>
                <th className="p-4 text-[9px] font-black uppercase tracking-tighter text-gray-400">Subject</th>
                <th className="p-4 text-[9px] font-black uppercase tracking-tighter text-gray-400">Day</th>
                <th className="p-4 text-[9px] font-black uppercase tracking-tighter text-gray-400">Time</th>
                <th className="p-4 text-[9px] font-black uppercase tracking-tighter text-gray-400">Room</th>
                <th className="p-4 text-[9px] font-black uppercase tracking-tighter text-gray-400">Instructor</th>
              </tr>
            </thead>
            <tbody>
              {enrolledSubjects.map((sub, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-[10px] font-mono font-bold text-indigo-400">{sub.schedCode}</td>
                  <td className="p-4 text-[11px] font-black text-gray-800 uppercase tracking-tight">{sub.name}</td>
                  <td className="p-4 text-[10px] font-bold text-gray-600 uppercase">{sub.day}</td>
                  <td className="p-4 text-[10px] font-bold text-indigo-600 tracking-tighter">{sub.time}</td>
                  <td className="p-4 text-[10px] font-mono font-bold text-blue-400">{sub.room}</td>
                  <td className="p-4 text-[10px] font-bold text-gray-400 italic">{sub.teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. CLASS SCHEDULE VISUALIZER */}
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-black text-white text-center py-4 md:py-6 border-b border-gray-800">
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em]">Weekly Time Grid</h1>
          <p className="text-[9px] font-bold opacity-50 mt-1 uppercase tracking-[0.4em]">Grade 11 - Academic Track</p>
        </div>

        <div className="p-4 md:p-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm min-w-[800px]">
            <thead>
              <tr>
                {['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <th key={day} className="bg-black text-white p-3 text-center font-black border border-gray-800 uppercase tracking-widest text-[9px]">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={timeClass}>12:00 - 1:00</td>
                <Cell color="blue" subject="General Math" teacher="Mr. Santos" room="R-201" />
                <Cell color="green" subject="Earth Science" teacher="Ms. Garcia" room="Lab 2" />
                <Cell color="orange" subject="Philosophy" teacher="Ms. Rodriguez" room="R-103" />
                <Cell color="blue" subject="General Math" teacher="Mr. Santos" room="R-201" />
                <Cell color="green" subject="Earth Science" teacher="Ms. Garcia" room="Lab 2" />
              </tr>
              <tr>
                <td className={timeClass}>1:00 - 2:00</td>
                <Cell color="teal" subject="Programming 1" teacher="Ms. Torres" room="CL-A" />
                <Cell color="pink" subject="Research 1" teacher="Mr. Lopez" room="Library" />
                <Cell color="teal" subject="Programming 1" teacher="Ms. Torres" room="CL-A" />
                <Cell color="pink" subject="Research 1" teacher="Mr. Lopez" room="Library" />
                <Cell color="orange" subject="Philosophy" teacher="Ms. Rodriguez" room="R-103" />
              </tr>
              <tr>
                <td className={timeClass}>2:00 - 3:00</td>
                <td colSpan={5} className="bg-yellow-50/50 text-center p-4 border border-yellow-100">
                   <div className="text-yellow-700 font-black uppercase tracking-[0.4em] text-[10px] italic">Lunch Break</div>
                </td>
              </tr>
              <tr>
                <td className={timeClass}>3:00 - 4:00</td>
                <Cell color="orange" subject="Oral Comm" teacher="Ms. Evangelista" room="AVR" />
                <Cell color="pink" subject="Komunikasyon" teacher="Mr. Bautista" room="R-105" />
                <Cell color="orange" subject="Oral Comm" teacher="Ms. Evangelista" room="AVR" />
                <Cell color="pink" subject="Komunikasyon" teacher="Mr. Bautista" room="R-105" />
                <Cell color="teal" subject="Computer Concepts" teacher="Ms. Torres" room="CL-B" />
              </tr>
              <tr>
                <td className={timeClass}>4:00 - 5:00</td>
                <Cell color="purple" subject="Physical Education" teacher="Mr. dela Cruz" room="Gym" />
                <Cell color="teal" subject="Computer Concepts" teacher="Ms. Torres" room="CL-B" />
                <Cell color="blue" subject="General Math" teacher="Mr. Santos" room="R-201" />
                <Cell color="purple" subject="Physical Education" teacher="Mr. dela Cruz" room="Gym" />
                <Cell color="orange" subject="Oral Comm" teacher="Ms. Evangelista" room="AVR" />
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-center gap-6 p-6 text-[8px] font-black uppercase tracking-[0.2em] border-t bg-gray-50/50">
          {legend.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${item.color} border border-gray-200`}></div>
              <span className="text-gray-400">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Cell({ color, subject, teacher, room }: CellProps) {
  const colors: Record<CellProps['color'], string> = { 
    blue: 'bg-blue-50/30', 
    green: 'bg-green-50/30', 
    orange: 'bg-orange-50/30', 
    pink: 'bg-pink-50/30', 
    purple: 'bg-purple-50/30', 
    teal: 'bg-teal-50/30' 
  };
  
  return (
    <td className={`border border-gray-100 p-3 text-center transition-all hover:bg-white cursor-default ${colors[color]}`}>
      <div className="font-black text-gray-800 leading-tight uppercase text-[10px] tracking-tight">{subject}</div>
      <div className="text-[8px] text-gray-400 mt-1 font-bold italic uppercase opacity-70">{teacher}</div>
      <div className="text-[8px] text-indigo-300 font-mono mt-0.5 font-black uppercase">{room}</div>
    </td>
  );
}

const legend = [
  { name: 'Core Math', color: 'bg-blue-100' },
  { name: 'Science', color: 'bg-green-100' },
  { name: 'HumSS / Philosophy', color: 'bg-orange-100' },
  { name: 'Research / Wika', color: 'bg-pink-100' },
  { name: 'P.E. & Health', color: 'bg-purple-100' },
  { name: 'ICT / Programming', color: 'bg-teal-100' },
];