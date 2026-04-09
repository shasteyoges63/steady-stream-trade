import { Bot, BarChart3, Shield, Layers, RefreshCw, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Smart Trading Bots",
    description: "Deploy multiple bots per trading pair with configurable strategies — spread, grid, volume generation, and price support.",
  },
  {
    icon: Layers,
    title: "Multi-Strategy Engine",
    description: "Layer strategies on a single bot. Combine spread maintenance with volume generation for maximum effectiveness.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Execution",
    description: "Bots run 24/7 with 1-5 second intervals, automatically refreshing orders and repositioning near market price.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Built-in max order size limits, daily loss caps, balance validation, and an emergency kill switch for instant shutdown.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track volume, PnL, order fill rates, and bot performance through an intuitive, data-rich dashboard.",
  },
  {
    icon: Zap,
    title: "Randomization Layer",
    description: "Prevent predictable bot behavior with randomized price variations, order sizes, and execution intervals.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Features</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Everything You Need to <span className="text-gradient">Make Markets</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Professional-grade tools for automated liquidity management across crypto exchanges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card/50 p-6 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(172_66%_50%/0.08)] transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
