import React from 'react'
import { Chart } from "react-google-charts";

const InvestmentSize = ({companies}) => {
  const chartData = [
    ['Company', 'Investment size'],
    ...companies.map(c => [c.name, c.investmentSize])
  ]

  return (
    <div>
      <Chart
        width={'500px'}
        height={'500px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          title: `${companies.length} COMPANIES`,
          // Just add this option
          pieHole: 0.6,
          pieSliceText: 'none',
        }}
      />
    </div>
  )
}

export default InvestmentSize;
