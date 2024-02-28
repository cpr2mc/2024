const App = {
    data () {
        return { 
            message: 'Please enter your gade below.',
            percentageGrade: 0,
            letterGrade: undefined,
            output: '',
        };
    },

    computed: {
        aOrAn () {
            return ['A', 'F'].includes(this.letterGrade) ? 'an' : 'a'
        }
    },

    methods: {
        checkGrade () {
                const percentage = parseInt(this.percentageGrade)
                if (percentage < 69) {
                    this.letterGrade = 'F'
                } else if (percentage < 70) {
                    this.letterGrade = 'D'
                } else if (percentage < 80) {
                    this.letterGrade = 'C'
                } else if (percentage < 90) {
                    this.letterGrade = 'B'
                } else {
                   this.letterGrade = 'A'
                }
                
                // wihtout computed property aOrAn is a local variable
                // let aOrAn = ['A', 'F'].includes(this.letterGrade) ? 'an' : 'a'

                // with a computed property aOrAn is a global variable
                this.output = `Your grade is ${this.aOrAn}  ${this.letterGrade}.`            
            }
        }
}

const app = Vue.createApp(App)
app.mount('#app')