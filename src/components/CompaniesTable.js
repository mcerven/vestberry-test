import React, {useState} from 'react';
import Modal from './Modal';
import NewCompany from './NewCompany'
import styles from 'App.scss'

const CompaniesTable = ({ companies, refetch }) => {
  const [showNewCompanyModal, setShowNewCompanyModal] = useState(false)
  
  const handleClose = () => setShowNewCompanyModal(false)
  const handleCompanyAdded = () => {
    refetch()
    handleClose()
  }

  return (
    <div className={styles.section}>
      <div>
        <table className={styles.table}>
          <thead className={styles.sectionTitle}>
            <tr>
              <th>COMPANY NAME</th>
              <th>STAGE</th>
              <th>SECTOR</th>
              <th>INVESTMENT SIZE</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, i) => (
              <tr key={i}>
                <td>{company.name}</td>
                <td>{company.stage}</td>
                <td>{company.sector}</td>
                <td>{company.investmentSize}</td>
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
  );
};

export default CompaniesTable