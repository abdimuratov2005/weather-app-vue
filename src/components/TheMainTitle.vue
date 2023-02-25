<template>
    <div class="country">
        <div class="results" v-if="typeof defaultWeather.main != 'undefined'">
            <div class="title-main">
                <div class="title-main__country">{{ defaultWeather.name }}</div>
                <div class="title-main__temp">{{ Math.round(defaultWeather.main.temp )}}°</div>
                <div class="title-main__discription">Feels Like: {{ Math.round(defaultWeather.main.feels_like )}}°</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapState } from 'vuex';
    
    export default{
        name: 'the-maintitle',
        data(){
            return{
                defaultWeather: {}
            }
        },
        computed: {
            ...mapState({
                mainUrl: state => state.mainUrl,
                apiKey: state => state.apiKey,
            })
        },
        mounted() {
            axios.get(`${this.mainUrl}weather?q=Nukus&units=metric&APPID=${this.apiKey}`)
                .then(response => this.defaultWeather = response.data)
                .catch(err => alert(err))
        },
    }
</script>

<style lang="scss">
    .title-main{
        text-align: center;
        &__country{
            font-size: 34px;
        }
        &__temp{
            font-size: 96px;
        }
        &__discription{
            font-size: 28px;
        }
    }
</style>
