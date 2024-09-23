function getInputValueById(id) {
    const inputValues = document.getElementById(id).value
    const inputValue = parseFloat(inputValues)
    console.log(typeof inputValue)

    return inputValue;
}


function getBackgroundColor(id) {
    const color = document.getElementById(id).classList.add('btn-color');
    return color;
}

function getDonateBalance(id) {
    const donateBalances = document.getElementById(id).innerText;
    const donateBalance = parseFloat(donateBalances)

    return donateBalance;
}