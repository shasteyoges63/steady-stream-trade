import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Stats", href: "#stats" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary transition-transform duration-300 group-hover:scale-110">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">LiquidityBot</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
          </Link>
          <Link to="/login">
            <Button size="sm" className="gradient-primary text-primary-foreground font-semibold">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Link to="/login" className="block">
                <Button variant="outline" size="sm" className="w-full">Sign In</Button>
              </Link>
              <Link to="/login" className="block">
                <Button size="sm" className="w-full gradient-primary text-primary-foreground font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
