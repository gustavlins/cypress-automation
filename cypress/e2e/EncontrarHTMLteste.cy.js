/// <reference types="cypress"/>

describe('Encontrar HTML de Páginas', ()=>{
    it('Acessar site demonstração', ()=>{

        cy.visit('https://www.google.com')
        //cy.get('#APjFqb') #primeira forma de encontrar elementos html
        cy.get('textarea[class="gLFyf"]') /*Primeira forma de encontrar elementos HTML - de forma manual*/
        cy.get('input[class="gNO89b"]') /*Primeira forma de encontrar o btn pesquisar - de forma manual */
        //cy.get('.FPdoLc > center > .gNO89b') # primeira forma de encontrar o btn pesquisar - de forma
    })    

})