// Re-iterating lab01 from PDX Code Guild

/** *********Version 1********** */
// User Prompt: What is the distance in feet? [12]
// 12 ft is 3.6576 m

// let feetInMeters = .3048;
// let metersInFeet = 1;

// function conversions(inputValue) {
//     let convertedValue = inputValue * feetInMeters;
//     return convertedValue;
// }

// let convertButton = document.querySelector('#convertButton');
// // console.log(convertButton)

// convertButton.onclick = function() {
//     let inputValue = document.querySelector('#input_value').value;

//     let outPutValue = conversions(inputValue);
//     document.getElementById('result').innerHTML = `${inputValue} ft is ${outPutValue} m.`
// };

/** *********Version 2********** */
// allow the user to also enter the units, then convert 
//  the distance to meters
// allow feet, miles, meters, and kilometers
// What is the distance? 100
// What is the unit of distance? mi
// 100 mi is 160934 m

// let unitsDict = {
//     'feet': .3048,
//     'miles': 1609.34,
//     'meters': 1,
//     'kilometers': 1000,
// };

// function conversions(inputValue, inputUnits) {
//     let convertedValue = inputValue * unitsDict[inputUnits];
//     console.log(convertedValue)
//     return convertedValue;
// }

// let convertButton = document.querySelector('#convertButton');
// // console.log(convertButton)

// convertButton.onclick = function() {
//     let inputValue = document.querySelector('#input_value').value;
//     let inputUnits = document.querySelector('#input_units').value;
//     let outputValue = conversions(inputValue, inputUnits);
//     document.getElementById('result').innerHTML = `${inputValue} ft is ${outputValue} m.`
// };

// /** *********Version 3********** */
// // add support for yards and inches.

// let unitsDict = {
//     'feet': .3048,
//     'miles': 1609.34,
//     'meters': 1,
//     'kilometers': 1000,
//     'yards': .9144,
//     'inches': .0254,
// };

// function conversions(inputValue, inputUnits) {
//     let convertedValue = inputValue * unitsDict[inputUnits];
//     console.log(convertedValue)
//     return convertedValue;
// }

// let convertButton = document.querySelector('#convertButton');
// // console.log(convertButton)

// convertButton.onclick = function() {
//     let inputValue = document.querySelector('#input_value').value;
//     let inputUnits = document.querySelector('#input_units').value;
//     let outputValue = conversions(inputValue, inputUnits);
//     document.getElementById('result').innerHTML = `${inputValue} ft is ${outputValue} m.`
// };

/** *********Version 4********** */
// ask the user for the output units as well
// What is the distance? 100
// What are the input units? ft
// What are the output units? mi
// 100 ft is 0.0189394 mi

let unitsDict = {
    'feet': .3048,
    'miles': 1609.34,
    'meters': 1,
    'kilometers': 1000,
    'yards': .9144,
    'inches': .0254,
};

function convertToMeters(inputValue, inputUnits) {
    let convertedValue = inputValue * unitsDict[inputUnits];
    return convertedValue;
}

function convertToOutput(inputValue, inputUnits, outputUnits) {
    let meterConversion = convertToMeters(inputValue, inputUnits);
    let convertedValue = meterConversion * unitsDict[outputUnits];
    console.log(convertedValue);
    return convertedValue;
}

let convertButton = document.querySelector('#convertButton');
// console.log(convertButton)

convertButton.onclick = function() {
    let inputValue = document.querySelector('#input_value').value;
    let inputUnits = document.querySelector('#input_units').value;
    let outputUnits = document.querySelector('#output_units').value;
    let outputValue = convertToOutput(inputValue, inputUnits, outputUnits);
    document.getElementById('result').innerHTML = `${inputValue} ft is ${outputValue} m.`
};