import React from 'react'
import PropTypes from 'prop-types'
import {useMutation} from '@apollo/client'
import {UPDATE_COMPANY} from '../apollo/queries/Page.queries'
import styles from 'App.scss'
import CompanyForm from './CompanyForm'

const UpdateCompany = ({handleSave, company}) => {
  const [updateCompany, {loading, error}] = useMutation(UPDATE_COMPANY)

  const handleSubmit = async (e, company) => {
    e.preventDefault()

    try {
      await updateCompany({variables: {...company}})
      handleSave(company)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <div className={styles.dialogTitle}>Update company</div>
      <CompanyForm handleSubmit={handleSubmit} company={company} />
      <div>{loading && 'Loading...'}</div>
      <div className={styles.errorMessage}>{error && error.message}</div>
    </div>
  )
}

UpdateCompany.propTypes = {
  handleSave: PropTypes.func.isRequired,
  company: PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    stage: PropTypes.string.isRequired,
    sector: PropTypes.string.isRequired,
    investmentSize: PropTypes.number.isRequired,
  }).isRequired,
}

export default UpdateCompany
