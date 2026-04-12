"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/Portal/teachers/Dashboard', icon: 'fas fa-tachometer-alt' },
  { name: 'Grades', href: '/Portal/teachers/Grades', icon: 'fas fa-graduation-cap' },
  { name: 'Schedule', href: '/Portal/teachers/Schedule', icon: 'fas fa-calendar-alt' },
  { name: 'Master List', href: '/Portal/teachers/Masterlist', icon: 'fas fa-users' },
  { name: 'Settings', href: '/Portal/teachers/Settings', icon: 'fas fa-cog' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    // Changed bg-blue-800 to bg-yellow-500 (Primary yellow base)
    <div className="w-64 bg-yellow-500 text-yellow-950 flex flex-col h-full shrink-0 shadow-lg">
      
      {/* Header section with a slightly darker yellow border */}
      <div className="p-5 border-b border-yellow-600">
        <h1 className="text-xl font-bold">Teacher Portal</h1>
        <p className="text-sm font-medium opacity-80">Mr. Santiago</p>
      </div>

      <nav className="mt-5 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-6 py-3 transition-all duration-200 ${
                isActive 
                  ? 'bg-yellow-600 text-white shadow-inner' // Darker yellow for active
                  : 'text-yellow-900 hover:bg-yellow-400 hover:text-yellow-950' // Light hover effect
              }`}
            >
              <i className={`${item.icon} mr-3 w-5 text-center`}></i> 
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <Link 
        href="/auth/students-portal" 
        className="flex items-center w-full px-6 py-3 text-yellow-900 hover:bg-yellow-600 hover:text-white transition rounded-lg"
        >
        <i className="fas fa-sign-out-alt mr-3"></i> 
        <span>Logout</span>
      </Link>
    </div>
  );
}