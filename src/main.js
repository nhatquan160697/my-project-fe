// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MyProject from '@/components/MyProject'
import jquery from 'jquery'
import router from './router'
import i18n from '@/plugins/cv/i18n'
import FlagIcon from 'vue-flag-icon'

require('bootstrap')
require('jquery.easing')
require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')

Vue.use(FlagIcon)
Vue.prototype.jquery = jquery
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	i18n,
	components: { MyProject },
	template: '<MyProject />'
})
