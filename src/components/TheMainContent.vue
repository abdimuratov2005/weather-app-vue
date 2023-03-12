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
                <div class="mainWeather-items" v-for="forecasts in $store.getters.getCountryNukus.list" :key="forecasts.id">
                    <div class="mainWeather__time">{{ forecasts.dt_txt.slice(11, 16) }}</div> <!--   2023-03-12 00:00:00  -->
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
    export default{
        name: 'the-mainContent',
        computed:{
            ...mapState({
                homebg: state => state.homebg,
                air: state => state.air,
                imgList: state => state.imgList,
                mainWeatherHourlys: state => state.mainWeatherHourlys,
            }),
        },
        mounted() {
            this.$store.dispatch('fetchNukus')
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
    .detail-imglist{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
</style>