function getInputByuser(id) {
    const user = document.getElementById(id);
    const userValue = user.value;
    const userNumer = parseFloat(userValue);
    return userNumer;
}