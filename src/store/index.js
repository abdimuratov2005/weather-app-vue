import { createStore } from "vuex";

const options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
}

export default createStore({
        state: {
            homebg: './public/house.png',
            air: './public/detail-block1.png',
            mainPage: false, // ===== MainScreen ====//
            tabItem3: './public/tab-item3.svg',
            dates: new Date(2023, 1, 23).toLocaleString('en-US', options),
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            searcher: '<img src="./public/search.svg">Search for a city or airport',
            query: '',
            topMenuItemBackIcon: './public/top-left-item.svg',
            topMenuItemValue: 'Weather',
            topMenuItemMenuIcon: './public/top-right-item.svg',

            footerNavItems: [
                { id: 1, icon: './public/tab-item1.svg' },
                { id: 2, icon: './public/tab-item2.svg', subtract: './public/subtract.svg' },
            ],
            countryMain: [
                { id: 1, title: 'Montreal', style: 'letter-spacing: 0.374px;font-size: 34px;line-height: 41px;margin-bottom: 12px' },
                { id: 2, title: '19°', style: 'letter-spacing: 0.374px;font-size: 96px;line-height: 70px;font-weight: 200;margin-bottom: 12px' },
                { id: 3, title: 'Mostly Clear', style: 'color: rgba(235, 235, 245, 0.6);letter-spacing: 0.38px;font-size: 20px;line-height: 24px;font-weight: 300;' },
                { id: 4, title: 'H:24° L:18°', style: 'color: #fff;letter-spacing: 0.38px;font-size: 20px;line-height: 24px;font-weight: 300;' },
            ],
            sidebar: [
                { id: 1, icon: './public/Mobile Signal.svg' },
                { id: 2, icon: './public/Wifi.svg' },
                { id: 3, icon: './public/Battery.svg' }
            ],
            imgList: [
                { id: 1, img: './public/detail-block2.png' },
                { id: 2, img: './public/detail-block3.png' },
                { id: 3, img: './public/detail-block4.png' },
                { id: 4, img: './public/detail-block5.png' },
                { id: 5, img: './public/detail-block6.png' },
                { id: 6, img: './public/detail-block7.png' },
                { id: 7, img: './public/detail-block8.png' },
                { id: 8, img: './public/detail-block9.png' }
            ],
            mainWeatherHourlys: [
                { id: 1, header: '12 AM', weatherIcon: './public/rain-cloud-moon.png', footer: '19°' },
                { id: 2, header: 'Now', weatherIcon: './public/rain-cloud-moon.png', footer: '19°' },
                { id: 3, header: '2 AM', weatherIcon: './public/moon-cloud-fast-wind.png', footer: '18°' },
                { id: 4, header: '3 AM', weatherIcon: './public/rain-cloud-moon.png', footer: '19°' },
                { id: 5, header: '4 AM', weatherIcon: './public/rain-cloud-moon.png', footer: '19°' },
                { id: 6, header: '5 AM', weatherIcon: './public/moon-cloud-fast-wind.png', footer: '19°' },
            ],
        },
        getters: {

        },
        mutations: {

        },
        actions: {

        },
    }

)