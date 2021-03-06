import gql from 'graphql-tag'

export const GET_COMPANIES = gql`
  query GET_COMPANIES {
    companies {
      id
      name
      stage
      sector
      investmentSize
    }
  }`

export const ADD_COMPANY = gql`
  mutation ADD_COMPANY ($name: String!, $stage: String!, $sector: String!, $investmentSize: Int!) {
    addCompany(name: $name, stage: $stage, sector: $sector, investmentSize: $investmentSize) {
      name
      stage
      sector
      investmentSize
    }
  }`

export const DELETE_COMPANY = gql`
  mutation DELETE_COMPANY ($id: ID!) {
    deleteCompany(id: $id) {
      name
      stage
      sector
      investmentSize
    }
  }`

export const UPDATE_COMPANY = gql`
  mutation UPDATE_COMPANY ($id: ID!, $name: String!, $stage: String!, $sector: String!, $investmentSize: Int!) {
    updateCompany(id: $id, name: $name, stage: $stage, sector: $sector, investmentSize: $investmentSize) {
      name
      stage
      sector
      investmentSize
    }
  }`
