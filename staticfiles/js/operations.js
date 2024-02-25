function addToScreen(value) {
    var screen = document.getElementById('screen');
    if (screen.innerText === '0') {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}

function clearScreen() {
    document.getElementById('screen').innerText = '0';
}

function calculate() {
    try {
        var result = eval(document.getElementById('screen').innerText);
        document.getElementById('screen').innerText = result;
    } catch (error) {
        document.getElementById('screen').innerText = 'Error';
    }
}