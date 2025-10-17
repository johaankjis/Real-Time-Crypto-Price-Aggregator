"use client"

import { useState } from "react"
import { PriceGrid } from "@/components/price-grid"
import { SystemMetrics } from "@/components/system-metrics"
import { PriceChart } from "@/components/price-chart"
import { Header } from "@/components/header"

export default function Home() {
  const [selectedPair, setSelectedPair] = useState("BTC/USD")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4 md:p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <SystemMetrics />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PriceChart pair={selectedPair} />
          </div>
          <div>
            <PriceGrid onSelectPair={setSelectedPair} selectedPair={selectedPair} />
          </div>
        </div>
      </main>
    </div>
  )
}
