/*
Feature (Gurky) -> Describe 
Background (gurky) -> contexto ou before Each
caso de teste -> it
*/
import telaInicial from '..//support/pageobjects/tela-inicial.page'

describe('Acessar a pagina do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/javascript-es6/dist/') 
    telaInicial.inputText()
})
})