const valueInputNode = document.querySelector('.js-value-input')
const currencySelectorNode = document.querySelector('.js-currency-selector')
const outputNode = document.querySelector('.js-output')

const getInput = () => {
return {
rub: Number(valueInputNode.value),
currency: currencySelectorNode.value
}
}

const render = (result) => {
outputNode.innerText = result
}



valueInputNode.addEventListener('input', function() {
const result = convert(getInput())

render(result)
})

currencySelectorNode.addEventListener('change', function () {
    const result = convert(getInput())

render(result)
})