// Vanilla JavaScript without Interacting with the HTML

// this is commented out

/*
this is a multi line comment
*/

// output and feedback via alert and console.log

// alert will display the message in a dialogue box in the browser
// alert('hello world')
//console.log() is more like Python's print, it will print to a log
console.log('I was gonna say that but not make a big deal out of it.')

// getting input from the user, use prompt (like Python's input)
// let message = prompt('type something')
// alert('you typed ' + message)

/* Declaring Variables */

let x = 10
console.log(x)
x += 5
console.log(x)

// const
// const does not allow variable reassignment
const y = 10
console.log(y) // 10
// y += 5 // TypeError: Attempted to assign to readonly property.
// console.log(y)

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
numbers.push(6) // this wors because numbers is not being redefined, the numbers array is using its push method to modify itself
console.log(numbers)
numbers.push('hello')
console.log(numbers)
// numbers = [1, 2, 3, 4, 5, 6, 7] // TypeError: Attempted to assign to readonly property.
// const numbers = [6, 7, 8, 9, 10] // SyntaxError: Cannot declare a const variable twice: 'numbers'

/* Arrays */
// A JavaScript Array is like a Python List... but different

// Python List
// colors = ['red','blue','green']
// colors.append('orange')

// JavaScript Array
let colors = ['red', 'green', 'blue']
colors.push('yellow')
console.log(colors)
colors[2] = 'purple'
console.log(colors)
console.log(colors.length)

/** Objects */
// A JavaScript Object is like a Python Dictionary AND a Python Object

// Python Dictionary
// teacher_dictionary = {'name': 'Pete', 'role': 'Instructor'}

// Python Dictionary
// teacher_dictionary = {'name': 'Pete', 'role': 'Instructor'}

// JavaScript Object
let teacherObject = { name: 'Pete', role: 'Instructor'} // name is a property, and 'Pete' is a value
console.log(teacherObject['name'])
console.log(teacherObject.name) // in JavaScript, you can use dot notation with objects
teacherObject.classType = 'day'
console.log(teacherObject)

// you can chain dot notation together for nested options
let apiResponse = {
    data: {
        location: {
            city: 'Portland',
            state: 'OR',
        },
        forecast: [
            {
                date: 'May 10th',
                high: 40,
                low: 40,
            },
            {
                date: 'May 11th',
                high: 65,
                low: 45,
            }
        ]
    }
}

// tomorrowsHigh is declared using dot notation for objects, and bracket notation for arrays
let tomorrowsHigh = apiResponse.data.forecast[1].high
console.log('Tomorrow\'s high is ' + tomorrowsHigh)

// you can use quotes for string property names, and you have to in some cases:
irregularPropertyNames = {
    'test': 1,
    'XCSRF-Token': 'a;sdifj[19uslckm;3i2r',
    '1moreThing': '123',
}

console.log(irregularPropertyNames.test)
console.log(irregularPropertyNames['test'])

/** Random */
//There is no random module in JavaScript, readily available like in Python
// There is Math.random, a function you can use whenever you need it
// to get a random value between 0 and 1

// get a random element from a list/array in Python/JavaScript
// Python
// # colors is already defined
// import random
// print(random.choice(colors)) # prints out a random color

//JavaScript
console.log(colors)
// console.log(Math.random()), console.log(colors.length) // Math.random() returns a random float between 0 and 1, colors.length returns the number of elementsin the array
// let randFlt = Math.random()
// console.log(randFlt * colors.length)
// console.log(Math.floor(randFlt * colors.length))
// console.log(Math.round(randFlt * colors.length))
console.log(colors[Math.floor(Math.random() * colors.length)])
// console.log(colors[4])
/** Functions */

// Python
// def add(x, y):
    // return x + y

// JavaScript
function add(x, y) {
    return x + y
}

console.log(add(4,6))

// Python Lambda function
// multiple = lambda x, y: x * y # these are sometimes called anonymous functions -- arguments : return value

// JavaScript Arrow Function
// returns what comes after the fat arrow =>
let multiply = (x, y) => x * y
console.log(multiply(3,5))

// you can use curly braces as well for a more complex function
let randomElementFromArray = (array) => {
    let randomNumber = Math.random() * array.length
    let randomIndex = Math.floor(randomNumber)
    let randomElement = array[randomIndex]
    return randomElement
}

console.log(randomElementFromArray(colors))

/**Strings and Numbers */
// python fstring... JavaScript Template Literal 

//JavaScript
let guest = 'Bud'
let eventName = 'Annual Gathering of the Buds'
let message = `Hello ${guest}, thanks for coming to ${eventName}.`
console.log(message)

// Type Conversion in Python
// number = int(input('Please enter a number: '))

// let number = prompt('Please enter a number: ')
// console.log(number)
// console.log(typeof number)
// number = parseInt(number)
// console.log(number)
// console.log(typeof number)

let w = '1'
let z = 2
console.log(w + z) // JS automatically concatenates the two values.
console.log(z + w)

/** For Loops */
//Python
// for color in colors:
    // print(color)

console.log(colors)
for (let i=0; i<colors.length; i++) {
    console.log(i)
    console.log(colors[i])
}

// using the forEach array method to conssole.log for each element of the array
// colors.forEach(color => console.log(color))

/** Conditionals */
// == vs ===
// == will attempt type coercionk === wil not
// rule of thumb: always use ===

console.log(1 == 1) // true
console.log(1 === 1) // true
console.log(1 == '1') // true
console.log(1 === '1') // false

// and: &&
let temperature = 70
let sky = 'clear'
if (temperature > 6 && sky ==='clear') {
    console.log('nice day')
} else if (temperature < 60 || sky === 'cloudy') {
    console.log('not so nice day')
}
