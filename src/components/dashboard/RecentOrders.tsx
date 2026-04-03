import { mockOrders } from "@/lib/mock-data";

const statusStyles = {
  open: 'bg-primary/10 text-primary',
  filled: 'bg-success/10 text-success',
  cancelled: 'bg-muted text-muted-foreground',
  partial: 'bg-warning/10 text-warning',
};

const RecentOrders = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-sm font-semibold text-foreground mb-4">Recent Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-2 text-left text-xs font-medium text-muted-foreground">Pair</th>
              <th className="pb-2 text-left text-xs font-medium text-muted-foreground">Side</th>
              <th className="pb-2 text-right text-xs font-medium text-muted-foreground">Price</th>
              <th className="pb-2 text-right text-xs font-medium text-muted-foreground">Amount</th>
              <th className="pb-2 text-right text-xs font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.slice(0, 5).map((order) => (
              <tr key={order.id} className="border-b border-border/50 last:border-0">
                <td className="py-2.5 font-mono text-xs text-foreground">{order.pair}</td>
                <td className="py-2.5">
                  <span className={`text-xs font-medium ${order.side === 'buy' ? 'text-success' : 'text-destructive'}`}>
                    {order.side.toUpperCase()}
                  </span>
                </td>
                <td className="py-2.5 text-right font-mono text-xs text-foreground">${order.price.toLocaleString()}</td>
                <td className="py-2.5 text-right font-mono text-xs text-muted-foreground">{order.amount}</td>
                <td className="py-2.5 text-right">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
