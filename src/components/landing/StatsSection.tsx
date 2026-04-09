import { TrendingUp, Users, Globe, Clock } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "$2.4B+", label: "Total Volume Traded", description: "Across all active bots" },
  { icon: Users, value: "8,500+", label: "Active Traders", description: "Growing every day" },
  { icon: Globe, value: "15+", label: "Exchanges Supported", description: "Including Binance, KuCoin" },
  { icon: Clock, value: "99.9%", label: "Platform Uptime", description: "Enterprise-grade reliability" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(172_66%_50%/0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Platform Stats</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by <span className="text-gradient">Thousands</span> of Traders
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Our platform powers market making operations for traders and institutions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group text-center rounded-xl border border-border bg-card/50 p-8 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(172_66%_50%/0.08)] transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${i * 0.12}s`, opacity: 0 }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-3xl font-extrabold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
