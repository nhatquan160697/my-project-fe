// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import jquery from 'jquery'
import router from './router'
import vSelect from 'vue-select'
import i18n from '@/plugins/cv/i18n'
import VueFlags from '@growthbunker/vueflags'
import MyProject from '@/components/MyProject'

require('bootstrap')
require('jquery.easing')
require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')
require('@/assets/styles/template.css')

Vue.prototype.jquery = jquery
Vue.config.productionTip = false
Vue.component('v-select', vSelect)
Vue.use(VueFlags, {
	iconPath: '/assets/images/vueflags/flags/'
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	i18n,
	components: { MyProject },
	template: '<MyProject />'
})
