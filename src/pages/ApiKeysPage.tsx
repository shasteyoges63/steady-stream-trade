import DashboardLayout from "@/components/layout/DashboardLayout";
import { mockExchangeKeys } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Plus, Wifi, WifiOff, Trash2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const ApiKeysPage = () => {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});

  return (
    <DashboardLayout title="API Keys" subtitle="Manage your exchange API connections securely">
      <div className="flex items-center justify-end mb-6">
        <Button size="sm" className="gradient-primary text-primary-foreground gap-1.5">
          <Plus className="h-4 w-4" />
          Add Exchange Key
        </Button>
      </div>

      <div className="space-y-4">
        {mockExchangeKeys.map((key) => (
          <div key={key.id} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                  <span className="text-sm font-bold text-warning">B</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{key.label}</h3>
                  <p className="text-xs text-muted-foreground">{key.exchange}</p>
                </div>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${key.connected ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                  {key.connected ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
                  {key.connected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => setShowKeys(prev => ({ ...prev, [key.id]: !prev[key.id] }))}>
                  {showKeys[key.id] ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                </Button>
                <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4 text-muted-foreground" /></Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">API Key</p>
                <p className="text-sm font-mono text-foreground">{showKeys[key.id] ? 'Bx7k9a3mF2pQr8Tz5vNw' : key.apiKey}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Permissions</p>
                <div className="flex gap-1.5">
                  {key.permissions.map((p) => (
                    <span key={p} className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">{p}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Added</p>
                <p className="text-sm text-foreground">{key.addedAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h3 className="text-sm font-semibold text-foreground mb-2">Security Notes</h3>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• API keys are encrypted with AES-256 before storage</li>
          <li>• Never enable withdrawal permissions on market making keys</li>
          <li>• IP whitelist your keys on the exchange for added security</li>
          <li>• Keys are only decrypted server-side during bot execution</li>
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default ApiKeysPage;
