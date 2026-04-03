import DashboardLayout from "@/components/layout/DashboardLayout";
import { mockOrders } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

const statusStyles = {
  open: 'bg-primary/10 text-primary',
  filled: 'bg-success/10 text-success',
  cancelled: 'bg-muted text-muted-foreground',
  partial: 'bg-warning/10 text-warning',
};

const OrdersPage = () => {
  return (
    <DashboardLayout title="Order Management" subtitle="View and manage all active and historical orders">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="text-xs">All</Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">Open</Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">Filled</Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">Cancelled</Button>
        </div>
        <Button variant="outline" size="sm" className="text-xs gap-1.5 text-destructive border-destructive/30">
          <XCircle className="h-3.5 w-3.5" /> Cancel All Open
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Bot</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Pair</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Side</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Type</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground">Price</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground">Amount</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground">Filled</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground">Time</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                <td className="px-4 py-3 text-xs text-foreground">{order.botName}</td>
                <td className="px-4 py-3 font-mono text-xs text-foreground">{order.pair}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold ${order.side === 'buy' ? 'text-success' : 'text-destructive'}`}>
                    {order.side.toUpperCase()}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{order.type}</td>
                <td className="px-4 py-3 text-right font-mono text-xs text-foreground">${order.price.toLocaleString()}</td>
                <td className="px-4 py-3 text-right font-mono text-xs text-muted-foreground">{order.amount}</td>
                <td className="px-4 py-3 text-right font-mono text-xs text-muted-foreground">{order.filled}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-xs text-muted-foreground">
                  {new Date(order.timestamp).toLocaleTimeString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default OrdersPage;
