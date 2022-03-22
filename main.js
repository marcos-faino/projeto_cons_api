function buscar(url){
    $.ajaxSetup({
        url: url,
        headers: {
          "Access-Control-Allow-Origin": "*",
          //"Authentication": "bearer 3d16feb7c09884d1f8a330fd90fb233c3982048a",
          "Content-Type": "application/json"
        },
        crossDomain: true,
        method: "GET",
    });
    $.ajax({
        url: url,
      })
      .done(function(data) {
        console.log(data);
      })
      .fail(function() {
        console.log("error");
      })
}

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
    console.log(buscar("http://127.0.0.1:8000/api/v1/produtos"));
}

main();