/// <reference types="cypress"/>

describe('Tela Inicial', () => {

        beforeEach(function(){
            cy.visit('/')
        })

context('Validação de Elementos na Página inicial', ()=>{

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

context.only('Cadastrando usuário', ()=>{
    it('Cadastrando um Novo usuário', ()=>{
        cy.get('input[id="txtNome"]').type('Gustavo Automatizador')
        cy.get('input[id="numero"]').type('4899999999')
        cy.get('input[id=dtpDataNascimento]').clear().type('2023-04-06')
        cy.get('input[id=rdoMasculino]').check()
        cy.get('input[id=btnCadastrarSalvar]').click()

        cy.get('button').contains("Excluir").click()
    })

    
        it('Cadastrando um Novo usuário', ()=>{
        cy.get('input[id="txtNome"]').type('Gustavo Automatizador')
        cy.get('input[id="numero"]').type('4899999999')
        cy.get('input[id=dtpDataNascimento]').clear().type('2023-04-06')
        cy.get('input[id=rdoMasculino]').check()
        cy.get('input[id=btnCadastrarSalvar]').click()

        cy.get('button').contains("Alterar").click()

        cy.get('input[id="numero"]').clear()
            cy.get('input[id=btnCadastrarSalvar]').click()
    })
})

context.only('Verificando dados do usuário', ()=>{

        it('Cadastrando um Novo usuário', ()=>{
        cy.get('input[id="txtNome"]').type('Gustavo Automatizador')
        cy.get('input[id="numero"]').type('4899999999')
        cy.get('input[id=dtpDataNascimento]').clear().type('2023-04-06')
        cy.get('input[id=rdoMasculino]').check()
        cy.get('input[id=btnCadastrarSalvar]').click()

            cy.get('input[id=btnCadastrarSalvar]').click()

        cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(0)
        .should('have.text', '1')
        cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(1)
        .should('have.text', 'Gustavo Automatizador')
        cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(2)
        .should('have.text', '4899999999')
        cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(3)
        .should('have.text', '06/04/2023')
        cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(4)
        .should('have.text', 'M')

        cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(0).invoke('text').then(PegaId=>{
            cy.wrap(PegaId).as('ID da Tabela')
        cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(0)
            .should('have.text', PegaId)
        })
    })
})


})
