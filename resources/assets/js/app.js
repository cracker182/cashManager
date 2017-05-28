require('./bootstrap');
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
Vue.use(Buefy);
Vue.component('navigation', require('./components/Navigation.vue'));
Vue.component('calculator', require('./components/Calculator.vue'));

const app = new Vue({
    el: '#app'
});
