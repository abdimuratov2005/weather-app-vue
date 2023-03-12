<template>
    <div class="search">
        <nav class="search__nav nav-search">
            <ul class="nav-search__list">
                <li @click="changeUIMenu">
                    <img :src="topMenuItemBackIcon">             
                </li>
                <li>
                    {{ topMenuItemValue }} 
                </li>
                <li>
                    <img :src="topMenuItemMenuIcon">         
                </li>
            </ul>
        </nav>
        <form @submit.prevent>

            <input
                type="text"
                :placeholder="searcher"
                class="search__form"
                v-model="query"
                @keypress="fetchWeather" 
            >
            <!--   :modelValue="query"
                @update:modelValue="setQuery"  -->
        </form>
        <Transition>
            <div class="results" v-if="typeof weather.main != 'undefined'">
                <div class="default-result">
                    <div class="default-result__container">
                        <div class="default-result__left left-def-result">
                            <div class="left-def-result__temp">{{ Math.round(weather.main.temp )}}°</div>
                            <div class="left-def-result__country">{{weather.name}}, {{ weather.sys.country }}</div>
                        </div>
                        <div class="default-result__right right-def-result">
                            <div class="right-def-result__icon">
                                <div v-if="weather.weather.description = 'light rain'">
                                    <img :src="mainWeatherHourlys[1].weatherIcon">
                                </div>
                                <div v-else-if="weather.weather.description = 'clear sky'">
                                    <img :src="mainWeatherHourlys[2]">
                                </div>
                            </div>
                            <div class="right-def-result__state">{{ weather.weather.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>

    </div>
</template>

<script>
import {  mapState } from 'vuex';
    
    export default{
        name: 'the-search',
        data: () => ({
            query: '',
            weather: {},
        }),
        computed: {
            ...mapState({
                // query: state => state.query,
                topMenuItemBackIcon: state => state.topMenuItemBackIcon,
                topMenuItemValue: state => state.topMenuItemValue,
                topMenuItemMenuIcon: state => state.topMenuItemMenuIcon,
                mainUrl: state => state.mainUrl,
                searcher: state => state.searcher,
                apiKey: state => state.apiKey,
                mainWeatherHourlys: state => state.mainWeatherHourlys,
                // weather: state => state.weather,
            }),
        },
        methods: {
            fetchWeather(e){
                if (this.query.length > 0 && e.key == 'Enter') {
                    try {
                    fetch(`${this.mainUrl}weather?q=${this.query}&units=metric&APPID=${this.apiKey}`)
                        .then(response => response.json())
                        .then(this.result)
                    } catch (e) {
                        alert(e, 'Error on Server or Not Found')
                    }
                }
            },
            result( res){
                this.weather = res
            },
            // ...mapMutations({
            //     setQuery: 'setQuery'
            // }),
            changeUIMenu(){
                this.$emit('changeUIMenu')
            },
            // fetchWeather(e){
            //     this.$store.dispatch('fetchSearch')
            // },
        },
    }
    // 
</script>

<style lang="scss" scoped>
    .v-enter-active,
    .v-leave-active {
        transition: all ease .3s;
        transform: translate(0%, 0%);
        opacity: 1;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        transform: translate(0px, 20%);
    }
    .search{
        padding: 0px 16px;
        &__nav{
        }
        &__form{
            margin: 10px 0px 0px 0px;
            background: linear-gradient(168.44deg, rgba(46, 51, 90, 0.26) 1.62%, rgba(28, 27, 51, 0.26) 95.72%);
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 7px 1px;
            font-size: 20px;
            text-align: center;
            color: #fff;
            &:active,&:focus{
                outline: none;
            }
        }
    }
    .nav-search{
        &__list{
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                &:nth-child(2){
                    position: relative;
                    left: -95px;
                    top: -1px;
                    font-size: 28px;
                    line-height: 34px;
                    letter-spacing: 0.364px;
                }
            }
        }
    }
    .default-result{
        margin: 20px 0px 20px 0px;
        border-radius: 30px;
        padding: 20px;
        background: linear-gradient(90deg, #5936B4 0%, #362A84 103.55%);
        &__container{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .left-def-result{
        &__temp{
            font-size: 64px;
        }
        &__country{
            margin: 10px 0px 0px 0px;
            font-size: 20px;
            line-height: 18px;
            letter-spacing: -0.078px;
        }
    }
    .right-def-result{
        &__state{
            text-align: center;
            font-size: 20px;
            &::first-letter{
                font-size: 30px;
            }
        }
    }
</style>