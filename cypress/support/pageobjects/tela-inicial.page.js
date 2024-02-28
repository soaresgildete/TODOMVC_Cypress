import { FILTROS } from '../elements/tela-inicial.elements'

const elem = require('../elements/tela-inicial.elements').ELEMENTS //Mapeamento para a pasta Elements
const concluirItem = require('../elements/tela-inicial.elements').ITENS
const filtro = require('../elements/tela-inicial.elements').FILTROS


class telaInicial {
 
    inputText(dado){

        cy.get(elem.InputToDo).type(dado).type('{enter}')
    }

    ConcluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .first()
        .click()

    } 
    filtrarItem(menu){
        cy.get(filtro.filtroToDO)
        .contains(menu)
        .and('be.visible')
        .click()
    }
    deletarItem(){

        cy.get(concluirItem.listaItens) 
        .first()
        .find('button')
        .invoke('show')
        .click()
        
    }

    
  //Validando o PlaceHolder
validarInput(texto){
    cy.get(elem.InputToDo) 
    .should('have.attr','placeholder')
    .and('include',texto)

}

//Validando o contador de itens incluidos 
validarContador(numero){
    cy.get(FILTROS.contador)
    .find('strong')
    .contains(numero)
}
validarSizeTodo(numero){

    cy.get(concluirItem.validarListaItens)
}

    
}
export default new telaInicial();