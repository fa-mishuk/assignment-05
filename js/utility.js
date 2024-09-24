function getInputValueById(id) {
    const inputValues = document.getElementById(id).value
    const inputValue = parseFloat(inputValues)

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

function showColorById(id) {
    document.getElementById('donate-btn').classList.add('bg-[#B4F461]');
    document.getElementById('donate-btn').classList.remove('btn');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('btn');
    document.getElementById('donate-card').classList.remove('hidden')
    

    return;
}

function showColorByIdd(id) {
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('btn');
    document.getElementById('donate-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donate-btn').classList.add('btn');
    document.getElementById('donate-card').classList.add('hidden')

    return;
}