"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/Portal/Dashboard', icon: 'fa-home' },
  { name: 'Student Info', href: '/Portal/Profile', icon: 'fa-user' },
  { name: 'Grades', href: '/Portal/Grades', icon: 'fa-chart-bar' },
  { name: 'Schedule', href: '/Portal/Schedule', icon: 'fa-calendar-alt' },
  { name: 'Students Evaluation', href: '/Portal/students-evaluation', icon: 'fa-user'},
];

export default function Sidebar() {
  const pathname = usePathname();


  return (
    <aside className="w-64 bg-yellow-400 shadow-lg flex flex-col border-r border-yellow-500">
      <div className="p-5 border-b border-yellow-500/30 flex items-center gap-3">
        <i className="fas fa-graduation-cap text-2xl text-yellow-900"></i>
        <span className="text-xl font-bold text-yellow-950">SGCST Portal</span>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-yellow-500 text-yellow-950 font-bold shadow-sm' 
                  : 'text-yellow-900/80 hover:bg-yellow-500/40 hover:text-yellow-950'
              }`}
            >
              <i className={`fas ${item.icon} mr-3 w-5`}></i>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-yellow-500/30">
        <button 
          onClick={() => window.location.href = "/Portal/students-portal/"}
          className="flex items-center w-full px-4 py-3 text-red-700 rounded-lg hover:bg-red-50 transition-colors font-semibold"
        >
          <i className="fas fa-sign-out-alt mr-3 w-5 text-center"></i>
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}