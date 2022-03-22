
function buscarElementos(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.withCredentials = true;
    request.send();
    return request.response;
}

function montarLinha(dados){

}

function main(){
    console.log(buscarElementos("http://127.0.0.1:8000/api/v1/produtos"));
}

main();