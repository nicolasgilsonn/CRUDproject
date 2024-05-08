const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach(tarefa => card(tarefa))

function card (tarefa){

    const cardTarefa = `
        <div class="nes-container with-title is-centered">
            <p class="title">${tarefa.titulo}</p>
            <p>${tarefa.descricao}</p>
            <p>Validade:${tarefa.data}</p>

            <progress class="nes-progress is-success" value="50" max="100"></progress>
            <button onClick="dec('${tarefa.id}')" type="button" class="nes-btn is-primary">-</button>
            <button onClick="apagar('${tarefa.id}')" type="button" class="nes-btn is-error">Deletar</button>
            <button onClick="inc('${tarefa.id}')" type="button" class="nes-btn is-primary">+</button>
        </div>
    `

    const card = document.createElement("div")
    card.id = tarefa.id
    card.innerHTML = cardTarefa
    document.querySelector("#lista-de-tarefas").appendChild(card)
}