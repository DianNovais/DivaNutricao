var button = document.querySelector("#button-table");
button.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#ajax-erro");
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            erroAjax.classList.add("none");
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente){
                obtendoTableEAddCliente(paciente);
            });
        }else{
            erroAjax.classList.remove("none");
        }
    });
});