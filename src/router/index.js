import Vue from 'vue'
import Router from 'vue-router'
import MyProject from '@/components/MyProject'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'MyProject',
			component: MyProject
		}
	]
})
