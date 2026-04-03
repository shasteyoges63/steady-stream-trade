export interface Bot {
  id: string;
  name: string;
  pair: string;
  exchange: string;
  status: 'running' | 'stopped' | 'error';
  strategy: string;
  spread: number;
  volume24h: number;
  pnl: number;
  pnlPercent: number;
  activeOrders: number;
  uptime: string;
  createdAt: string;
}

export interface Order {
  id: string;
  botId: string;
  botName: string;
  pair: string;
  side: 'buy' | 'sell';
  type: string;
  price: number;
  amount: number;
  filled: number;
  status: 'open' | 'filled' | 'cancelled' | 'partial';
  timestamp: string;
}

export interface ExchangeKey {
  id: string;
  exchange: string;
  label: string;
  apiKey: string;
  connected: boolean;
  permissions: string[];
  addedAt: string;
}

export interface TradeLog {
  id: string;
  botName: string;
  pair: string;
  side: 'buy' | 'sell';
  price: number;
  amount: number;
  total: number;
  fee: number;
  timestamp: string;
}

export const mockBots: Bot[] = [
  { id: '1', name: 'BTC Spread Bot', pair: 'BTC/USDT', exchange: 'Binance', status: 'running', strategy: 'Spread', spread: 0.15, volume24h: 245830, pnl: 1247.50, pnlPercent: 2.34, activeOrders: 12, uptime: '14d 7h', createdAt: '2024-01-15' },
  { id: '2', name: 'ETH Grid Maker', pair: 'ETH/USDT', exchange: 'Binance', status: 'running', strategy: 'Grid', spread: 0.25, volume24h: 182450, pnl: 856.20, pnlPercent: 1.87, activeOrders: 24, uptime: '7d 12h', createdAt: '2024-02-01' },
  { id: '3', name: 'SOL Volume Gen', pair: 'SOL/USDT', exchange: 'Binance', status: 'stopped', strategy: 'Volume', spread: 0.10, volume24h: 0, pnl: -124.30, pnlPercent: -0.45, activeOrders: 0, uptime: '0d', createdAt: '2024-02-10' },
  { id: '4', name: 'DOGE Support', pair: 'DOGE/USDT', exchange: 'Binance', status: 'running', strategy: 'Price Support', spread: 0.30, volume24h: 95200, pnl: 342.10, pnlPercent: 1.12, activeOrders: 8, uptime: '3d 5h', createdAt: '2024-03-01' },
  { id: '5', name: 'AVAX Hybrid', pair: 'AVAX/USDT', exchange: 'Binance', status: 'error', strategy: 'Grid', spread: 0.20, volume24h: 0, pnl: -56.80, pnlPercent: -0.22, activeOrders: 0, uptime: '0d', createdAt: '2024-03-05' },
];

export const mockOrders: Order[] = [
  { id: 'o1', botId: '1', botName: 'BTC Spread Bot', pair: 'BTC/USDT', side: 'buy', type: 'Limit', price: 67245.50, amount: 0.015, filled: 0, status: 'open', timestamp: '2024-03-15T10:30:00Z' },
  { id: 'o2', botId: '1', botName: 'BTC Spread Bot', pair: 'BTC/USDT', side: 'sell', type: 'Limit', price: 67380.20, amount: 0.012, filled: 0.012, status: 'filled', timestamp: '2024-03-15T10:28:00Z' },
  { id: 'o3', botId: '2', botName: 'ETH Grid Maker', pair: 'ETH/USDT', side: 'buy', type: 'Limit', price: 3520.10, amount: 0.5, filled: 0.25, status: 'partial', timestamp: '2024-03-15T10:25:00Z' },
  { id: 'o4', botId: '2', botName: 'ETH Grid Maker', pair: 'ETH/USDT', side: 'sell', type: 'Limit', price: 3545.80, amount: 0.4, filled: 0, status: 'open', timestamp: '2024-03-15T10:20:00Z' },
  { id: 'o5', botId: '4', botName: 'DOGE Support', pair: 'DOGE/USDT', side: 'buy', type: 'Limit', price: 0.1823, amount: 5000, filled: 0, status: 'open', timestamp: '2024-03-15T10:15:00Z' },
  { id: 'o6', botId: '1', botName: 'BTC Spread Bot', pair: 'BTC/USDT', side: 'buy', type: 'Limit', price: 67100.00, amount: 0.01, filled: 0, status: 'cancelled', timestamp: '2024-03-15T10:10:00Z' },
];

export const mockExchangeKeys: ExchangeKey[] = [
  { id: 'k1', exchange: 'Binance', label: 'Main Account', apiKey: 'Bx7k...9mWz', connected: true, permissions: ['spot', 'read'], addedAt: '2024-01-10' },
  { id: 'k2', exchange: 'Binance', label: 'Sub Account', apiKey: 'Ax3f...2pQr', connected: false, permissions: ['spot', 'read'], addedAt: '2024-02-20' },
];

export const mockTradeLogs: TradeLog[] = [
  { id: 't1', botName: 'BTC Spread Bot', pair: 'BTC/USDT', side: 'buy', price: 67200, amount: 0.015, total: 1008.00, fee: 0.80, timestamp: '2024-03-15T10:30:00Z' },
  { id: 't2', botName: 'BTC Spread Bot', pair: 'BTC/USDT', side: 'sell', price: 67380, amount: 0.012, total: 808.56, fee: 0.65, timestamp: '2024-03-15T10:28:00Z' },
  { id: 't3', botName: 'ETH Grid Maker', pair: 'ETH/USDT', side: 'buy', price: 3520, amount: 0.5, total: 1760.00, fee: 1.41, timestamp: '2024-03-15T10:25:00Z' },
  { id: 't4', botName: 'DOGE Support', pair: 'DOGE/USDT', side: 'buy', price: 0.1823, amount: 5000, total: 911.50, fee: 0.73, timestamp: '2024-03-15T10:15:00Z' },
  { id: 't5', botName: 'ETH Grid Maker', pair: 'ETH/USDT', side: 'sell', price: 3548, amount: 0.3, total: 1064.40, fee: 0.85, timestamp: '2024-03-15T10:05:00Z' },
];

export const mockVolumeData = [
  { time: '00:00', volume: 42000, buys: 22000, sells: 20000 },
  { time: '04:00', volume: 38000, buys: 18000, sells: 20000 },
  { time: '08:00', volume: 65000, buys: 35000, sells: 30000 },
  { time: '12:00', volume: 89000, buys: 48000, sells: 41000 },
  { time: '16:00', volume: 72000, buys: 38000, sells: 34000 },
  { time: '20:00', volume: 55000, buys: 28000, sells: 27000 },
  { time: '24:00', volume: 48000, buys: 25000, sells: 23000 },
];

export const mockPnlData = [
  { day: 'Mon', pnl: 320 },
  { day: 'Tue', pnl: -45 },
  { day: 'Wed', pnl: 180 },
  { day: 'Thu', pnl: 520 },
  { day: 'Fri', pnl: -120 },
  { day: 'Sat', pnl: 290 },
  { day: 'Sun', pnl: 410 },
];

export const dashboardStats = {
  totalVolume24h: 523480,
  totalPnl: 2265.70,
  activeBots: 3,
  totalBots: 5,
  activeOrders: 44,
  successRate: 94.2,
};
