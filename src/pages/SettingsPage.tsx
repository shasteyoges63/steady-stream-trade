import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  return (
    <DashboardLayout title="Settings" subtitle="Configure your account and preferences">
      <div className="max-w-2xl space-y-6">
        {/* Profile */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Name</label>
              <input className="w-full rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground" defaultValue="John Doe" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email</label>
              <input className="w-full rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground" defaultValue="john@example.com" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Notifications</h3>
          <div className="space-y-3">
            {['Bot errors', 'Daily PnL report', 'Risk alerts', 'Order fills'].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{item}</span>
                <div className="h-5 w-9 rounded-full bg-primary/30 relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-primary transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button className="gradient-primary text-primary-foreground">Save Changes</Button>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
