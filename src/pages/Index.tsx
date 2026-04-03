import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import BotStatusCard from "@/components/dashboard/BotStatusCard";
import VolumeChart from "@/components/dashboard/VolumeChart";
import PnlChart from "@/components/dashboard/PnlChart";
import RecentOrders from "@/components/dashboard/RecentOrders";
import { dashboardStats, mockBots } from "@/lib/mock-data";
import { Activity, TrendingUp, Bot, ListOrdered, Target, Percent } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout title="Dashboard" subtitle="Overview of your market making operations">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <StatCard title="Volume 24h" value={`$${(dashboardStats.totalVolume24h / 1000).toFixed(1)}k`} change="+12.5% vs yesterday" changeType="positive" icon={Activity} />
        <StatCard title="Total PnL" value={`$${dashboardStats.totalPnl.toFixed(2)}`} change="+$342.10 today" changeType="positive" icon={TrendingUp} />
        <StatCard title="Active Bots" value={`${dashboardStats.activeBots}/${dashboardStats.totalBots}`} icon={Bot} />
        <StatCard title="Active Orders" value={`${dashboardStats.activeOrders}`} change="Across all bots" icon={ListOrdered} />
        <StatCard title="Success Rate" value={`${dashboardStats.successRate}%`} change="+0.3% this week" changeType="positive" icon={Target} />
        <StatCard title="Avg Spread" value="0.18%" change="Within target" changeType="neutral" icon={Percent} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <VolumeChart />
        <PnlChart />
      </div>

      {/* Bots & Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-4">Active Bots</h2>
          <div className="space-y-3">
            {mockBots.map((bot) => (
              <BotStatusCard key={bot.id} bot={bot} />
            ))}
          </div>
        </div>
        <RecentOrders />
      </div>
    </DashboardLayout>
  );
};

export default Index;
