import React from 'react'
import {useMutation} from '@apollo/client'
import {ADD_COMPANY} from '../apollo/queries/Page.queries'
import styles from 'App.scss'
import CompanyForm from './CompanyForm'

const NewCompany = ({handleSave}) => {
  const [addCompany, {loading, error}] = useMutation(ADD_COMPANY)

  const handleSubmit = async (e, company) => {
    e.preventDefault()

    try {
      await addCompany({variables: {...company}})
      handleSave(company)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <div className={styles.dialogTitle}>Add new company</div>
      <CompanyForm handleSubmit={handleSubmit} />
      <div>{loading && 'Loading...'}</div>
      <div className={styles.errorMessage}>{error && error.message}</div>
    </div>
  )
}

export default NewCompany
