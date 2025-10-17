"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Database, Zap, TrendingUp } from "lucide-react"

interface Metric {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  trend: "up" | "down"
}

export function SystemMetrics() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      title: "Queries/Second",
      value: "10,247",
      change: "+12%",
      icon: <Activity className="h-4 w-4" />,
      trend: "up",
    },
    {
      title: "P95 Latency",
      value: "42ms",
      change: "-38%",
      icon: <Zap className="h-4 w-4" />,
      trend: "down",
    },
    {
      title: "Cache Hit Rate",
      value: "94.2%",
      change: "+5%",
      icon: <Database className="h-4 w-4" />,
      trend: "up",
    },
    {
      title: "Uptime",
      value: "99.95%",
      change: "SLA Met",
      icon: <TrendingUp className="h-4 w-4" />,
      trend: "up",
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value:
            metric.title === "Queries/Second"
              ? `${(Math.random() * 2000 + 9000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
              : metric.title === "P95 Latency"
                ? `${(Math.random() * 10 + 38).toFixed(0)}ms`
                : metric.title === "Cache Hit Rate"
                  ? `${(Math.random() * 2 + 93).toFixed(1)}%`
                  : metric.value,
        })),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
            <div className="text-muted-foreground">{metric.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{metric.value}</div>
            <p className={`text-xs ${metric.trend === "up" ? "text-accent" : "text-chart-3"}`}>
              {metric.change} from baseline
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
