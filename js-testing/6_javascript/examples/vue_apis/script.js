axios({ // in JavaScript, it is common that a function will take an options/config
    // objects, sometimes as the sole parameter
    url: 'https://icanhazdadjoke.com',
    method: 'get',
    headers: {
        Accept: 'application/json',
    } // the axios(optionsObj) call will return a Promise
    // a Promise is an object representing the eventual
    // fullfillment of rejection of an AJAX Request. 
    // You can use .then on a promis and pass in a callback function
    // to be performed when the promise is resolved
}).then(res => console.log(res.data))

// python version:
// import requests
// requests.get('https://icanhazdadjoke.com')

// VUE

const App = {
    data () {
        return {
            dadJoke: '',
            searchTerm: '',
            jokes: []
        }
    },
    created () {
        this.getDadJoke()
        
    },
    methods: {
        getDadJoke () {
            // console.log({ 'this in getDadJoke': this }) // this is the Vue app
            this.dadJoke = 'Dad joke incoming...',
            axios ({ // this entire thing will return a response
                url: 'https://icanhazdadjoke.com',
                headers: { Accept: 'application/json' },
                method: 'get'
            }).then(res => {
                // console.log({ 'this in .then': this }) // this is the window, if not in an arrow function
                // : this will still be the Vue app, if in an arrow function
                this.dadJoke = res.data.joke
                console.log(res.data)
            })
        },

        searchDadJokes () {
            axios({
                method: 'get',
                url: 'https://icanhazdadjoke.com/search',
                headers: { Accept: 'application/json'},
                params: { term: this.searchTerm }
            }).then(res => {
                console.log(res),
                this.jokes = res.data.results
            })
        }
    }

}

// in a Node Environment you would import just what you need:
// import { createApp } from 'vue' // python from vue import create_app

const app = Vue.createApp(App)

app.mount('#app')