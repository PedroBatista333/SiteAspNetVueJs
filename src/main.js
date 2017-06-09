import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import Home from './Home.vue'
import CarroEletrico from './CarroEletrico.vue'
import MotorEletricoCombustao from './MotorEletricoCombustao.vue'
import TiposCarroEletrico from './TiposCarroEletrico.vue'
import PoluicaoDosEletricos from './PoluicaoDosEletricos.vue'
import SeraCarroEletricoAlternativa from './SeraCarroEletricoAlternativa.vue'
import Referencias from './Referencias.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/carroEletrico', component: CarroEletrico },
    { path: '/motorEletricoCombustao', component: MotorEletricoCombustao },
    { path: '/tiposCarroEletrico', component: TiposCarroEletrico },
    { path: '/poluicaoDosEletricos', component: PoluicaoDosEletricos },
    { path: '/seraCarroEletricoAlternativa', component: SeraCarroEletricoAlternativa },
    { path: '/referencias', component: Referencias }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')