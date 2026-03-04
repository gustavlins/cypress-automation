# Cypress Automation

## 1. Introdução

Este projeto tem como objetivo estruturar e implementar testes automatizados end-to-end (E2E) utilizando o framework Cypress. O repositório demonstra a aplicação prática de conceitos fundamentais de Qualidade de Software, incluindo validação de fluxos funcionais, verificação de interface e organização estruturada de suítes de teste.

A proposta é servir como base técnica para estudos, evolução de boas práticas em automação de testes e composição de portfólio profissional na área de QA.

---

## 2. Objetivos

- Implementar testes automatizados para validação de funcionalidades críticas.
- Demonstrar organização e padronização de scripts de teste.
- Aplicar boas práticas de escrita de testes (legibilidade, isolamento e manutenção).
- Estruturar um projeto preparado para integração contínua (CI/CD).
- Consolidar conhecimento prático em automação com JavaScript.

---

## 3. Tecnologias Utilizadas

- JavaScript
- Node.js
- Cypress

---

## 4. Estrutura do Projeto

A organização do projeto segue o padrão recomendado:
```
├── cypress/
│ ├── e2e/ # Casos de teste end-to-end
│ ├── support/ # Comandos customizados e configurações auxiliares
│
├── cypress.config.js # Arquivo principal de configuração
├── package.json # Dependências e scripts de execução
└── README.md
```
A organização do projeto segue o padrão recomendado pelo Cypress:

A estrutura foi planejada para facilitar escalabilidade, manutenção e futura aplicação de padrões como Page Object Model (POM).

## 5. Instalação e Execução

### 5.1 Clonar o Repositório

```bash
git clone https://github.com/gustavlins/cypress-automation.git
cd cypress-automation
5.2 Instalar Dependências
npm install
5.3 Executar em Modo Interativo
npx cypress open
5.4 Executar em Modo Headless
npx cypress run
```
### Finalidade
Este repositório representa um estudo aplicado em automação de testes e pode ser utilizado como:
Material de apoio para aprendizado de Cypress.
Base para evolução em frameworks de automação.
Demonstração prática de competências técnicas em Quality Assurance.
