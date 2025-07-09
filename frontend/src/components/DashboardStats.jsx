import { useEffect, useState } from "react";
import api from "../api";

export default function DashboardStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/threats/stats").then((res) => setStats(res.data));
  }, []);

  if (!stats) return <p className="text-white text-center">Loading stats...</p>;

  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch flex-wrap">
      {/* Card: Total Threats */}
      <div className="flex-1 bg-gradient-to-r from-cyan-800 to-cyan-900 text-white p-6 rounded-xl shadow-xl min-w-[280px]">
        <h3 className="text-xl font-bold mb-2">Total Threats: {stats.total}</h3>
      </div>

      {/* Card: By Category */}
      <div className="flex-1 bg-gradient-to-r from-cyan-700 to-cyan-800 text-white p-6 rounded-xl shadow-xl min-w-[280px]">
        <h3 className="text-lg font-bold mb-2">Threats by Category</h3>
        <ul className="text-sm list-disc list-inside pl-6">
          {stats.categoryCounts.map((item, i) => (
            <li key={i}>
              <span className="font-semibold">{item.category}</span>: {item.count}
            </li>
          ))}
        </ul>
      </div>

      {/* Card: By Severity */}
      <div className="flex-1 bg-gradient-to-r from-cyan-700 to-cyan-800 text-white p-6 rounded-xl shadow-xl min-w-[280px]">
        <h3 className="text-lg font-bold mb-2">Threats by Severity</h3>
        <ul className="text-sm list-disc list-inside pl-6">
          {stats.severityCounts.map((item, i) => (
            <li key={i}>
              <span className="font-semibold">Severity {item.severity}</span>: {item.count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
