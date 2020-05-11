const container = document.querySelector(".container");
var teste;
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"


var r = new XMLHttpRequest();
r.addEventListener("readystatechange", function() {
    if (r.readyState === 4 && r.status === 200) {
        callback(r.responseText);
    }
  });

r.open("GET", url, false);
r.send();

var result = r.responseText; 
var obj = JSON.parse(result);
console.log(obj);


const showProdutos = () => {
    let output = "";
    obj.forEach(
      ({ photo, name, price,property_type }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${photo} />
                  <h1 class="card--title">R$${price},00/Dia</h1>
                  <h2 class="card--text" > ${name}</h2>
                  <h3 class="card--text" >Tipo: ${property_type}</h3>
                  <h4 class="card--link" >Alugar</h4>
                </div>
                `)
    );
    container.innerHTML = output;
  };
  
  document.addEventListener("DOMContentLoaded", showProdutos);

  
