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
        }


    }


)