
import telaInicial from '../../support/pageobjects/tela-inicial.page'

describe('Validar os Filtros da aplicação após a adição de Itens',()=> {
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
    telaInicial.ConcluirItem()

})

/**Clicar no Filtro 
 * O Item a ser exibido 
 * e o contador deve bater com a informação
 */

it('filtrar itens ativos',() =>{

    telaInicial.filtrarItem("Active")
  
})
it('filtrar itens concluir ',() =>{

             
})


})
