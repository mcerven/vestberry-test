import React, {useState} from 'react'
import stages from '../../common/models/stages'
import sectors from '../../common/models/sectors'
import styles from 'App.scss'

const CompanyForm = ({handleSubmit, company = null}) => {  
  const [name, setName] = useState(company?.name ?? '')
  const [stage, setStage] = useState(company?.stage ?? '')
  const [sector, setSector] = useState(company?.sector ?? '')
  const [investmentSize, setInvestmentSize] = useState(company?.investmentSize ?? '')

  const newCompany = {
    id: company?.id,
    name,
    stage,
    sector,
    investmentSize: Number(investmentSize),
  }

  return (
    <form onSubmit={e => handleSubmit(e, newCompany)} className={styles.form}>
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
            {stages.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
      </div>
      <div className={styles.formField}>
        <label>
          <span>Sector</span>
          <select value={sector} onChange={e => setSector(e.target.value)} required>
            <option value="" disabled hidden>Select sector from the list</option>
            {sectors.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
      </div>
      <div className={styles.formField}>
        <label>
          <span>Investment size</span>
          <div style={{ position: 'relative' }}>
            <input type="number" placeholder="Investment size" value={investmentSize} onChange={e => setInvestmentSize(e.target.value)} required />
            <div className={styles.placeholderRight}>EUR</div>
          </div>
        </label>
      </div>
      <div className={styles.actions}>
        <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>Save</button>
      </div>
    </form>
  )
}

export default CompanyForm
