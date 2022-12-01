const loadXMLDoc = () => {
    // esta linha cria um xmlRequest
    let xhttp = new XMLHttpRequest();
    // a propriedade onreadystatechange, especifica uma função
    // pra ser executada toda vez que o status do XMLHttpRequest muda  
    xhttp.onreadystatechange = function() {
      // quando o readyState for 4 e o estado da propriedade
      // for 200, a resposta está pronta
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
        // a propriedade responseText retorna a resposta do
        // servidor como uma string
      }
    };
    xhttp.open("GET", "xmlhttp_info.xml", true);
    xhttp.send();
  }

  module.exports = loadXMLDoc;