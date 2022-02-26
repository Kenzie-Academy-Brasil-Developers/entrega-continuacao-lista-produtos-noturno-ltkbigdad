const ul = document.querySelector('.containerListaProdutos ul');

function montarListaProdutos(listaProdutos) {
    ul.innerHTML = '';
    let somaTotal = 0;

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const buttonAdicionarCarrinho = document.createElement('button');
        const olNutrientes = document.createElement('ol');

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;        
        buttonAdicionarCarrinho.innerText = 'Adicionar ao Carrinho';
       
        for (let i = 0; i < produto.componentes.length; i++){
            let liComponentes = document.createElement('li');
            liComponentes.innerText = produto.componentes[i];
            olNutrientes.appendChild(liComponentes);
        }

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(olNutrientes);
        li.appendChild(buttonAdicionarCarrinho);        
 
        ul.appendChild(li); 
        
        buttonAdicionarCarrinho.addEventListener('click', () => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const span = document.createElement('span');        
    
            img.src = produto.img;
            img.alt = produto.nome;
            h3.innerText = produto.nome;
            p.innerText = produto.preco;
            span.innerText = produto.secao;
            
            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(span);

            ulCarrinho.appendChild(li);

            let preco = parseInt(produto.preco);
            
            
            somaTotal = somaTotal + preco;
            valorTotal.innerText = somaTotal;                     
        })
        
       // const nutrientes = document.createElement('li')
    });
}

const ulCarrinho = document.querySelector('.containerCarrinho ul');

const valorTotal = document.querySelector("#precoTotal"); 

//função para filtrar horti-fruti

function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });
    montarListaProdutos(listaHortifruti);        
}
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
    botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);

//função mostrar todos

    function filtrarMostrarTodos() {
        const lista = produtos.filter((produto) =>{
            return produto;
        });       
        montarListaProdutos(lista);                
    }  
    const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
    botaoMostrarTodos.addEventListener('click', filtrarMostrarTodos); 

//função buscar produtos

    function buscarProdutos() {  
        let busca = document.querySelector(".campoBuscaPorNome").value;  
        
        const buscaProduto = produtos.filter((produto) => {
          if(produto.nome.toLowerCase() === busca.toLowerCase()){
            return produto.nome.toLowerCase() === busca.toLowerCase()
          } else if(produto.categoria.toLowerCase() === busca.toLowerCase()){
            return produto.categoria.toLowerCase() === busca.toLowerCase()
          } else if(produto.secao.toLowerCase() === busca.toLowerCase()){
            return produto.secao.toLowerCase() === busca.toLowerCase()
          }          
        });       
      
        montarListaProdutos(buscaProduto);
    }
const botaoBusca = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
    botaoBusca.addEventListener('click', buscarProdutos ); 

 

     
           
           
            
            
    
      
    

