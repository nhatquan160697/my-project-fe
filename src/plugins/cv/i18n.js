import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'en': {
        personalInfor: {
            firstName: 'TON THAT NHAT',
            lastName: 'QUAN',
            address: 'K52/73 Dinh Tien Hoang, Hai Chau, Da Nang',
            email: 'nhatquan160697@gmail.com',
            about: 'I like programming and have ability in logical mind, solve practical problems' + ' ' +
            'as well as be good at finding out different ways in every issue. My strengths are designing' + ' ' +
            'as well as creative skills. I am eager to be challenged in order to grow and improve my teamwork and my' + ' ' +
            'professional IT skills.'
        },
        experience: {
            title: 'Experience',
            jobs: {
                rangeTime: ['2019 - Present', '2018 - 2019', 'Summer 2016'],
                title: ['PHP Web Developer', 'Freelancer Web Developer', 'Collaborators'],
                company: ['Sun-Asterisk', 'Freelancer', 'Gmon Solution and Technology Joint Stock'],
                detail: ['Detail 1', 'Detail 2', 'Detail 3']
            }
        }
    },
    'vi': {
        personalInfor: {
            firstName: 'QUÂN',
            lastName: 'TÔN THẤT NHẬT',
            address: 'K52/73 Đinh Tiên Hoàng, Hải Châu, Đà Nẵng',
            email: 'nhatquan160697@gmail.com',
            about: 'Tôi thích ngôn ngữ lập trình và có khả năng tư duy, lập luận để giải quyết các vẫn đề' + ' ' +
            'luôn cố gắng tìm ra những cách tốt nhất để giải quyết nó. Thế mạnh của tôi là có khả năng thiết kế' + ' ' +
            'và sáng tạo. Tôi luôn muốn được thử thách để phát triển bản thân về kỹ năng teamwork và cả technical.'
        },
        experience: {
            title: 'Kinh nghiệm làm việc',
            jobs: {
                rangeTime: ['2019 - Hiện tại', '2017 - 2019', 'Hè 2016'],
                title: ['PHP Web Developer', 'Làm tự do', 'Cộng tác viên'],
                company: ['Sun-Asterisk', '', 'Gmon Solution and Technology Joint Stock'],
                detail: ['Detail 1', 'Detail 2', 'Detail 3']
            }
        }
    }
}

const i18n = new VueI18n({
    locale: 'vi',
    fallbackLocale: 'vi',
    messages
})

export default i18n
