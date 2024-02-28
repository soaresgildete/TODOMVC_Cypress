import telaInicial from '../../support/pageobjects/tela-inicial.page' 

describe('Regressivo ToDo App', ()=>{ 

    context('Validar tela inicial ',()=> { 

        beforeEach(()=>{
            cy.visit('/')
        });
  
  

        it('Validar a aria label de input de dados',()=>{
            
            telaInicial.validarInput("What needs to be done?")

        })

    })
    context('Validar a adição de itens ',()=> {
        beforeEach(()=>{
            cy.visit('/')
        });

        it('Adicionar mais de um item na lista',()=>{
            var todoItens = ["maça", "banana","cenoura"]
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
            /**
             * Validar que o contador é igual a quantidade de itens incluido
             */
            telaInicial.validarContador(3)
        
        })
  


    })

    context('Validar a conclusão de itens ',()=> {

        beforeEach(()=>{
            cy.visit('/') //chamando a base URL 
            var todoItens = ["maça", "banana","cenoura"]
        
        todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
        })

        
    it('Concluir um item a lista de todo',() =>{
        telaInicial.ConcluirItem()
        telaInicial.validarContador(2)
        telaInicial.validarSizeTodo(2)
  
    })
        
    })
})

    context('Validar o filtro da aplicação ',()=> {
        beforeEach(()=>{
            cy.visit('/') //chamando a base URL 
            var todoItens = ["maça", "banana","cenoura"]
        
        
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
        })
            telaInicial.ConcluirItem()
        
        })

        it('Validar itens ativos',()=>{

            telaInicial.filtrarItem("Active")
            telaInicial.validarSizeTodo(2)

        })

        it('Validar itens concluidos',()=>{
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSizeTodo(1)
            
        })

    })

    context.skip('Validar a remoção de itens ',()=> {
        beforeEach(()=>{
            cy.visit('/') //chamando a base URL 
            var todoItens = ["maça", "banana","cenoura"]
        
        
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
        })

        it('deleção de um item da lista',() => {
            telaInicial.deletarItem()
            telaInicial.validarSizeTodo(2)
        })

    })

  })
})
