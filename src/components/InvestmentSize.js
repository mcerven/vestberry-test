import React from 'react'
import { Chart } from "react-google-charts";
import styles from 'App.scss'

const InvestmentSize = ({companies}) => {
  const chartData = [
    ['Company', 'Investment size'],
    ...companies.map(c => [c.name, c.investmentSize])
  ]

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        Companies by investment size
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.investmentSizeGraph}>
          <div className={styles.graphTitle}>
            <div className={styles.graphTitle1}>{companies.length}</div>
            COMPANIES
          </div>
          <Chart
            width="800px"
            height="500px"
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
              // title: `${companies.length} COMPANIES`,
              titleTextStyle: { 
                fontSize: 20,
                bold: true,
              },
              pieHole: 0.6,
              pieSliceText: 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default InvestmentSize;
