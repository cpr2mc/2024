const App = {
    data() {
        return { 
            message: 'Welcome to Vue',
            inputText: '', // this is required so that the <input v-model="inputText"> would work
            colors: ['red', 'green', 'blue'],
        };
    },
    methods: {
        clickButton () {
            // alert('the button was clicked')
            this.message = 'welcome to Vue and thanks for clicking the button'
        
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')