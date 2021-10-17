import React from 'react'
import PropTypes from 'prop-types'
import styles from 'App.scss'

const numberFormat = new Intl.NumberFormat('sk-SK')
const numberToCurrency = (value) => `${numberFormat.format(value)} EUR`

export const CompanyTableRow = ({company, handleShowUpdateCompanyModal, handleDelete}) => {
  return (
    <tr key={company.id}>
      <td />
      <td className={`${styles.alignLeft} ${styles.borderBottom}`}>
        <a onClick={() => handleShowUpdateCompanyModal(company)}>{company.name}</a>
      </td>
      <td className={styles.borderBottom}>{company.stage}</td>
      <td className={styles.borderBottom}>{company.sector}</td>
      <td className={styles.borderBottom}>{numberToCurrency(company.investmentSize)}</td>
      <td className={`${styles.iconButton} ${styles.borderBottom}`}>
        <div role="button" onClick={() => handleDelete(company.id)}>✕</div>
      </td>
      <td />
    </tr>
  )
}

CompanyTableRow.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    stage: PropTypes.string.isRequired,
    sector: PropTypes.string.isRequired,
    investmentSize: PropTypes.number.isRequired,
  }).isRequired,
  handleShowUpdateCompanyModal: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default CompanyTableRow
