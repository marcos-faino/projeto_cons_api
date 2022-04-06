const API = "http://localhost:8000/api/v1/produtos";

let produtos = null;

const getProdutos = async () =>{
  const res = await fetch(API);
  const data = await res.json();
  return data;
}

function listar(resultados){
  resultados.forEach(prod => {
    linha = document.createElement("tr");
    coluna1 = document.createElement("td");
    textocol1 = document.createTextNode(prod.nome);
    coluna1.appendChild(textocol1);
    coluna2 = document.createElement("td");
    textocol2 = document.createTextNode(prod.preco);
    coluna2.appendChild(textocol2);
    linha.appendChild(coluna1);
    linha.appendChild(coluna2);
    conteudo.appendChild(linha)
  });
}



window.addEventListener("load", function(){
  getProdutos()
  .then((meuJson) =>{
    //console.log(meuJson.results);
    listar(meuJson.results);
  })
  .catch((erro)=>{
    console.error('Opa! não foi dessa vez! ', erro.message);
  });
})
