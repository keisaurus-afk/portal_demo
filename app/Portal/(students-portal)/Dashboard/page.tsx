'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();

  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const changeMonth = (offset: number) => setDate(new Date(year, month + offset, 1));
  const goToday = () => setDate(new Date());

  const stats = [
    { label: 'Total Subjects', value: '168', color: 'text-blue-600', icon: '📚' },
    { label: 'Enrolled Subjects', value: '12', color: 'text-purple-600', icon: '📝' },
    { label: 'Passed Subjects', value: '0', color: 'text-emerald-600', icon: '✅' },
    { label: 'Pending Activities', value: '32', color: 'text-amber-600', icon: '🔔' },
  ];

  const cells = [];
  let day = 1;

  for (let week = 0; week < 6; week++) {
    const row = [];
    for (let d = 0; d < 7; d++) {
      if (week === 0 && d < firstDay) {
        row.push(<td key={d} className="h-16 border border-slate-100 bg-slate-50/30" />);
      } else if (day > daysInMonth) {
        row.push(<td key={d} className="h-16 border border-slate-100 bg-slate-50/30" />);
      } else {
        const isToday =
          new Date().getDate() === day &&
          new Date().getMonth() === month &&
          new Date().getFullYear() === year;

        row.push(
          <td
            key={d}
            className={`h-16 border border-slate-100 p-2 align-top transition-colors ${
              isToday ? 'bg-blue-50/40 font-black' : 'bg-white font-medium'
            }`}
          >
            <div className={`text-[10px] md:text-xs ${isToday ? 'text-blue-600' : 'text-slate-500'}`}>
              {day}
            </div>
          </td>
        );
        day++;
      }
    }
    cells.push(<tr key={week}>{row}</tr>);
    if (day > daysInMonth) break;
  }

  return (
    <div className="space-y-6 p-4 bg-gray-50/50 min-h-screen">
      
      {/* STATS: FORCED FLEX 1x4 ROW WITH ICONS */}
      <div className="flex flex-row flex-nowrap gap-3 w-full">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex-1 min-w-0 p-3 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3"
          >
            {/* Icon Container */}
            <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-xl">
              {s.icon}
            </div>
            
            <div className="min-w-0">
              <p className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 truncate">
                {s.label}
              </p>
              <p className={`text-sm md:text-2xl font-black mt-0.5 ${s.color} truncate`}>
                {s.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CALENDAR CARD */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-50">
          <h3 className="text-sm md:text-lg font-black text-slate-800 tracking-tight">
            {monthNames[month]} <span className="text-slate-300 font-light">{year}</span>
          </h3>

          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button onClick={() => changeMonth(-1)} className="px-2 md:px-3 py-1 text-[10px] font-bold text-slate-500 hover:text-black">Prev</button>
            <button onClick={goToday} className="px-3 md:px-4 py-1 text-[10px] font-black uppercase bg-white text-blue-600 shadow-sm rounded-lg mx-1">Today</button>
            <button onClick={() => changeMonth(1)} className="px-2 md:px-3 py-1 text-[10px] font-bold text-slate-500 hover:text-black">Next</button>
          </div>
        </div>

        {/* CALENDAR TABLE */}
        <div className="p-4 md:p-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden border-hidden shadow-[0_0_0_1px_rgba(241,245,249,1)]">
            <thead>
              <tr className="bg-slate-50/50">
                {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
                  <th key={d} className="p-2 md:p-3 text-[9px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{cells}</tbody>
          </table>
        </div>
      </div>

    </div>
  );
}