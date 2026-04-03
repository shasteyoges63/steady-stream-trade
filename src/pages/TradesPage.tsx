import DashboardLayout from "@/components/layout/DashboardLayout";
import { mockTradeLogs } from "@/lib/mock-data";

const TradesPage = () => {
  return (
    <DashboardLayout title="Trade Logs" subtitle="Complete history of all executed trades">
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Bot</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Pair</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Side</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground">Price</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground">Amount</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground">Total</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground">Fee</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground">Time</th>
            </tr>
          </thead>
          <tbody>
            {mockTradeLogs.map((trade) => (
              <tr key={trade.id} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                <td className="px-4 py-3 text-xs text-foreground">{trade.botName}</td>
                <td className="px-4 py-3 font-mono text-xs text-foreground">{trade.pair}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold ${trade.side === 'buy' ? 'text-success' : 'text-destructive'}`}>
                    {trade.side.toUpperCase()}
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-mono text-xs text-foreground">${trade.price.toLocaleString()}</td>
                <td className="px-4 py-3 text-right font-mono text-xs text-muted-foreground">{trade.amount}</td>
                <td className="px-4 py-3 text-right font-mono text-xs text-foreground">${trade.total.toFixed(2)}</td>
                <td className="px-4 py-3 text-right font-mono text-xs text-muted-foreground">${trade.fee.toFixed(2)}</td>
                <td className="px-4 py-3 text-right text-xs text-muted-foreground">
                  {new Date(trade.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default TradesPage;
