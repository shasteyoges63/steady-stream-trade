import { Key, Bot, Play, BarChart3 } from "lucide-react";

const steps = [
  { icon: Key, title: "Connect Exchange", description: "Securely link your Binance API keys with AES-256 encryption. No withdrawal permissions needed." },
  { icon: Bot, title: "Configure Bots", description: "Set up trading pairs, choose strategies, and define risk parameters for each bot." },
  { icon: Play, title: "Start Trading", description: "Launch your bots and let them manage liquidity automatically, 24/7." },
  { icon: BarChart3, title: "Monitor & Optimize", description: "Track performance in real-time and fine-tune strategies from your dashboard." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Get Started in <span className="text-gradient">Minutes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative text-center group animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <step.icon className="h-7 w-7" />
              </div>
              <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
              <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
