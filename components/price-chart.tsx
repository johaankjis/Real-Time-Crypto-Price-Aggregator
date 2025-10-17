"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface ChartDataPoint {
  time: string
  price: number
}

export function PriceChart({ pair }: { pair: string }) {
  const [data, setData] = useState<ChartDataPoint[]>([])

  useEffect(() => {
    // Initialize with 20 data points
    const basePrice = pair === "BTC/USD" ? 67000 : pair === "ETH/USD" ? 3400 : 140
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: new Date(Date.now() - (19 - i) * 60000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      price: basePrice * (1 + (Math.random() - 0.5) * 0.02),
    }))
    setData(initialData)

    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [
          ...prev.slice(1),
          {
            time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
            price: prev[prev.length - 1].price * (1 + (Math.random() - 0.5) * 0.005),
          },
        ]
        return newData
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [pair])

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">{pair} Price Chart</CardTitle>
        <p className="text-sm text-muted-foreground">Real-time price updates via WebSocket</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="time"
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              domain={["auto", "auto"]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))",
              }}
            />
            <Line type="monotone" dataKey="price" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
