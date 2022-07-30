var tabela = document.querySelector("#body-table");
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("visibleout");
    setTimeout(function(){
        event.target.parentNode.remove();
    },200);

})