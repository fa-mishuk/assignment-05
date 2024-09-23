document.getElementById("donate-btn").addEventListener('click', function () {
    document.getElementById('donate-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
})

document.getElementById("history-btn").addEventListener('click', function () {
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    document.getElementById('donate-btn').classList.remove('bg-[#B4F461]');
})


// donate1 function start
document.getElementById('donate1').addEventListener('click', function (event) {
    event.preventDefault();

    const donateInput1 = getInputValueById("donate-input1");
    const modal = document.getElementById('my_modal_2');
    const closeBtn = document.getElementById('close-btn');

    if (!isNaN(donateInput1) && Number(donateInput1) > 0) {

        const balance1 = getDonateBalance('balance1');

        const donatedBalance1 = balance1 + donateInput1;

        const reservedAmount = getDonateBalance("reserved-amount")

        if (donatedBalance1 < reservedAmount) {
            document.getElementById('balance1').innerText = donatedBalance1;
            const reservedTotalAmount = reservedAmount - donatedBalance1;
            document.getElementById('reserved-amount').innerText = reservedTotalAmount;

            modal.showModal();
            closeBtn.addEventListener('click', function () {
                modal.close();
            });
        }
        else {
            alert('Please add a limited amount')
            return;
        }


    } else {
        alert('Please add a minimum amount');
        return;
    }
})
// donate1 function end


// donate2 function start
// document.getElementById('donate2').addEventListener('click', function (event) {
//     event.preventDefault();

//     const donateInput2 = getInputValueById("donate-input2");
//     const modal = document.getElementById('my_modal_2');
//     const closeBtn = document.getElementById('close-btn');

//     if (!isNaN(donateInput2) && Number(donateInput2) > 0) {
//         modal.showModal();

//         const balance2 = getDonateBalance('balance2');

//         const donatedBalance2 = balance2 + donateInput2;

//         const reservedAmount = getDonateBalance("reserved-amount")

//         if (donatedBalance2 < reservedAmount) {
//             document.getElementById('balance2').innerText = donatedBalance2;
//             const reservedTotalAmount = reservedAmount - donatedBalance2;
//             document.getElementById('reserved-amount').innerText = reservedTotalAmount;

//             modal.showModal();
//             closeBtn.addEventListener('click', function () {
//                 modal.close();
//             });
//         }
//         else {
//             alert('Please add a limited amount')
//             return;
//         }
//     } else {
//         alert('Please add a minimum amount');
//         return;
//     }
// })

document.getElementById('donate2').addEventListener('click', function (event) {
    event.preventDefault();

    const donateInput2 = getInputValueById("donate-input2");
    const modal = document.getElementById('my_modal_2');
    const closeBtn = document.getElementById('close-btn');

    if (!isNaN(donateInput2) && Number(donateInput2) > 0) {

        const balance2 = getDonateBalance('balance2');

        const donatedBalance2 = balance2 + donateInput2;

        const reservedAmount = getDonateBalance("reserved-amount")

        if (donatedBalance2 <= reservedAmount) {
            document.getElementById('balance2').innerText = donatedBalance2;
            const reservedTotalAmount = reservedAmount - donatedBalance2;
            document.getElementById('reserved-amount').innerText = reservedTotalAmount;

            modal.showModal();
            closeBtn.addEventListener('click', function () {
                modal.close();
            });
        }
        else {
            alert('Please add a limited amount')
            return;
        }


    } else {
        alert('Please add a minimum amount');
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

    if (!isNaN(donateInput3) && Number(donateInput3) > 0) {

        const balance3 = getDonateBalance('balance3');

        const donatedBalance3 = balance3 + donateInput3;

        const reservedAmount = getDonateBalance("reserved-amount")
        const reservedTotalAmount = reservedAmount - donatedBalance3;

        if (donatedBalance3 < reservedAmount) {
            document.getElementById('balance3').innerText = donatedBalance3;
           
            document.getElementById('reserved-amount').innerText = reservedTotalAmount;

            modal.showModal();
            closeBtn.addEventListener('click', function () {
                modal.close();
            });
        }
        else {
            alert('Please add a limited amount')
            return;
        }


    } else {
        alert('Please add a minimum amount');
        return;
    }
})
// donate3 function end