/*

*/

//selecionar o botão e escutar sua execução (preventDefault não deixa a pagina atualizar com o click)
var adcPaciente = document.querySelector("#adicionar-paciente")
adcPaciente.addEventListener("click", function(e){
    e.preventDefault()

    //variavel que seleciona todo o formulario
    var formulario = document.querySelector("#form-adiciona")
    
    //essas variaveis são utilizadas para detectar o valor digitado de cada campo 
    //variavel do formulario. id do input. value para pegar o valor
    var nome = formulario.nome.value
    var peso = formulario.peso.value
    var altura = formulario.altura.value
    var gordura = formulario.gordura.value

    // criando os os elementos tr e td's
    var pacienteTr = document.createElement("tr")
    
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    // atribuir o valor detectado para cada td
    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    //organizando os td's dentro da tr
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    //criando uma variavel para adicionar o paciente
    var tabela = document.querySelector("#tabela-pacientes")
    
    //organizando o paciente na tabela
    tabela.appendChild(pacienteTr)

})