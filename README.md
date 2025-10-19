# CryptoStream - Real-Time Crypto Price Aggregator

A high-performance, real-time cryptocurrency price aggregator built with Next.js 15, React 19, and TypeScript. This application provides live market data visualization with an elegant, modern UI featuring real-time price updates, interactive charts, and comprehensive system metrics.

## ✨ Features

- **Real-Time Price Updates**: Live cryptocurrency price tracking with automatic updates every 1.5 seconds
- **Interactive Price Charts**: Dynamic line charts showing historical price movements for selected trading pairs
- **Multi-Pair Support**: Track multiple cryptocurrency pairs including BTC/USD, ETH/USD, SOL/USD, BNB/USD, XRP/USD, and ADA/USD
- **System Metrics Dashboard**: Monitor key performance indicators including:
  - Queries per second (QPS)
  - P95 latency metrics
  - Cache hit rates
  - System uptime
- **Responsive Design**: Fully responsive UI that works seamlessly across desktop, tablet, and mobile devices
- **Dark Mode**: Modern dark theme optimized for extended viewing
- **Performance Optimized**: Built with Next.js 15 for optimal performance and SEO

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### UI Components & Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful & consistent icon set
- **shadcn/ui** - Re-usable component library

### Data Visualization
- **Recharts** - Composable charting library for React
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Additional Libraries
- **next-themes** - Theme management
- **date-fns** - Modern date utility library
- **sonner** - Toast notifications
- **Vercel Analytics** - Web analytics

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **pnpm** 8.x or higher (recommended) or npm/yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Real-Time-Crypto-Price-Aggregator.git
   cd Real-Time-Crypto-Price-Aggregator
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   
   Or using npm:
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```
   
   Or using npm:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Starts the development server on port 3000 |
| `pnpm build` | Creates an optimized production build |
| `pnpm start` | Starts the production server |
| `pnpm lint` | Runs ESLint to check code quality |

## 📁 Project Structure

```
Real-Time-Crypto-Price-Aggregator/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── components/              # React components
│   ├── ui/                 # shadcn/ui components
│   ├── header.tsx          # Header component with branding
│   ├── price-grid.tsx      # Live price grid component
│   ├── price-chart.tsx     # Interactive price chart
│   ├── system-metrics.tsx  # System metrics dashboard
│   └── theme-provider.tsx  # Theme management
├── lib/                     # Utility functions
│   └── utils.ts            # Helper utilities
├── public/                  # Static assets
├── styles/                  # Additional styles
├── hooks/                   # Custom React hooks
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS configuration
├── components.json         # shadcn/ui configuration
└── package.json            # Project dependencies

```

## 🎯 Key Components

### PriceGrid
Displays a live grid of cryptocurrency prices with:
- Real-time price updates
- 24-hour price change indicators
- Trading volume information
- Interactive selection for chart display

### PriceChart
Interactive line chart featuring:
- Real-time price visualization
- Historical data tracking (20-minute window)
- Responsive design with tooltips
- Automatic updates every 3 seconds

### SystemMetrics
Performance dashboard showing:
- Real-time queries per second
- P95 latency metrics
- Cache hit rates
- System uptime statistics

### Header
Application branding and status bar with:
- Live connection indicator
- Current QPS display
- System uptime percentage

## 🔧 Configuration

### TypeScript
The project uses strict TypeScript configuration for type safety. Configuration can be modified in `tsconfig.json`.

### Next.js
Next.js settings including image optimization and TypeScript build options are configured in `next.config.mjs`.

### Tailwind CSS
Tailwind configuration and custom theme settings are managed through PostCSS configuration.

## 🎨 Customization

### Adding New Cryptocurrency Pairs
To add new cryptocurrency pairs, modify the `initialPrices` array in `components/price-grid.tsx`:

```typescript
const initialPrices: CryptoPrice[] = [
  { pair: "NEW/USD", price: 100.00, change24h: 0.0, volume: "$1M", lastUpdate: Date.now() },
  // ... other pairs
]
```

### Modifying Update Intervals
- Price updates: Modify the interval in `components/price-grid.tsx` (default: 1500ms)
- Chart updates: Modify the interval in `components/price-chart.tsx` (default: 3000ms)
- Metrics updates: Modify the interval in `components/system-metrics.tsx` (default: 2000ms)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Manual Deployment

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 📊 Performance

- **Optimized Bundle Size**: Tree-shaking and code splitting enabled
- **Fast Refresh**: Instant feedback during development
- **Image Optimization**: Automatic image optimization (configurable)
- **Static Generation**: Pre-rendered pages for optimal performance

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This application currently uses simulated data for demonstration purposes. For production use, integrate with real cryptocurrency API providers such as CoinGecko, Binance API, or CoinMarketCap.
