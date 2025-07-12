function ToggleColor() {
    const toggle = document.getElementById('toggle');
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? 'Claro' : 'Oscuro';
}

function GeneratePassword() {
    const upperCheckbox = document.getElementById('setup-upper');
    const lowerCheckbox = document.getElementById('setup-lower');
    const numberCheckbox = document.getElementById('setup-number');
    const symbolCheckbox = document.getElementById('setup-symbol');

    const lengthSlider = document.getElementById('input-range');
    const passwordField = document.getElementById('final-product');

    let password = '';

    const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ";", ":", "-", "?"];

    let charPool = [];

    if (upperCheckbox.checked) charPool = charPool.concat(upper);
    if (lowerCheckbox.checked) charPool = charPool.concat(lower);
    if (numberCheckbox.checked) charPool = charPool.concat(number);
    if (symbolCheckbox.checked) charPool = charPool.concat(symbol);

    const length_ = parseInt(lengthSlider.value);

    for (let i = 0; i < length_; i++) {
        const index = Math.floor(Math.random() * charPool.length);
        password += charPool[index];
    }

    passwordField.value = password;
}

document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.getElementById("input-range");
    const rangeValue = document.getElementById("range-value");

    rangeValue.textContent = rangeInput.value;

    rangeInput.addEventListener("input", function () {
        rangeValue.textContent = this.value;
        GeneratePassword();
    });

    const checkboxes = [document.getElementById('setup-upper'), document.getElementById('setup-lower'), document.getElementById('setup-number'), document.getElementById('setup-symbol')];
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', GeneratePassword);
    });
});

window.onload = function () {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.checked = true;
    });
    GeneratePassword();
}