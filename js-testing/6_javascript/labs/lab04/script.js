// JS To Do

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const clearAll = document.getElementById('clear-all')
const input = document.getElementById('item')

// let items
// if (localStorage.getItem('items')) {
//     items = JSON.parse(localStorage.getItem('items'))
// } else {
//     items = []
// }

// let itemsArray = items

// this is the ternary operator method of doing the same thing as the above:
let itemsArray = localStorage.getItem('items') 
? JSON.parse(localStorage.getItem('items'))
: []


localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

// const liMaker = (text) => {
//     const li = document.createElement('li')
//     li.textContent = text
//     ul.appendChild(li)
// }
// this should provide the same functionality as the arrow function expression above
function liMaker(text) {
    const li = document.createElement('li')
    li.textContent = text
    li.id = text

    const removeBtn = document.createElement('button')
    removeBtn.id = text
    removeBtn.classList = 'removeBtn'
    removeBtn.innerHTML = 'remove'
    removeBtn.addEventListener('click', function(e) {
        e.preventDefault()
        removeItem(removeBtn.id)}
        )


    li.appendChild(removeBtn)

    ul.appendChild(li)
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    itemsArray.push({itemDescription: input.value, done: false, deleted: false})
    localStorage.setItem('items', JSON.stringify(itemsArray))
    console.log(itemsArray)
    console.log(localStorage)

    liMaker(input.value)
    input.value = ''
})

data.forEach((item) => {
    liMaker(item)
})

// let removeButtons = document.getElementsByClassName('removeBtn')
// for (let i=0; i<removeButtons.length; i++) {
//     removeButtons[i].addEventListener('click', removeItem(removeButtons[i].id));
//     console.log(removeButtons[i])
// }


function removeItem(id) {
    console.log(id)
    console.log(itemsArray)
    for (i = 0; i < itemsArray.length; i++){
        console.log(itemsArray[i])
        if (itemsArray[i].itemDescription == id) {
            itemsArray.splice(i, 1)
        }
    }
    document.getElementById(id).remove()
    console.log(itemsArray)
    
    
    // itemList.remove()
}

clearAll.addEventListener('click', function () {
    localStorage.clear()
    itemsArray.length = 0
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})