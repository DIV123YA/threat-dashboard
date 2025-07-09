import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function ThreatDetailPage() {
  const { id } = useParams();
  const [threat, setThreat] = useState(null);

  useEffect(() => {
    api.get(`/threats/${id}`)
      .then((res) => setThreat(res.data))
      .catch((err) => console.error("Error fetching threat:", err));
  }, [id]);

  if (!threat) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Threat Detail</h2>
      <p><strong>ID:</strong> {threat.id}</p>
      <p><strong>Description:</strong> {threat.description}</p>
      <p><strong>Category:</strong> {threat.category}</p>
      <p><strong>Severity:</strong> {threat.severity}</p>
    </div>
  );
}
