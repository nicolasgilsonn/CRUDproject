document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }

    validar(tarefa)

    console.log(tarefa)

})

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
    if (tarefa.pontos <= 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos-erro").innerText = "Pontos deve ser maior que zero"
    }


}

function limparErros(){
    document.querySelectorAll("input .is-error, textarea .is-error").classList.remove("is-error")
}