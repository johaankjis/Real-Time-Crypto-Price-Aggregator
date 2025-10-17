"use client"

import { Activity } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Activity className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CryptoStream</h1>
              <p className="text-xs text-muted-foreground">Real-Time Price Aggregator</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-muted-foreground">Live</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">10.2K QPS</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-accent font-medium">99.95% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
