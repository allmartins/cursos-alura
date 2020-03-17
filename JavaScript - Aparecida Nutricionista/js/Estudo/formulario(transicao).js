//selecionar o botão e escutar sua execução (preventDefault não deixa a pagina atualizar com o click)
var adcPaciente = document.querySelector("#adicionar-paciente")
adcPaciente.addEventListener("click", function(e){
    e.preventDefault()

    var form = document.querySelector("#form-adiciona")
    
    var paciente = obtemDadosDoPaciente(form)
    var pacienteTr = montaTr(paciente)

    var tabela = document.querySelector("#tabela-pacientes")    
    tabela.appendChild(pacienteTr)
})

function obtemDadosDoPaciente(formulario){
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }
    return paciente
}

function montaTr (paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    
    // var nomeTd = document.createElement("td")
    // nomeTd.textContent = paciente.nome;
    // nomeTd.classList.add("info-nome")
    var nomeTd = montaTd(paciente.nome, "info-nome")

    // var pesoTd = document.createElement("td")
    // pesoTd.textContent = paciente.peso;
    // pesoTd.classList.add("info-peso")
    var pesoTd = montaTd(paciente.peso, "info-peso")

    // var alturaTd = document.createElement("td")
    // alturaTd.textContent = paciente.altura;
    // alturaTd.classList.add("info-altura")
    var alturaTd = montaTd(paciente.altura, "info-altura")

    // var gorduraTd = document.createElement("td")
    // gorduraTd.textContent = paciente.gordura;
    // gorduraTd.classList.add("info-gordura")
    var gorduraTd = montaTd(paciente.gordura, "info-gordura")

    // var imcTd = document.createElement("td")
    // imcTd.textContent = paciente.imc;
    // imcTd.classList.add("info-imc")
    var imcTd = montaTd(paciente.imc, "info-imc")

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}