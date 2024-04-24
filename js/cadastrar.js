document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        data: form.data.value
    }

    validar(tarefa)

    salvar(tarefa)
    

})

function salvar(tarefa) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    window.location.href = "index.html"

    
}

function validar(tarefa) {
    limparErros()
    if (tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "Título é obrigatório"
    }
    if (tarefa.descricao.trim() == "" && tarefa.descricao.length < 15){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = "A descrição deve ter pelo menos 15 caracteres"
    }
    if (tarefa.data.trim() == ''){
        document.querySelector("#data").classList.add("is-error")
        document.querySelector("#data-erro").innerText = "Deve haver algum prazo"
    }
}

function limparErros(){
    const campos = document
                .querySelectorAll("input.is-error, textarea.is-error")
    console.log(campos)

    campos
        .forEach(input => input.classList.remove("is-error"))
    
    document.querySelectorAll(".nes-field span")
            .forEach( span => span.innerText= "")

}


