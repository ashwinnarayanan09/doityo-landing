import React from 'react'
import Demo from './Demo'

describe('<Demo />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Demo />)
  })
})