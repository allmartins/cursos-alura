var filtro = document.querySelector("#filtrar-tabela")
filtro.addEventListener("input", function(){
    
    if(filtro.value.length != 0){
        var pacientes = document.querySelectorAll(".paciente")
        pacientes.forEach(function(paciente){
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent
            var expressao = new RegExp(filtro.value, "i")

            if(!expressao.test(nome)){
                paciente.classList.add("esconde-paciente")
            }else{
                paciente.classList.remove("esconde-paciente")
            }
        })
    }else{
        var pacientes = document.querySelectorAll(".paciente")
        pacientes.forEach(function(paciente){
            paciente.classList.remove("esconde-paciente")
        })
    }
    
    
    
})