import DashboardLayout from "@/components/layout/DashboardLayout";
import { Shield, AlertTriangle, Power } from "lucide-react";
import { Button } from "@/components/ui/button";

const riskParams = [
  { label: 'Max Order Size', value: '$5,000', description: 'Maximum value per single order' },
  { label: 'Max Daily Loss', value: '$500', description: 'Stop all bots if daily loss exceeds this' },
  { label: 'Max Open Orders', value: '50', description: 'Maximum concurrent open orders per bot' },
  { label: 'Order Refresh Rate', value: '3 sec', description: 'How often orders are refreshed' },
  { label: 'Min Balance Reserve', value: '10%', description: 'Minimum balance kept as reserve' },
  { label: 'Rate Limit Buffer', value: '20%', description: 'Safety margin below exchange rate limits' },
];

const RiskPage = () => {
  return (
    <DashboardLayout title="Risk Management" subtitle="Configure safety parameters and kill switches">
      {/* Kill Switch */}
      <div className="rounded-xl border-2 border-destructive/30 bg-destructive/5 p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Power className="h-6 w-6 text-destructive" />
            <div>
              <h3 className="font-semibold text-foreground">Emergency Kill Switch</h3>
              <p className="text-sm text-muted-foreground">Immediately stop all bots and cancel all open orders</p>
            </div>
          </div>
          <Button variant="destructive" size="lg" className="gap-2 font-semibold">
            <Power className="h-4 w-4" />
            KILL ALL BOTS
          </Button>
        </div>
      </div>

      {/* Risk Parameters */}
      <div className="rounded-xl border border-border bg-card p-6 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Risk Parameters</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {riskParams.map((param) => (
            <div key={param.label} className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs text-muted-foreground">{param.label}</p>
              <p className="text-lg font-bold font-mono text-foreground mt-1">{param.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{param.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Alerts */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <h3 className="font-semibold text-foreground">Active Alerts</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-lg border border-warning/20 bg-warning/5 p-3">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <div>
              <p className="text-sm font-medium text-foreground">AVAX Hybrid bot stopped due to API error</p>
              <p className="text-xs text-muted-foreground">2 hours ago • Auto-retry in 5 minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/20 p-3">
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">SOL Volume Gen manually stopped</p>
              <p className="text-xs text-muted-foreground">1 day ago • Manual intervention required</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RiskPage;
