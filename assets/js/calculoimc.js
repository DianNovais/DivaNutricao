var pacientes = document.querySelectorAll("#pacientes");

for(i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var peso = paciente.querySelector("#tpeso").textContent;
    var altura = paciente.querySelector("#taltura").textContent;

    var timc = paciente.querySelector("#timc");
    timc.textContent = calculaImc(altura,peso);

    var alturaEhValido = validaAltura(altura);
    verificaAltura(alturaEhValido,paciente,timc);

    var pesoEhValido = validaPeso(peso);
    verificaPeso(pesoEhValido,paciente,timc);
}
function calculaImc(altura,peso){
    imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso <= 0 || peso >= 300){
        var pesoEhValido = false;
    }else{
        var pesoEhValido = true;
    }
    return pesoEhValido;
}

function verificaPeso(pesoEhValido,paciente,timc){
    if(!pesoEhValido){
        var invalido = paciente.classList.add("invalido");
        var invalido = timc.textContent = ("Peso invalida");
        
    }
    return invalido;
 }

function validaAltura(altura){
    if(0 >= altura || 3 <= altura){
        var alturaEhValido = false;
    }else{
        var alturaEhValido = true;
    }
    return alturaEhValido;
 }

 function verificaAltura(alturaEhValido,paciente,timc){
    if(!alturaEhValido){
        var invalido = paciente.classList.add("invalido");
        var invalido = timc.textContent = ("altura invalida");
        
    }
    return invalido;
 }
