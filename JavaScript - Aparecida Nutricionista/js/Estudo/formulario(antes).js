var adcPaciente = document.querySelector("#adicionar-paciente")
adcPaciente.addEventListener("click", function(event){
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")
    // pega os valores do input la do formulario
    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

    //criando um paciente novo (nova TR)
    var pacienteTr = document.createElement("tr")

    //criando as caracteristicas de um paciente (novas TDs)
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    // Atribui os valores do formulario para o paciente/TR-TD
    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    imcTd.textContent = calculaImc(peso, altura)

    //Colocando os TDs dentro da TR (caracteristicas de cada paciente)
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    // colocando o formulario do paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
})
