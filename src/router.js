import * as VueRouter from 'vue-router'
import Home from './components/home/home.vue'
import Valorant from './components/valorant/valorant.vue'
import AscentLanding from './components/valorant/maps/ascent/AscentLanding.vue'
import AscentDetail from './components/valorant/maps/ascent/AscentDetail.vue'
import FractureLanding from './components/valorant/maps/fracture/FractureLanding.vue'
import FractureDetail from './components/valorant/maps/fracture/FractureDetail.vue'

const routes = [
	{path: '/', component: Home},
	{path: '/easyval', component: Valorant},
	{path: '/easyval/ascent', component: AscentLanding},
	{path: '/easyval/ascent/:agent', component: AscentDetail, props: true},
	{path: '/easyval/fracture', component: FractureLanding},
	{path: '/easyval/fracture/:agent', component: FractureDetail, props: true}
]

const router = new VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	routes
})

export default router