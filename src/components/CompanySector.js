import React, {Suspense} from 'react'
import PropTypes from 'prop-types'
import styles from 'App.scss'

const CompanySector = ({sector, count}) => {
  if (!sector) {
    return null
  }

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

CompanySector.propTypes = {
  sector: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}

export default CompanySector
