/// <reference types="cypress"/>

describe('Teste Utilizando Wait Timeout', ()=>{

    it('Acessar site demonstração', ()=>{
        cy.visit('https://www.google.com/')
        
        cy.get('#APjFqb')
        .should('be.visible').click().type('Automação de Testes').wait(4000)
        
        cy.get('.FPdoLc > center > .gNO89b',{timeout: 30000})
        .should('be.visible').click({force:true})
    })
})