import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import VolumeChart from "@/components/dashboard/VolumeChart";
import PnlChart from "@/components/dashboard/PnlChart";
import { Activity, TrendingUp, ArrowDownUp, Clock } from "lucide-react";

const AnalyticsPage = () => {
  return (
    <DashboardLayout title="Analytics" subtitle="Detailed performance metrics and analysis">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Volume (30d)" value="$4.2M" change="+18% vs last month" changeType="positive" icon={Activity} />
        <StatCard title="Net PnL (30d)" value="$8,430" change="+$2,120 vs last month" changeType="positive" icon={TrendingUp} />
        <StatCard title="Total Trades" value="12,847" change="428/day average" icon={ArrowDownUp} />
        <StatCard title="Avg Fill Time" value="2.3s" change="-0.5s improvement" changeType="positive" icon={Clock} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VolumeChart />
        <PnlChart />
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
