const generatePasswordButton = document.querySelector('#generate-password');
const generatedPasswordElement = document.querySelector('#generated-password');

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

const generatePassword = (getterLowerCase, getterUpperCase, getNumber, getSymbols) => {
    let password = "";

    const passwordLength = 10;

    const generators = [
        getterLowerCase,
        getterUpperCase,
        getNumber,
        getSymbols
    ]

    for (i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue;
        })
    }

    password = password.slice(0, passwordLength);
    console.log(password);
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
}

generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getterLowerCase,
        getterUpperCase,
        getNumber,
        getSymbols
    );
})