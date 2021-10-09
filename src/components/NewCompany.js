import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {ADD_COMPANY} from '../apollo/queries/Page.queries'
import stages from '../../common/models/stages'
import sectors from '../../common/models/sectors'
import styles from 'App.scss'

const NewCompany = ({handleCompanyAdded}) => {
  const [name, setName] = useState('')
  const [stage, setStage] = useState('')
  const [sector, setSector] = useState('')
  const [investmentSize, setInvestmentSize] = useState('')

  const [addCompany, {loading, error}] = useMutation(ADD_COMPANY)

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      const company = {
        name,
        stage,
        sector,
        investmentSize: Number(investmentSize),
      }
      await addCompany({variables: {...company} })
      handleCompanyAdded(company)
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={styles.newCompany}>
      <h2>Add new company</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formField}>
          <label>
            <span>Company name</span>
            <input type="text" placeholder="Company name" value={name} onChange={e => setName(e.target.value)} required />
          </label>
        </div>
        <div className={styles.formField}>
          <label>
            <span>Stage</span>
            <select value={stage} onChange={e => setStage(e.target.value)} required>
              <option value="" disabled hidden>Select stage from the list</option>
              {
                stages.map(s =>
                  <option key={s} value={s}>{s}</option>)
              }
            </select>
          </label>
        </div>
        <div className={styles.formField}>
          <label>
            <span>Sector</span>
            <select value={sector} onChange={e => setSector(e.target.value)} required>
              <option value="" disabled hidden>Select sector from the list</option>
              {
                sectors.map(s =>
                  <option key={s} value={s}>{s}</option>)
              }
            </select>
          </label>
        </div>
        <div className={styles.formField}>
          <label>
            <span>Investment size</span>
            <div style={{position: 'relative'}}>
              <input type="number" placeholder="Investment size" value={investmentSize} onChange={e => setInvestmentSize(e.target.value)} required />
              <div className={styles.placeholderRight}>EUR</div>
            </div>
          </label>
        </div>
        <div className={styles.actions}>
          <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>Add new company</button>
        </div>
      </form>
      {loading && 'Loading'}
      {error && `Error: ${error.message}`}
    </div>
  )
}

export default NewCompany