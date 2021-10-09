import React, { Suspense } from 'react'
import sectors from "../../common/models/sectors"
import styles from 'App.scss'

const CompaniesBySectors = ({companies}) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        Companies by sectors
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.companySectors}>
          {
            sectors.map(sector => 
              <CompanySector
                key={sector}
                sector={sector}
                count={companies.filter(c => c.sector === sector).length} />)
          }
        </div>
      </div>
    </div>
  )
}

export default CompaniesBySectors

const CompanySector = ({sector, count}) => {
  if (!sector) return null

  const Icon = React.lazy(() => import(`../../Assets/Assetts/Icons/ico_${sector.toLowerCase()}.svg`))

  return (
    <div className={styles.companySector}>
      <div className={styles.companySectorContent}>
        <div className={styles.companySectorCount}>
          {count}
        </div>
        <div className={styles.companySectorText}>
          {sector}
        </div>
        <div className={styles.companySectorText}>
          <Suspense fallback={<div>Loading...</div>}>
            <Icon width="28" height="28" />
          </Suspense>
        </div>
      </div>
    </div>
  )
}