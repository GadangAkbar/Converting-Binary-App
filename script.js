document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("form_input");
    const outputField = document.querySelector(".form_output");
    const convertButton = document.querySelector(".action_button");
    const exchangeButton = document.querySelector(".exchange");
    const inputLabel = document.querySelector("label[for='form_input'] h4");
    const outputLabel = document.querySelector("label[for='form_output'] h4");

    let isBinaryToDecimal = true; // Default mode: Binary to Decimal

    // Function to convert Binary to Decimal
    function binaryToDecimal(binary) {
        return parseInt(binary, 2);
    }

    // Function to convert Decimal to Binary
    function decimalToBinary(decimal) {
        return Number(decimal).toString(2);
    }

    // Event listener for Convert button
    convertButton.addEventListener("click", function () {
        let inputValue = inputField.value.trim();
        if (inputValue === "") {
            outputField.value = "";
            return;
        }

        if (isBinaryToDecimal) {
            if (!/^[01]+$/.test(inputValue)) {
                alert("Masukkan hanya angka biner (0 atau 1)!");
                return;
            }
            outputField.value = binaryToDecimal(inputValue);
        } else {
            if (isNaN(inputValue) || inputValue < 0) {
                alert("Masukkan hanya angka desimal positif!");
                return;
            }
            outputField.value = decimalToBinary(inputValue);
        }
    });

    // Event listener for Exchange button
    exchangeButton.addEventListener("click", function () {
        isBinaryToDecimal = !isBinaryToDecimal;

        if (isBinaryToDecimal) {
            inputLabel.textContent = "Biner";
            outputLabel.textContent = "Decimal";
            inputField.placeholder = "Masukkan angka biner...";
        } else {
            inputLabel.textContent = "Decimal";
            outputLabel.textContent = "Biner";
            inputField.placeholder = "Masukkan angka desimal...";
        }
        inputField.value = "";
        outputField.value = "";
    });
});
