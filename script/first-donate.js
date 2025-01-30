document.getElementById('fst-donate').addEventListener('click',
    function () {
        const firstInput = getInputByuser('first-input');



        const firstspan = document.getElementById('first-span');

        const firstMainbal = document.getElementById('mainBalnce').innerText;
        const updateBal = firstMainbal - firstInput;
        document.getElementById('mainBalnce').innerText = updateBal;
        firstspan.innerText = firstInput;
















    }
)
