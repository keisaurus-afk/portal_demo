export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="flex justify-between items-center p-4">
        <div className="relative">
          <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-lg border border-gray-300" />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>      
        <div className="flex items-center space-x-4">
        </div>
      </div>
    </header>
  );
}