import React from 'react'
import { Card } from '@/components/card'
import Link from 'next/link'

function RevenueMetricsMensuel() {
  return (
    <Card >
      <div>Revenue Metrics Mensuels</div>
          <div className="flex flex-col justify-items-center gap-2 font-bold text-center text-2xl text-red-700">
        <Link href="/complex-dashboard">Default</Link>
        <Link href="/complex-dashboard/anuel">Anuel</Link>
      </div>
    </Card>
  )
}

export default RevenueMetricsMensuel
