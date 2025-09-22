/// <reference types="cypress"/>

describe('Tela Inicial', () => {

        beforeEach(function(){
            cy.visit('/')
        })



    it('Validar o título da tela inicial', () => {
        
        cy.get('h1')
        .contains('Teste de Automação Cypress').should('have.text', 'Teste de Automação Cypress')


    })

    it('Validar os botões da tela inicial', () => {
        cy.get('a[href="./login.html"]').as('BtnVoltar')
            .should('be.visible')
        cy.log('Botão de Login Visível')
    
        cy.get('a[href="texto.html"]')
            .should('be.visible')
        cy.log('Botão de Texto Visível')

        cy.get('a[href="imagem.html"]')
            .should('be.visible')
        cy.log('Botão de Imagem Visível')
    
        cy.get('input[id="btnCadastrarSalvar"]')
            .should('be.visible').should('have.value', 'Cadastrar')
            cy.log('Botão de Salvar Visível')
        
        
        
    })


    it('Validar o campo de texto', () => {
        cy.get('input[id="txtNome"]').should('be.visible')

        cy.get('input[id="numero"]').should('be.visible')

        cy.get('input[id="dtpDataNascimento"]').should('be.visible')
    })


    it('Validar Checkbox', () => {
        cy.get('input[id="rdoMasculino"]').should('be.visible')
        cy.get('input[id="rdoFeminino"]').should('be.visible')
    })

    it('Validar Tabela', () => {

        cy.get('h2')
            .contains('Tabela').should('have.text', 'Tabela')

            cy.get('tr').find('th').eq(0).should('have.text', 'Id')
            cy.get('tr').find('th').eq(1).should('have.text', 'Nome')
            cy.get('tr').find('th').eq(2).should('have.text', 'Telefone')
            cy.get('tr').find('th').eq(3).should('have.text', 'Nascimento')
            cy.get('tr').find('th').eq(4).should('have.text', 'Sexo')
            cy.get('tr').find('th').eq(5).should('have.text', 'Ultima Atualização')
            
    })

    


})
