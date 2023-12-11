function verifyKickHasValidValue(kick) {
    const number = +kick

    if (kickInvalid(number)) {
        if (kick.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
                <h2>GAME OVER!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
            document.body.style.backgroundColor = "black"
        } else {
            elementKick.innerHTML += '<div>Valor Inválido</div>'
        }
        
        return
    }

    if (numberNotAllowed(number)) {
        elementKick.innerHTML += `
        <div>Valor inválido: Fale um número entre ${lowerValue} e ${greaterValue}</div>
        `
        return
    }

    if (number === numberSecret) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numberSecret}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (number > numberSecret) {
        elementKick.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementKick.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function kickInvalid(number) {
    return Number.isNaN(number)
}

function numberNotAllowed(number) {
    return number > greaterValue || number < lowerValue
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})