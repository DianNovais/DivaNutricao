var button = document.querySelector("#button-form");
button.addEventListener("click", adicionar);

function adicionar(event){
    event.preventDefault(event);

    // obtendo valores do form-page
    var form = document.querySelector("#form-page")

    var paciente = obtendoInfDoForm(form);


    var erros = validaPaciente(paciente.peso, paciente.altura, paciente.nome, paciente.gordura);
    if(erros.length > 0){
        var ul = document.querySelector("#aviso")
        ul.innerHTML = "";
        exibeMenssagemDeErro(erros);
        return;
    }
    //obtendo tabela
    obtendoTableEAddCliente(paciente);
    form.reset();

}
function obtendoInfDoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.altura.value,form.peso.value)
    }
    return paciente;
}

function criandoTr(paciente){

    

    pacientesTr = document.createElement("tr");
    pacientesTr.setAttribute("id", "pacientes");

        //colocando as variaveis Td dentro(filho) da variavel Tr
    pacientesTr.appendChild(criandoTd(paciente.nome, "tnome"));
    pacientesTr.appendChild(criandoTd(paciente.peso, "tpeso"));
    pacientesTr.appendChild(criandoTd(paciente.altura, "taltura"));
    pacientesTr.appendChild(criandoTd(paciente.gordura, "tgordura"));
    pacientesTr.appendChild(criandoTd(paciente.imc, "timc"));
    
    return pacientesTr;

}
function obtendoTableEAddCliente(paciente){
    var tabela = document.querySelector("#body-table");
    var pacientesTr = criandoTr(paciente);
    tabela.appendChild(pacientesTr);
}
//colocando valores do objeto paciente dentro das variaveis Td
function criandoTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.setAttribute("id", classe);
    return td;
}
function validaPaciente(peso,altura,nome,gordura){
    var erros = [];
    var alturaVerificada = validaAltura(altura);
    var pesoVerificado = validaPeso(peso);

    if(peso == '' || nome == '' || altura == ''  || gordura == '' ){
        erros.push("Não deixe campos em branco");
    }

    if(!alturaVerificada){
        erros.push("Altura inválida");
    }
    if(!pesoVerificado){
        erros.push("Peso inválido");
    }
    
    return erros;
}
function validaNull(erros){
    
    return erros;
}
function exibeMenssagemDeErro(erros){
    var aviso = document.querySelector("#aviso");
    erros.forEach(function(erros) {
        var li = document.createElement("li");
        li.textContent = erros;
        aviso.appendChild(li);
    });
    
}