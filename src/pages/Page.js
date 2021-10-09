import React from 'react'
import {GET_COMPANIES} from '../apollo/queries/Page.queries'
import {useQuery} from '@apollo/client'
import CompaniesBySectors from '../components/CompaniesBySectors'
import InvestmentSize from '../components/InvestmentSize'
import CompaniesTable from '../components/CompaniesTable'

export const Page = () => {
  const {loading, error, data: companyData, refetch} = useQuery(GET_COMPANIES)

  if (loading) {
    return <span>Loading data...</span>
  }

  if (error) {
    return (
      <span>
        <pre>
          {JSON.stringify(error, null, 2)}
        </pre>
      </span>
    )
  }

  const {companies} = companyData

  return (
    <>
      <CompaniesBySectors companies={companies} />
      <InvestmentSize companies={companies} />
      <CompaniesTable companies={companies} refetch={refetch} />
    </>
  )
}

export default Page
