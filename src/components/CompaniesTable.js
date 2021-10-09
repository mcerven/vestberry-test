import React, {useState} from 'react'
import Modal from './Modal'
import NewCompany from './NewCompany'
import styles from 'App.scss'

const CompaniesTable = ({ companies, refetch }) => {
  const [showNewCompanyModal, setShowNewCompanyModal] = useState(false)
  
  const handleClose = () => setShowNewCompanyModal(false)
  const handleCompanyAdded = () => {
    refetch()
    handleClose()
  }
  const numberToCurrency = (value) => {
    const numberFormat = new Intl.NumberFormat('sk-SK')
    return `${numberFormat.format(value)} EUR`
  }

  return (
    <div className={styles.section}>
      <div>
        <table className={styles.table}>
          <thead className={styles.sectionTitle}>
            <tr>
              <th />
              <th className={styles.alignLeft}>Company name</th>
              <th>Stage</th>
              <th>Sector</th>
              <th>Investment size</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {companies.map((company, i) => (
              <tr key={i}>
                <td />
                <td className={`${styles.alignLeft} ${styles.borderBottom}`}>{company.name}</td>
                <td className={styles.borderBottom}>{company.stage}</td>
                <td className={styles.borderBottom}>{company.sector}</td>
                <td className={styles.borderBottom}>{numberToCurrency(company.investmentSize)}</td>
                <td />
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.actions}>
          <button className={styles.button} onClick={() => setShowNewCompanyModal(true)}>Add new company</button>
        </div>
        { showNewCompanyModal && 
          <Modal handleClose={handleClose}>
            <NewCompany handleCompanyAdded={handleCompanyAdded} />
          </Modal>
        }
      </div>
    </div>
  )
}

export default CompaniesTable