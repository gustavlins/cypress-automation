Cypress Automation
1. Introdução

Este projeto tem como objetivo implementar e estruturar testes automatizados end-to-end (E2E) utilizando o framework Cypress. O repositório demonstra a aplicação prática de conceitos fundamentais de qualidade de software, incluindo validação de fluxos funcionais, verificação de interface e organização estruturada de suítes de teste.

A proposta é servir como base técnica para estudos, experimentação e evolução de boas práticas em automação de testes para aplicações web.

2. Objetivos

Implementar testes automatizados para validação de funcionalidades críticas.

Demonstrar organização e padronização de scripts de teste.

Aplicar boas práticas de escrita de testes (legibilidade, isolamento e manutenção).

Estruturar um projeto preparado para integração contínua (CI/CD).

Servir como artefato de portfólio técnico na área de Quality Assurance.

3. Tecnologias Utilizadas

JavaScript

Node.js

Cypress

4. Estrutura do Projeto

A organização segue o padrão recomendado pelo Cypress:

cypress/e2e/ – Casos de teste end-to-end.

cypress/support/ – Comandos customizados e configurações auxiliares.

cypress.config.js – Arquivo de configuração principal.

package.json – Gerenciamento de dependências e scripts de execução.

A estrutura foi planejada para facilitar escalabilidade, manutenção e futura aplicação de padrões como Page Object Model (POM).

5. Execução
  Instalação
  git clone https://github.com/gustavlins/cypress-automation.git
  cd cypress-automation
  npm install

  Execução em modo interativo
    npx cypress open
  Execução em modo headless
    npx cypress run

    
6. Considerações Técnicas

Os testes implementados priorizam:

Clareza na definição de cenários.

Independência entre casos de teste.

Reprodutibilidade de execução.

Organização lógica por funcionalidades.

O projeto pode ser expandido para incluir:

Testes de API.

Relatórios automatizados.

Integração com pipelines de CI.

Estratégias de mock e interceptação de requisições.

7. Finalidade Acadêmica e Profissional

Este repositório representa um estudo aplicado em automação de testes, podendo ser utilizado como:

Material de apoio para aprendizado de automação com Cypress.

Base para evolução para frameworks mais complexos.

Demonstração prática de competências em testes automatizados.
