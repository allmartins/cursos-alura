var pacientes = document.querySelectorAll(".paciente")

pacientes.forEach(function(paciente){
    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent
    
    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent
    
    var tdImc = paciente.querySelector(".info-imc")
    
    var pesoValido = validaPeso(peso)
    var alturaValida = validaAltura(altura)

    if (!pesoValido){
        tdImc.textContent = "Peso Inválido!"
        pesoValido = false
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaValida){
        tdImc.textContent = "Altura Inválida!"
        alturaValida = false
        paciente.classList.add("paciente-invalido")
    }

    if (pesoValido && alturaValida){
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc
    }
})

function validaPeso(peso){
    if(peso <= 350 && peso >= 0){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura <= 3.0 && altura >= 0){
        return true
    }else{
        return false
    }
}

function calculaImc(peso, altura){
    var imc = 0 
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}