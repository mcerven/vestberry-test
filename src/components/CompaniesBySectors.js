import React from 'react'
import PropTypes from 'prop-types'
import sectors from '../../common/models/sectors'
import styles from 'App.scss'
import CompanySector from './CompanySector'

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
                count={companies.filter(c => c.sector === sector).length}
              />)
          }
        </div>
      </div>
    </div>
  )
}

CompaniesBySectors.propTypes = {
  companies: PropTypes.array.isRequired,
}

export default CompaniesBySectors
