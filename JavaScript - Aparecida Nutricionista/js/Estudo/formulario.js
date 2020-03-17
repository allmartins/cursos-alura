var adcPaciente = document.querySelector("#adicionar-paciente")
adcPaciente.addEventListener("click", function(event){
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")

    var paciente = pegaPacienteDoFormulario(form)
    var pacienteTr = montaTr(paciente)

    var erro = validaPaciente(paciente)

    if(erro.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro")
        mensagemErro.textContent = erro
        return
    }

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
    form.reset()
})


function pegaPacienteDoFormulario(formulario) {
    var objeto = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value )
    }
        return objeto
}

function montaTr(formulario){

    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(formulario.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(formulario.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(formulario.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(formulario.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(formulario.imc, "info-imc"))

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add (classe)

    return td
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return " "
    }else{
        return "O peso é invalido"
    }
}