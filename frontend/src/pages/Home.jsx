import DashboardStats from "../components/DashboardStats";
import ThreatTable from "../components/ThreatTable";

export default function Home() {
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/threat_bg.png')" }}
    >
      <div className="w-full h-full bg-black bg-opacity-75 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-xl">
              🛡️ Threat Intelligence Dashboard
            </h1>
            <p className="text-lg text-gray-300 mt-3">
              Real-time insights into global cybersecurity threats
            </p>
          </header>

          <section className="mb-12">
            <DashboardStats />
          </section>

          <section>
            <ThreatTable />
          </section>
        </div>
      </div>
    </div>
  );
}
