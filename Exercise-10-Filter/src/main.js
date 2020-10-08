import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function (value) {
    return value.toLowerCase();
});

Vue.filter('wordLength', function (value) {
    return value + " (" + value.length + ")";
})

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    },
    computed: {
        reversedText() {
            return this.text1.split("").reverse().join("");
        },
        wordsLength() {
            return this.text1 + " (" + this.text1.length + ")";
        },
    },
});

new Vue({
    el: '#app',
    render: h => h(App)
})
