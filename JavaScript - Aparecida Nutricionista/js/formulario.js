//selecionar o botão e escutar sua execução (preventDefault não deixa a pagina atualizar com o click)
var adcPaciente = document.querySelector("#adicionar-paciente")
adcPaciente.addEventListener("click", function(e){
    e.preventDefault()

    var form = document.querySelector("#form-adiciona")
    var paciente = obtemDadosDoPaciente(form)
    
    var erros = validaPaciente(paciente)
    
    if(erros.length > 0){
        exibeMensagensDeErros(erros)
        return
    }

    adicionaPacienteNaTabela(paciente)

    form.reset()
    var mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ""
})

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes")    
    tabela.appendChild(pacienteTr)


}

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
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))

    // var pesoTd = document.createElement("td")
    // pesoTd.textContent = paciente.peso;
    // pesoTd.classList.add("info-peso")
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))

    // var alturaTd = document.createElement("td")
    // alturaTd.textContent = paciente.altura;
    // alturaTd.classList.add("info-altura")
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))

    // var gorduraTd = document.createElement("td")
    // gorduraTd.textContent = paciente.gordura;
    // gorduraTd.classList.add("info-gordura")
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))

    // var imcTd = document.createElement("td")
    // imcTd.textContent = paciente.imc;
    // imcTd.classList.add("info-imc")
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente){

    var erros = []

    if(paciente.nome.length == 0){
        erros.push("Nome em branco!")
    
    }if(!validaPeso(paciente.peso)){
        erros.push("Peso Inválido!")
    
    }if(paciente.peso.length == 0){
        erros.push("Peso em branco!")    
    
    }if(!validaAltura(paciente.altura)){
        erros.push("Altura Inválida!")

    }if(paciente.altura.length == 0){
        erros.push("Altura em branco!")

    }if(paciente.gordura.length == 0){
        erros.push("gordura em branco!")
    }

    return erros
}

function exibeMensagensDeErros(erros){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""
    erros.forEach(function(erro){
        var li = document.createElement("li")
       li.textContent = erro
        ul.appendChild(li)
    });
}