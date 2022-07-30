var filtro = document.querySelector("#filter");
filtro.addEventListener("input", function(event){
    var pacientes = document.querySelectorAll("#pacientes");
    if(filtro.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var nomeTd = paciente.querySelector("#tnome");
            var nome = nomeTd.textContent;
            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(nome)){
                paciente.classList.add("none");
            }else{
                paciente.classList.remove("none");
            }
        
        }
    }else{
        for( var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("none");
        }

    }
})