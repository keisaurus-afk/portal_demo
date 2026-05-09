import './globals.css';
import Sidebar from '../../-components/Sidebar';
import Header from '../../-components/sheader'; // Adjust path as needed
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
          <Header />
          
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}