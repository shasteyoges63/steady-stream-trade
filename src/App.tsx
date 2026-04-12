import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Index from "./pages/Index.tsx";
import BotsPage from "./pages/BotsPage.tsx";
import OrdersPage from "./pages/OrdersPage.tsx";
import TradesPage from "./pages/TradesPage.tsx";
import ApiKeysPage from "./pages/ApiKeysPage.tsx";
import AnalyticsPage from "./pages/AnalyticsPage.tsx";
import RiskPage from "./pages/RiskPage.tsx";
import SubscriptionPage from "./pages/SubscriptionPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/bots" element={<BotsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/trades" element={<TradesPage />} />
          <Route path="/api-keys" element={<ApiKeysPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/risk" element={<RiskPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
