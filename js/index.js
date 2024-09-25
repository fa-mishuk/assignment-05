document.getElementById("donate-btn").addEventListener('click', function (event) {
    event.preventDefault();

    showColorById("donate-btn")
    showColorById("history-btn")
    showColorById("donate-card")

})


document.getElementById("history-btn").addEventListener('click', function (event) {
    event.preventDefault();

    showColorByIdd("history-btn")
    showColorByIdd("donate-btn")
    showColorByIdd("donate-card")
})


document.getElementById("logo-btn").addEventListener('click', function (e) {
    e.preventDefault()
    window.location.href = 'home.html'
})

window.addEventListener('scroll', function () {
    const navBanner = document.getElementById('nav-banner');
    if (window.scrollY > 100) {
        navBanner.classList.add('blurred');
        document.getElementById('nav-section').classList.remove('bg-[#F9F7F3FF]');
    } else {
        navBanner.classList.remove('blurred');
        document.getElementById('nav-section').classList.add('bg-[#F9F7F3FF]');
    }
});

// donate1 function start
document.getElementById('donate1').addEventListener('click', function (event) {
    event.preventDefault();

    const donateInput1 = getInputValueById("donate-input1");
    const modal = document.getElementById('my_modal_2');
    const closeBtn = document.getElementById('close-btn');
    const donateP1 = document.getElementById('donate-p1').innerText


    if (!isNaN(donateInput1) && Number(donateInput1) > 0) {

        const balance1 = getDonateBalance('balance1');

        const donatedBalance1 = balance1 + donateInput1;

        const reservedAmount = getDonateBalance("reserved-amount")

        if (donateInput1 <= reservedAmount) {
            document.getElementById('balance1').innerText = donatedBalance1;
            const reservedTotalAmount = reservedAmount - donateInput1;
            document.getElementById('reserved-amount').innerText = reservedTotalAmount;

            modal.showModal();
            closeBtn.addEventListener('click', function () {
                modal.close();
            });

            const div = document.createElement("div");
            div.innerHTML = `
                <div class="grid gap-4 p-8 border mx-7 md:mx-24 lg:mx-24 rounded-xl mb-5">
                    <p class="font-bold lg:text-xl"><span>${donateInput1} Taka is </span>${donateP1}</p>
                    <p class="text-[#111111B3] text-sm lg:text-[16px]">Date : ${new Date().toLocaleDateString()} ${new Date().toTimeString()} (Bangladesh
                    Standard Time)</p>
                </div>`;

            document.getElementById("history-container").appendChild(div);
            
            showHistoryContainer();
            hideHistoryContainer();
        }
        else {
            alert('Invalid donate amount')
            return;
        }


    } else {
        alert('Please add a valid amount');
        return;
    }
})
// donate1 function end


// donate2 function start
document.getElementById('donate2').addEventListener('click', function (event) {
    event.preventDefault();

    const donateInput2 = getInputValueById("donate-input2");
    const modal = document.getElementById('my_modal_2');
    const closeBtn = document.getElementById('close-btn');
    const donateP2 = document.getElementById('donate-p2').innerText

    if (!isNaN(donateInput2) && Number(donateInput2) > 0) {

        const balance2 = getDonateBalance('balance2');

        const donatedBalance2 = balance2 + donateInput2;

        const reservedAmount = getDonateBalance("reserved-amount")

        if (donateInput2 <= reservedAmount) {
            document.getElementById('balance2').innerText = donatedBalance2;
            const reservedTotalAmount = reservedAmount - donateInput2;
            document.getElementById('reserved-amount').innerText = reservedTotalAmount;

            modal.showModal();
            closeBtn.addEventListener('click', function () {
                modal.close();
            });


            const div = document.createElement("div");
            div.innerHTML = `
                <div class="grid gap-4 p-8 border mx-7 md:mx-24 lg:mx-24 rounded-xl mb-5">
                    <p class="font-bold lg:text-xl"><span>${donateInput2} Taka is </span>${donateP2}</p>
                    <p class="text-[#111111B3] text-sm lg:text-[16px]">Date : ${new Date().toLocaleDateString()} ${new Date().toTimeString()} (Bangladesh
                    Standard Time)</p>
                </div>`;

            document.getElementById("history-container").appendChild(div);

            showHistoryContainer();
            hideHistoryContainer();
        }
        else {
            alert('Invalid donate amount')
            return;
        }


    } else {
        alert('Please add a valid amount');
        return;
    }
})
// donate2 function end


// donate3 function start
document.getElementById('donate3').addEventListener('click', function (event) {
    event.preventDefault();

    const donateInput3 = getInputValueById("donate-input3");
    const modal = document.getElementById('my_modal_2');
    const closeBtn = document.getElementById('close-btn');
    const donateP3 = document.getElementById('donate-p3').innerText

    if (!isNaN(donateInput3) && Number(donateInput3) > 0) {

        const balance3 = getDonateBalance('balance3');

        const donatedBalance3 = balance3 + donateInput3;

        const reservedAmount = getDonateBalance("reserved-amount")


        if (donateInput3 <= reservedAmount) {
            document.getElementById('balance3').innerText = donatedBalance3;
            const reservedTotalAmount = reservedAmount - donateInput3;
            document.getElementById('reserved-amount').innerText = reservedTotalAmount;
            modal.showModal();
            closeBtn.addEventListener('click', function () {
                modal.close();
            });

            const div = document.createElement("div");
            div.innerHTML = `
                <div class="grid gap-4 p-8 border mx-7 md:mx-24 lg:mx-24 rounded-xl mb-5">
                    <p class="font-bold lg:text-xl"><span>${donateInput3} Taka is </span>${donateP3}</p>
                    <p class="text-[#111111B3] text-sm lg:text-[16px]">Date : ${new Date().toLocaleDateString()} ${new Date().toTimeString()} (Bangladesh
                    Standard Time)</p>
                </div>`;

            document.getElementById("history-container").appendChild(div);

            showHistoryContainer();
            hideHistoryContainer();
        }
        else {
            alert('Invalid donate amount')
            return;
        }


    } else {
        alert('Please add a valid amount');
        return;
    }
})
