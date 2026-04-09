import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$49",
    period: "/month",
    description: "For individuals getting started",
    features: ["2 Active Bots", "1 Exchange", "Spread Strategy", "Email Support", "Basic Analytics"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$149",
    period: "/month",
    description: "For serious traders",
    features: ["10 Active Bots", "3 Exchanges", "All Strategies", "Priority Support", "Advanced Analytics", "Risk Management"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$499",
    period: "/month",
    description: "For institutions & teams",
    features: ["Unlimited Bots", "All Exchanges", "Custom Strategies", "Dedicated Support", "Full Analytics Suite", "API Access", "Multi-user"],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 transition-all duration-500 animate-fade-in ${
                plan.highlight
                  ? "border-primary/50 bg-card shadow-[0_0_40px_hsl(172_66%_50%/0.1)] scale-[1.02]"
                  : "border-border bg-card/50 hover:border-primary/20"
              }`}
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              {plan.highlight && (
                <div className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">Most Popular</div>
              )}
              <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <Link to="/login">
                <Button
                  className={`w-full font-semibold ${plan.highlight ? "gradient-primary text-primary-foreground" : ""}`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </Link>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
