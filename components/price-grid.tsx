"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

interface CryptoPrice {
  pair: string
  price: number
  change24h: number
  volume: string
  lastUpdate: number
}

const initialPrices: CryptoPrice[] = [
  { pair: "BTC/USD", price: 67234.5, change24h: 2.34, volume: "$28.4B", lastUpdate: Date.now() },
  { pair: "ETH/USD", price: 3456.78, change24h: -1.23, volume: "$15.2B", lastUpdate: Date.now() },
  { pair: "SOL/USD", price: 142.34, change24h: 5.67, volume: "$3.8B", lastUpdate: Date.now() },
  { pair: "BNB/USD", price: 589.23, change24h: 1.45, volume: "$2.1B", lastUpdate: Date.now() },
  { pair: "XRP/USD", price: 0.5234, change24h: -0.89, volume: "$1.9B", lastUpdate: Date.now() },
  { pair: "ADA/USD", price: 0.4567, change24h: 3.21, volume: "$890M", lastUpdate: Date.now() },
]

export function PriceGrid({
  onSelectPair,
  selectedPair,
}: { onSelectPair: (pair: string) => void; selectedPair: string }) {
  const [prices, setPrices] = useState<CryptoPrice[]>(initialPrices)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) =>
        prev.map((crypto) => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() - 0.5) * 0.002),
          change24h: crypto.change24h + (Math.random() - 0.5) * 0.1,
          lastUpdate: Date.now(),
        })),
      )
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Live Prices</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {prices.map((crypto) => (
          <button
            key={crypto.pair}
            onClick={() => onSelectPair(crypto.pair)}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              selectedPair === crypto.pair
                ? "bg-primary/10 border border-primary"
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-foreground">{crypto.pair}</div>
                <div className="text-xs text-muted-foreground">{crypto.volume} vol</div>
              </div>
              <div className="text-right">
                <div className="font-mono font-semibold text-foreground">
                  ${crypto.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div
                  className={`flex items-center justify-end gap-1 text-xs ${
                    crypto.change24h >= 0 ? "text-accent" : "text-destructive"
                  }`}
                >
                  {crypto.change24h >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {Math.abs(crypto.change24h).toFixed(2)}%
                </div>
              </div>
            </div>
          </button>
        ))}
      </CardContent>
    </Card>
  )
}
