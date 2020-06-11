import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'en': {
        personalInfor: {
            firstName: 'TON THAT NHAT',
            lastName: 'QUAN',
            address: 'K52/73 Dinh Tien Hoang, Hai Chau, Da Nang',
            email: 'nhatquan160697@gmail.com'
        }
    },
    'vi': {
        personalInfor: {
            firstName: 'QUÂN',
            lastName: 'TÔN THẤT NHẬT',
            address: 'K52/73 Đinh Tiên Hoàng, Hải Châu, Đà Nẵng',
            email: 'nhatquan160697@gmail.com'
        }
    }
}

const i18n = new VueI18n({
    locale: 'vi',
    fallbackLocale: 'vi',
    messages
})

export default i18n
