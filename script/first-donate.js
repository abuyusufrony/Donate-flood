document.getElementById('fst-donate').addEventListener('click',
    function () {


        const firstInput = getInputByuser('first-input');
        const firstMainbal = document.getElementById('mainBalnce').innerText;



        const firstspan = document.getElementById('first-span');
        const firstSpanValue = firstspan.innerText;
        const firsSpanValueFloat = parseFloat(firstSpanValue);

        console.log(typeof firsSpanValueFloat);
        const firstsum = firstInput + firsSpanValueFloat;
        console.log(firstsum);



        const updateBal = firstMainbal - firstsum;
        document.getElementById('mainBalnce').innerText = updateBal;
        firstspan.innerText = firstsum;
        const p = document.createElement('p');

        p.innerText = `added:${firstInput} tk. Eastern Flash Flood Situation :${updateBal}`;
        document.getElementById('history-sec').appendChild(p);























    }
)
