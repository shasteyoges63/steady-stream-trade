import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(172_66%_50%/0.08),transparent_60%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <Zap className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-medium text-primary">Automated Market Making Platform</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <span className="text-foreground">Automate Your</span>
          <br />
          <span className="text-gradient">Crypto Liquidity</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          Deploy intelligent market-making bots across exchanges. Maintain spread, generate volume, and stabilize token prices — all from one powerful dashboard.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <Link to="/login">
            <Button size="lg" className="gradient-primary text-primary-foreground font-semibold px-8 h-12 text-base group">
              Start Trading
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <a href="#features">
            <Button size="lg" variant="outline" className="px-8 h-12 text-base">
              Learn More
            </Button>
          </a>
        </div>

        {/* Floating stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: TrendingUp, label: "Trading Volume", value: "$2.4B+" },
            { icon: Shield, label: "Uptime", value: "99.9%" },
            { icon: Zap, label: "Active Bots", value: "12,000+" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.8 + i * 0.15}s`, opacity: 0 }}
            >
              <stat.icon className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
