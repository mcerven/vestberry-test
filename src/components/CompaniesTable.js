import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'
import NewCompany from './NewCompany'
import UpdateCompany from './UpdateCompany'
import CompanyTableRow from './CompanyTableRow'
import styles from 'App.scss'
import {useMutation} from '@apollo/client'
import {DELETE_COMPANY} from '../apollo/queries/Page.queries'

const CompaniesTable = ({companies, refetch}) => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [showNewCompanyModal, setShowNewCompanyModal] = useState(false)
  const [showUpdateCompanyModal, setShowUpdateCompanyModal] = useState(false)
  const [deleteCompany, {error}] = useMutation(DELETE_COMPANY)

  const handleNewCompanyModalClose = () => setShowNewCompanyModal(false)
  const handleNewCompanySaved = () => {
    refetch()
    handleNewCompanyModalClose()
  }
  const handleUpdateCompanyModalClose = () => setShowUpdateCompanyModal(false)
  const handleUpdateCompanySaved = () => {
    refetch()
    handleUpdateCompanyModalClose()
  }
  const handleShowUpdateCompanyModal = (company) => {
    setSelectedCompany(company)
    setShowUpdateCompanyModal(true)
  }

  const handleDeleteCompany = async (id) => {
    try {
      await deleteCompany({variables: {id}})
      refetch()
    } catch (err) {
      console.error(err)
    }
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
              <th />
            </tr>
          </thead>
          <tbody>
            {companies.map((company) =>
              <CompanyTableRow
                key={company.id}
                company={company}
                handleShowUpdateCompanyModal={handleShowUpdateCompanyModal}
                handleDelete={handleDeleteCompany}
              />
            )}
          </tbody>
        </table>
        <div className={styles.errorMessage}>{error && error.message}</div>
        <div className={styles.actions}>
          <button className={styles.button} onClick={() => setShowNewCompanyModal(true)}>Add new company</button>
        </div>
        <div className="modals">
          {showNewCompanyModal &&
            <Modal handleClose={handleNewCompanyModalClose}>
              <NewCompany handleSave={handleNewCompanySaved} />
            </Modal>}
          {showUpdateCompanyModal &&
            <Modal handleClose={handleUpdateCompanyModalClose}>
              <UpdateCompany handleSave={handleUpdateCompanySaved} company={selectedCompany} />
            </Modal>}
        </div>
      </div>
    </div>
  )
}

CompaniesTable.propTypes = {
  companies: PropTypes.array.isRequired,
  refetch: PropTypes.func.isRequired,
}

export default CompaniesTable
