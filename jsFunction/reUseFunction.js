function getInputValueById(id) {
    const value = document.getElementById(id).value;
    const convertValue = parseFloat(value);
    return convertValue;
}

function getInnerTextById(id) {
    const text = document.getElementById(id).innerText;
    const convertText = parseFloat(text);
    return convertText;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function block(id) {
    document.getElementById(id).style.display = 'block';
}

function none(id) {
    document.getElementById(id).style.display = 'none';
}