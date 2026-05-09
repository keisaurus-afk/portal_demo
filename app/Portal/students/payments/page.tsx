"use client";
import React, { useState } from 'react';

// --- Types ---
interface PaymentRecord {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
}

interface StudentBalance {
  studentId: string;
  name: string;
  course: string;
  semester: string; // Added semester field
  totalBalance: number;
  records: PaymentRecord[];
}

const MOCK_DATA: StudentBalance = {
  studentId: "2024-001",
  name: "Jb Ramirez",
  course: "Information Communication Technology",
  semester: "2nd Semester, SY 2025-2026",
  totalBalance: 3000.00,
  records: [
    { id: "1", description: "Enrollment Fee", amount: 1000, dueDate: "2026-03-15", status: "Paid" },
    { id: "2", description: "Tuition Fee - Prelims", amount: 1750, dueDate: "2026-03-15", status: "Paid" },
    { id: "3", description: "Tuition Fee - Midterms", amount: 1750, dueDate: "2026-04-10", status: "Paid" },
    { id: "4", description: "Tuition Fee - Pre-Finals", amount: 1750, dueDate: "2026-04-20", status: "Overdue" },
    { id: "5", description: "Tuition Fee - Finals", amount: 1750, dueDate: "2026-05-30", status: "Pending" },
  ]
};

const TuitionBalance: React.FC = () => {
  const [data] = useState<StudentBalance>(MOCK_DATA);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Overdue': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-amber-100 text-amber-700 border-amber-200';
    }
  };

  const formatPHP = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header / Summary Card */}
        <div className="bg-[#1e293b] rounded-3xl p-8 text-white shadow-xl mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Student Account</p>
              {/* Semester Badge */}
              <span className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-0.5 rounded border border-blue-500/30 font-bold uppercase tracking-tighter">
                {data.semester}
              </span>
            </div>
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="opacity-80 mt-1">{data.course} • ID: {data.studentId}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm mb-1 uppercase tracking-wider">Remaining Balance</p>
            <p className="text-5xl font-black text-amber-400">
              {formatPHP(data.totalBalance)}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">Fee Breakdown</h2>
            <span className="text-slate-400 text-sm italic">{data.semester}</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="px-8 py-4 font-bold">Description</th>
                  <th className="px-8 py-4 font-bold">Due Date</th>
                  <th className="px-8 py-4 font-bold">Amount</th>
                  <th className="px-8 py-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.records.map((record) => (
                  <tr key={record.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5">
                      <p className="font-semibold text-slate-700">{record.description}</p>
                    </td>
                    <td className="px-8 py-5 text-slate-500 text-sm">
                      {new Date(record.dueDate).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-8 py-5 font-mono font-bold text-slate-700">
                      {formatPHP(record.amount)}
                    </td>
                    <td className="px-8 py-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyle(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-8 bg-slate-50 flex items-center gap-4 border-t border-slate-200">
            <div className="bg-blue-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-slate-500">
              Please settle any <strong>Overdue</strong> balances at the school accounting office to avoid registration holds or clearance delays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionBalance;