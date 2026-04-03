import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { mockPnlData } from "@/lib/mock-data";

const PnlChart = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-sm font-semibold text-foreground mb-4">Weekly PnL</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockPnlData}>
            <defs>
              <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(172 66% 50%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(172 66% 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" />
            <XAxis dataKey="day" tick={{ fill: 'hsl(215 20% 55%)', fontSize: 11 }} />
            <YAxis tick={{ fill: 'hsl(215 20% 55%)', fontSize: 11 }} tickFormatter={(v) => `$${v}`} />
            <Tooltip
              contentStyle={{ backgroundColor: 'hsl(222 47% 10%)', border: '1px solid hsl(222 30% 16%)', borderRadius: 8, color: 'hsl(210 40% 95%)' }}
              formatter={(value: number) => [`$${value.toFixed(2)}`, 'PnL']}
            />
            <Area type="monotone" dataKey="pnl" stroke="hsl(172 66% 50%)" fill="url(#pnlGradient)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PnlChart;
