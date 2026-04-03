import { Bot } from "@/lib/mock-data";
import { Play, Square, AlertTriangle } from "lucide-react";

interface BotStatusCardProps {
  bot: Bot;
}

const statusConfig = {
  running: { icon: Play, label: 'Running', className: 'bg-success/10 text-success' },
  stopped: { icon: Square, label: 'Stopped', className: 'bg-muted text-muted-foreground' },
  error: { icon: AlertTriangle, label: 'Error', className: 'bg-destructive/10 text-destructive' },
};

const BotStatusCard = ({ bot }: BotStatusCardProps) => {
  const status = statusConfig[bot.status];
  const StatusIcon = status.icon;

  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-foreground text-sm">{bot.name}</h3>
        </div>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}>
          <StatusIcon className="h-3 w-3" />
          {status.label}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-mono text-muted-foreground">{bot.pair}</span>
        <span className="text-xs text-muted-foreground">•</span>
        <span className="text-xs text-muted-foreground">{bot.strategy}</span>
        <span className="text-xs text-muted-foreground">•</span>
        <span className="text-xs text-muted-foreground">{bot.exchange}</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <p className="text-xs text-muted-foreground">Volume 24h</p>
          <p className="text-sm font-semibold text-foreground font-mono">${bot.volume24h.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">PnL</p>
          <p className={`text-sm font-semibold font-mono ${bot.pnl >= 0 ? 'text-success' : 'text-destructive'}`}>
            {bot.pnl >= 0 ? '+' : ''}${bot.pnl.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Orders</p>
          <p className="text-sm font-semibold text-foreground font-mono">{bot.activeOrders}</p>
        </div>
      </div>
    </div>
  );
};

export default BotStatusCard;
