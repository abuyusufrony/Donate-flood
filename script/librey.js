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