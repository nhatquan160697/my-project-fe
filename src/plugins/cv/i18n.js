import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'en': {
        firstName: 'TON THAT NHAT',
        lastName: 'QUAN'
    },
    'vi': {
        firstName: 'QUÂN',
        lastName: 'TÔN THẤT NHẬT'
    }
}

const i18n = new VueI18n({
    locale: 'vi',
    fallbackLocale: 'vi',
    messages
})

export default i18n
