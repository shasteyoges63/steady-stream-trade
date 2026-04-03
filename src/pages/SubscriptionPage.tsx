import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Building2 } from "lucide-react";

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    icon: Zap,
    description: 'For individual traders getting started',
    features: ['2 active bots', 'Spread strategy only', '1 exchange', 'Basic analytics', 'Email support'],
    current: false,
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    icon: Crown,
    description: 'Full access for serious market makers',
    features: ['10 active bots', 'All strategies', '3 exchanges', 'Advanced analytics', 'Priority support', 'Risk management', 'Custom intervals'],
    current: true,
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$299',
    period: '/month',
    icon: Building2,
    description: 'For teams and institutional traders',
    features: ['Unlimited bots', 'All strategies + custom', 'Unlimited exchanges', 'Full analytics suite', '24/7 dedicated support', 'Advanced risk engine', 'API access', 'Multi-user teams', 'IP whitelisting'],
    current: false,
    highlight: false,
  },
];

const SubscriptionPage = () => {
  return (
    <DashboardLayout title="Subscription" subtitle="Manage your plan and billing">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl border p-6 transition-all ${
              plan.highlight
                ? 'border-primary/50 bg-primary/5 glow-primary'
                : 'border-border bg-card'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <plan.icon className={`h-5 w-5 ${plan.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
              <h3 className="font-semibold text-foreground">{plan.name}</h3>
              {plan.current && (
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">Current</span>
              )}
            </div>
            <div className="mb-2">
              <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-5">{plan.description}</p>

            <ul className="space-y-2.5 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className={`h-3.5 w-3.5 ${plan.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              className={`w-full ${plan.highlight ? 'gradient-primary text-primary-foreground' : ''}`}
              variant={plan.highlight ? 'default' : 'outline'}
              disabled={plan.current}
            >
              {plan.current ? 'Current Plan' : 'Upgrade'}
            </Button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default SubscriptionPage;
