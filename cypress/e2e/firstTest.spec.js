/// <reference types="cypress" /> 
// la ligne du haut va aider a trouver les fonctions de cypress
// Structure Habituelle d'un test
describe('Notre 1er Suite',() =>{

    it('first test',() =>{
        cy.visit('/')
        cy.contains('JOIN US').click

        cy.get('.nav-link')
    })
})