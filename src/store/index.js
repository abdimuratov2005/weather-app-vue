import { createStore } from "vuex";
import axios from "axios";
const options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
}

export default createStore({
    state: {
        homebg: './public/house.png',
        air: './public/detail-block1.png',
        tabItem3: './public/tab-item3.svg',
        dates: new Date(2023, 1, 23).toLocaleString('en-US', options),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        mainUrl: 'https://api.openweathermap.org/data/2.5/',
        apiKey: 'YOUR_API_KEY',
        searcher: 'Search for a city or airport',
        topMenuItemBackIcon: './public/top-left-item.svg',
        topMenuItemValue: 'Weather',
        forecast: {},
        // query: '',
        topMenuItemMenuIcon: './public/top-right-item.svg',
        footerNavItems: [
            { id: 1, icon: './public/tab-item1.svg' },
            { id: 2, icon: './public/tab-item2.svg', subtract: './public/subtract.svg' },
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
        getCountryNukus(state) {
            return state.forecast
        },
        getSearchCounty(state) {
            return state.weather
        }
    },
    mutations: {
        changeUI(state) {
            return state.mainPage = !false
        },
        setNukus(state, payload) {
            state.forecast = payload
        },
        setSearch(state, payload) {
            state.weather = payload
        },
    },
    actions: {
        fetchNukus(context) {
            axios.get(`${this.state.mainUrl}forecast?q=Nukus&units=metric&APPID=${this.state.apiKey}`)
                .then(response => context.commit('setNukus', response.data))
                .catch(err => alert(err))
        },
        // fetchSearch(context) {
        //     // if (this.state.query.length > 0) {
        //         try {
        //             fetch(`${this.state.mainUrl}weather?q=${this.state.query}&units=metric&APPID=${this.state.apiKey}`)
        //                 .then(response => context.commit('setSearch', response.data))
        //         } catch (e) {
        //             alert(e, 'Error on Server or Not Found')
        //         }
        //     // }
        // },
    },
})
