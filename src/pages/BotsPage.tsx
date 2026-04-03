import DashboardLayout from "@/components/layout/DashboardLayout";
import { mockBots } from "@/lib/mock-data";
import { Play, Square, AlertTriangle, Plus, Settings, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const statusConfig = {
  running: { icon: Play, label: 'Running', className: 'bg-success/10 text-success' },
  stopped: { icon: Square, label: 'Stopped', className: 'bg-muted text-muted-foreground' },
  error: { icon: AlertTriangle, label: 'Error', className: 'bg-destructive/10 text-destructive' },
};

const BotsPage = () => {
  return (
    <DashboardLayout title="Bot Management" subtitle="Create and manage your market making bots">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="text-xs">All Bots</Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">Running</Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">Stopped</Button>
        </div>
        <Button size="sm" className="gradient-primary text-primary-foreground gap-1.5">
          <Plus className="h-4 w-4" />
          Create Bot
        </Button>
      </div>

      <div className="space-y-4">
        {mockBots.map((bot) => {
          const status = statusConfig[bot.status];
          const StatusIcon = status.icon;
          return (
            <div key={bot.id} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-foreground">{bot.name}</h3>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}>
                    <StatusIcon className="h-3 w-3" />
                    {status.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {bot.status === 'running' ? (
                    <Button variant="outline" size="sm" className="text-xs gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/10">
                      <Square className="h-3 w-3" /> Stop
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="text-xs gap-1.5 text-success border-success/30 hover:bg-success/10">
                      <Play className="h-3 w-3" /> Start
                    </Button>
                  )}
                  <Button variant="ghost" size="sm"><Settings className="h-4 w-4 text-muted-foreground" /></Button>
                  <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4 text-muted-foreground" /></Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                <div><p className="text-xs text-muted-foreground">Pair</p><p className="text-sm font-mono font-medium text-foreground">{bot.pair}</p></div>
                <div><p className="text-xs text-muted-foreground">Exchange</p><p className="text-sm font-medium text-foreground">{bot.exchange}</p></div>
                <div><p className="text-xs text-muted-foreground">Strategy</p><p className="text-sm font-medium text-foreground">{bot.strategy}</p></div>
                <div><p className="text-xs text-muted-foreground">Spread</p><p className="text-sm font-mono font-medium text-foreground">{bot.spread}%</p></div>
                <div><p className="text-xs text-muted-foreground">Volume 24h</p><p className="text-sm font-mono font-medium text-foreground">${bot.volume24h.toLocaleString()}</p></div>
                <div><p className="text-xs text-muted-foreground">PnL</p><p className={`text-sm font-mono font-medium ${bot.pnl >= 0 ? 'text-success' : 'text-destructive'}`}>{bot.pnl >= 0 ? '+' : ''}${bot.pnl.toFixed(2)}</p></div>
                <div><p className="text-xs text-muted-foreground">Uptime</p><p className="text-sm font-medium text-foreground">{bot.uptime}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
};

export default BotsPage;
