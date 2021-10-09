import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {ADD_COMPANY} from '../apollo/queries/Page.queries';
import stages from '../../common/models/stages';
import sectors from '../../common/models/sectors';

const NewCompany = ({handleCompanyAdded}) => {
  const [name, setName] = useState('');
  const [stage, setStage] = useState('');
  const [sector, setSector] = useState('');
  const [investmentSize, setInvestmentSize] = useState(0);

  const [addCompany, {data, loading, error} ] = useMutation(ADD_COMPANY);

  const handleSubmit = (e) => {
    e.preventDefault();
    const company = {
      name,
      stage,
      sector,
      investmentSize: Number(investmentSize),
    }
    addCompany({variables: {...company} })
    handleCompanyAdded(company)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Company name
          <input type="text" placeholder="Company name" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Stage
          <select placeholder="Stage" value={stage} onChange={e => setStage(e.target.value)}>
            {
              stages.map(s => 
                <option value={s}>{s}</option>)
            }
          </select>
        </label>
        <label>
          Sector
          <select placeholder="Sector" value={sector} onChange={e => setSector(e.target.value)}>
            {
              sectors.map(s => 
                <option value={s}>{s}</option>)
            }
          </select>
        </label>
        <label>
          Investment size
          <input type="number" placeholder="Investment size" value={investmentSize} onChange={e => setInvestmentSize(e.target.value)} />
        </label>
        <button type="submit">Add new company</button>
      </form>
      {loading && 'Loading'}
      {error && `Error: ${error.message}`}
    </div>
  )
}

export default NewCompany