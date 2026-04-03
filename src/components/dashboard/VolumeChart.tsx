import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { mockVolumeData } from "@/lib/mock-data";

const VolumeChart = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-sm font-semibold text-foreground mb-4">24h Volume Distribution</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockVolumeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" />
            <XAxis dataKey="time" tick={{ fill: 'hsl(215 20% 55%)', fontSize: 11 }} />
            <YAxis tick={{ fill: 'hsl(215 20% 55%)', fontSize: 11 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{ backgroundColor: 'hsl(222 47% 10%)', border: '1px solid hsl(222 30% 16%)', borderRadius: 8, color: 'hsl(210 40% 95%)' }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            />
            <Bar dataKey="buys" stackId="a" fill="hsl(142 71% 45%)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="sells" stackId="a" fill="hsl(0 72% 51%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <div className="flex items-center gap-1.5"><div className="h-2.5 w-2.5 rounded-sm bg-success" /><span className="text-xs text-muted-foreground">Buys</span></div>
        <div className="flex items-center gap-1.5"><div className="h-2.5 w-2.5 rounded-sm bg-destructive" /><span className="text-xs text-muted-foreground">Sells</span></div>
      </div>
    </div>
  );
};

export default VolumeChart;
