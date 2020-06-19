<template>
  <div class="main-wrapper">
    <div class="change-language">
      <select @change="changeLocale">
        <option v-for="lang in languages" :key="lang.title" :value="lang.language" v-bind:selected="lang.language === defaultLanguage">
          {{ lang.title }}
        </option>
      </select>
    </div>
    <Menu />
    <div class="container-fluid p-0">
      <About />
      <Experience />
			<Education />
			<Skills />
			<Interests />
			<Awards />
    </div>
  </div>
</template>

<script>
import Menu from '@/components/cv/Menu.vue'
import About from '@/components/cv/About.vue'
import Experience from '@/components/cv/Experience.vue'
import Education from '@/components/cv/Education.vue'
import Skills from '@/components/cv/Skills.vue'
import Interests from '@/components/cv/Interests.vue'
import Awards from '@/components/cv/Awards.vue'
import i18n from '@/plugins/cv/i18n'

export default {
	data () {
		return {
			title: 'TTNQ BLOG',
      languages: [
        { language: 'en', title: 'English' },
        { language: 'vi', title: 'Vietnamese' }
      ],
      defaultLanguage: i18n.locale
		}
	},
	components: {
		Menu,
		About,
		Experience,
		Education,
		Skills,
		Interests,
		Awards
	},
  methods: {
    changeLocale (event) {
      i18n.locale = event.target.value
    }
  }
}
</script>

<style>
  .change-language {
    float: right;
    padding: 10px;
  }
  .change-language > select {
    padding: 10px;
    background-color: #FDF7EB;
    border: 1px solid #FDF7EB;
    border-radius: 5px;
  }
</style>
