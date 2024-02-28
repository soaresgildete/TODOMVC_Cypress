
import telaInicial from '../../support/pageobjects/tela-inicial.page'

describe('adicionar itens na minha lista de toDO',()=> {
/**
 * Dado  - Before vai rodar antes do primeiro teste
 * Before each - vai rodar antes de cada teste
 */
beforeEach(()=>{
    cy.visit('/') //chamando a base URL
})

it('Adicionar um item na lista', () => {
    
    telaInicial.inputText("dado1") //utilizando parametro no metodo inputText
});

it('Adicionar mais de um item a lista',() =>{

    var todoItens = ["maça", "banana","cenoura"]
    todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
})

})

