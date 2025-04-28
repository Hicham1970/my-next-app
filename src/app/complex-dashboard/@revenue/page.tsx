import React from 'react'
import { Card } from '@/components/card'
import Link from 'next/link'

function RevenueMetrics() {
  return (
    <Card >
      <div>Revenue Metrics</div>
      <div className="flex flex-col justify-items-center gap-2 font-bold text-center text-2xl text-red-700">
        <Link href="/complex-dashboard/mensuel">Mensuel</Link>
        <Link href="/complex-dashboard/anuel">Anuel</Link>
      </div>
    </Card>
  )
}

export default RevenueMetrics
