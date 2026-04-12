// MUST HAVE THE "default" KEYWORD
export default function StatCard({ title, value, icon, color }: any) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${color}`}>
       {/* Card code here */}
    </div>
  );
}