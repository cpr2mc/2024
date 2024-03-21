// Currency Converter App
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

// Create dropdown from the currencies array
currencies.forEach((currency) => {
    console.log(currency)
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

// Repeat the same thing for the other dropdown
currencies.forEach((currency) => {
    console.log(currency)
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

