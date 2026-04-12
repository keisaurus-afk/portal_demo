import './globals.css';
import Sidebar from '../../-components/Sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SGCST - Student Portal',
  description: 'Academic management system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className="flex h-screen overflow-hidden bg-gray-50">
        
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm z-10">
            <h1 className="text-xl font-bold text-gray-800">Portal</h1>
            <div className="flex items-center gap-3">
               <div className="hidden sm:block">
                 <p className="text-sm font-semibold text-gray-700 leading-none">Sean Khryzz Santiago</p>
                 <p className="text-xs text-gray-500">ID: 2024-001</p>
               </div>
            </div>
          </header>
          
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}