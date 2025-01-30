document.getElementById('third-button').addEventListener('click',
    function () {
        const thridInput = getInputByuser('thrid-input');
        const thirdMain = document.getElementById('mainBalnce').innerText;
        if (isNaN(thridInput)) {
            alert('is not number')
            return;
        }
        else {
            const thriSpan = document.getElementById('third-span').innerText = thridInput;
            const thirdmainSum = thirdMain - thridInput;
            console.log(thirdmainSum)
            document.getElementById('mainBalnce').innerText = thirdmainSum;

            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.classList.add('mb-2');
            div.innerText = `Donate ${thridInput}Bangladesh quota reform movement.total Blance are ${thirdmainSum}`
            document.getElementById('history-sec').appendChild(div);
        }


    }


)