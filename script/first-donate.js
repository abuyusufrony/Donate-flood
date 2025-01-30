document.getElementById('fst-donate').addEventListener('click',
    function () {

        const firstInput = getInputByuser('first-input');
        sum += firstInput;


        const firstspan = document.getElementById('first-span');

        const firstMainbal = document.getElementById('mainBalnce').innerText;
        const updateBal = firstMainbal - firstInput;
        document.getElementById('mainBalnce').innerText = updateBal;
        firstspan.innerText = firstInput;
        const p = document.createElement('p');

        p.innerText = `added:${firstInput} tk. Eastern Flash Flood Situation :${updateBal}`;
        document.getElementById('history-sec').appendChild(p);
















    }
)
