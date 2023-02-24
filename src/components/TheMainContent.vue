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
        <div class="mainWeather__hourly">
            <div
                class="mainWeather-items"
                v-for="mainWeatherHourly in mainWeatherHourlys"
                :key="mainWeatherHourly.id"
                :style="mainWeatherHourly.style"
            >
                {{ mainWeatherHourly.header }}
                <img :src="mainWeatherHourly.weatherIcon">
                {{ mainWeatherHourly.footermainWeather }}
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
                homebg: state => state.mainContent.homebg,
                air: state => state.mainContent.air,
                imgList: state => state.mainContent.imgList,
                mainWeatherHourlys: state => state.mainContent.mainWeatherHourlys,
            })
        }
    }
</script>

<style lang="scss" scoped>
     .detailImg{
        width: 100%;
        margin: 0px 3px;
    }
    .detail-imglist{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
</style>