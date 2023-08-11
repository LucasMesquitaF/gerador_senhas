const generatePasswordButton = document.querySelector('#generate-password');
const passwordOptionsButton = document.querySelector('#create-password');
const generatedPasswordElement = document.querySelector('#generated-password');
const passwordOptionsElement = document.querySelector('#password-options');

const getterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbols = () => {
    const symbols = "()[]{}=<>/.,!@#$%¨&*+-"
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = (passwordLength, generators) => {
    let password = "";

    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue;
        })
    }

    password = password.slice(0, passwordLength);
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
}

passwordOptionsButton.addEventListener("click", () => {

    const passwordLength = document.getElementById("char-number").value;
    const hasLetter = document.getElementById("hasLetter").checked;
    const hasNumber = document.getElementById("hasNumber").checked;
    const hasSymbol = document.getElementById("hasSymbol").checked;

    let generators = [];

    if (hasLetter) {
        generators.push(getterLowerCase, getterUpperCase);
    }
    if (hasNumber) {
        generators.push(getNumber);
    }
    if (hasSymbol) {
        generators.push(getSymbols);
    }

    console.log(passwordLength);

    if ((hasNumber || hasLetter || hasSymbol) && passwordLength > 0) {
        generatePassword(passwordLength, generators);
    }
    else if (passwordLength <= 0) {
        alert('O número de caracteres deve ser maior que 0');
    }
    else {
        alert('Selecione alguma opção');
    }
})


generatePasswordButton.addEventListener("click", () => {
    passwordOptionsElement.style.display = "block";
})