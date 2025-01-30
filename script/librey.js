function getInputByuser(id) {
    const user = document.getElementById(id);
    const userValue = user.value;
    const userNumer = parseFloat(userValue);
    return userNumer;
}
function clickByuser(id) {
    document.getElementById('history-sec').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
document.getElementById('donate-button').addEventListener('click', function () {

    console.log('button are clicked');
})