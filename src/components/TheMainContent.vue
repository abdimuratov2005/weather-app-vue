<template>
    <div class="mainWeather__house">
        <img :src="homebg">
    </div>
    <div class="mainWeather__weather weather-details">
        <div class="mainWeather__header">
            <p>Hourly Forecast</p>
            <div class="mainWeather__shape"></div>
            <p>Weekly Firecast</p>
        </div>
        <div class="mainWeather__block">
            <div class="mainWeather__hourly">
                <div class="mainWeather-items" v-for="forecasts in forecast.list" :key="forecasts.id">
                    {{ forecasts.dt_txt.trim().split([','], [5]).join() }}
                    {{ Math.round(forecasts.main.temp)}}°
                    <img :src="mainWeatherHourlys[2].weatherIcon">
                </div>
            </div>
        </div>
        
        <div class="weather-details__block">
            <img :src="air" class="detailImg">
            <div class="detail-imglist">
                <img 
                    v-for="img in imgList"
                    :key="img.id"
                    :src="img.img"
                    class="detailImg"
                >
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import axios from 'axios';
    export default{
        name: 'the-mainContent',
        data(){
            return{
                forecast: {}
            }
        },
        computed:{
            // comp() {
            //     console.log()
            // },
            ...mapState({
                homebg: state => state.homebg,
                air: state => state.air,
                imgList: state => state.imgList,
                mainUrl: state => state.mainUrl,
                apiKey: state => state.apiKey,
                mainWeatherHourlys: state => state.mainWeatherHourlys
            })
        },
        mounted() {
            axios.get(`${this.mainUrl}forecast?q=Nukus&units=metric&APPID=${this.apiKey}`)
                .then(response => this.forecast = response.data)
                .catch(err => alert(err))
        },
    }
</script>

<style lang="scss" scoped>
     .detailImg{
        width: 100%;
        margin: 0px 3px;
    }
    .weather-details{
        // overflow-x: auto;
        overflow-y: auto;
    }
    .mainWeather__hourly{
        display: flex;
        text-align: center;
        overflow-y: hidden;
        overflow-x: auto;
        flex-direction: row;
        flex-wrap: nowrap;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
    .mainWeather-items{
        
    }
    .detail-imglist{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
</style>