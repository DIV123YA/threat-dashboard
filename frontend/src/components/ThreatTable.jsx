import React, { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function ThreatTable() {
  const [threats, setThreats] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchThreats = async () => {
    try {
      const response = await api.get("/threats", {
        params: {
          page,
          limit: 10,
          category,
          search,
        },
      });
      setThreats(response.data);
    } catch (error) {
      console.error("Error fetching threats:", error);
    }
  };

  useEffect(() => {
    fetchThreats();
  }, [page, category, search]);

  return (
    <div className="mt-6 text-white">
      {/* Search & Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search description..."
          className="px-3 py-2 border border-white rounded bg-transparent placeholder-gray-400 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-3 py-2 border border-white rounded bg-black text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Phishing">Phishing</option>
          <option value="DDoS">DDoS</option>
          <option value="Ransomware">Ransomware</option>
          <option value="Malware">Malware</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full border border-white border-collapse text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-white px-4 py-4">ID</th>
            <th className="border border-white px-4 py-4">Description</th>
            <th className="border border-white px-4 py-4">Category</th>
            <th className="border border-white px-4 py-4">Severity</th>
          </tr>
        </thead>
        <tbody>
          {threats.map((threat) => (
            <tr
              key={threat.id}
              className="cursor-pointer hover:bg-gray-700 transition"
              onClick={() => navigate(`/threat/${threat.id}`)}
            >
              <td className="border border-white px-4 py-2">{threat.id}</td>
              <td className="border border-white px-4 py-2">{threat.description}</td>
              <td className="border border-white px-4 py-2">{threat.category}</td>
              <td className="border border-white px-4 py-2">{threat.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-6 flex items-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 rounded border border-white bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-lg font-semibold">Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 rounded border border-white bg-gray-800 hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
