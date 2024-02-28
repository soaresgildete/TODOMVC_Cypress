
import telaInicial from '../../support/pageobjects/tela-inicial.page'

describe('Deletar itens da lista',()=> {
/**
 * Dado  - Before vai rodar antes do primeiro teste
 * Before each - vai rodar antes de cada teste
 */
beforeEach(()=>{
    cy.visit('/') //chamando a base URL 
    var todoItens = ["maça", "banana","cenoura"]


    todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
})
 
})

/**Clicar no Filtro 
 * O Item a ser exibido 
 * e o contador deve bater com a informação
 */

it('Deleção de um item',() =>{

    telaInicial.deletarItem()
  
})

})
