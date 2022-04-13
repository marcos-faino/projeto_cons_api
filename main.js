
const getProdutos = async (url) =>{
  let res = await fetch(url, {
    headers: new Headers({
      'Authorization': 'Token 7897a20d61efc7650dd2a0235e8dd2a780ad5733',
      'Content-Type': 'application/json'
    }),
  });
  let dados = await res.json();
  return dados;
}

function listar(resultados){
  conteudo.innerHTML = "";
  resultados.forEach(prod => {
    linha = document.createElement("tr");
    coluna0 = document.createElement("td");
    textocol0 = document.createTextNode(prod.id);
    coluna0.appendChild(textocol0);
    coluna1 = document.createElement("td");
    textocol1 = document.createTextNode(prod.nome);
    coluna1.appendChild(textocol1);
    coluna2 = document.createElement("td");
    textocol2 = document.createTextNode(prod.preco);
    coluna2.appendChild(textocol2);
    linha.appendChild(coluna0);
    linha.appendChild(coluna1);
    linha.appendChild(coluna2);
    conteudo.appendChild(linha)
  });
}

function buscar_listar_produtos(url){
  sobre.style.opacity = 0.7;
  sobre.style.zIndex = 100;
  getProdutos(url)
  .then((produtos) =>{
    listar(produtos.results);
    if(produtos.previous){
      anterior.onclick = null;
      anterior.onclick = function(){
          buscar_listar_produtos(produtos.previous);
      };
    }
    if(produtos.next){
      posterior.onclick = null;
      posterior.onclick =function(){
        buscar_listar_produtos(produtos.next);
      };
    }
    sobre.style.opacity = 0;
    sobre.style.zIndex = -100;
  })
  .catch((erro) => {
    console.log("Não foi dessa vez!!! ", erro.message);
  });
}



window.addEventListener("load", function(){
  buscar_listar_produtos("http://localhost:8000/api/v2/produtos");
});
