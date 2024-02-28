
import telaInicial from '../../support/pageobjects/tela-inicial.page'

describe('Concluir itens na minha lista de toDO',()=> {
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


it('Concluir um item a lista de todo',() =>{

    telaInicial.ConcluirItem()
  
    })
})



