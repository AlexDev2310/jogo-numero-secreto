const greaterValue = 1000
const lowerValue = 1

const numberSecret = generateRandomNumber()
console.log(numberSecret)

function generateRandomNumber() {
    return parseInt(Math.random() * greaterValue + 1)
}

const elementLowerValue = document.getElementById('menor-valor')
elementLowerValue.innerHTML = lowerValue

const elementGreaterValue = document.getElementById('maior-valor')
elementGreaterValue.innerHTML = greaterValue