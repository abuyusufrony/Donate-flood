document.getElementById('second-donate').addEventListener('click', function () {
    const secondInput = getInputByuser('second-input');

    if (isNaN(secondInput)) {
        alert('is Not a number');
        return;

    }
    else {
        const secondSpan = document.getElementById('second-span').innerText;
        document.getElementById('second-span').innerText = secondInput;
        const secondMain = document.getElementById('mainBalnce').innerText;
        const SecondBiyog = secondMain - secondSpan;
        document.getElementById('mainBalnce').innerText = SecondBiyog;


        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerText = `cash in ${secondInput}  from Floods in Bangladesh.now Blance ${SecondBiyog} `;
        document.getElementById('history-sec').appendChild(div)

    }

})