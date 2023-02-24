<template>
    <div class="search">
        <nav class="search__nav nav-search">
            <ul class="nav-search__list">
                <li>
                    <img :src="topMenuItems[0].icon">             
                </li>
                <li>
                    {{ topMenuItems[1].value }} 
                </li>
                <li>
                    <img :src="topMenuItems[2].icon">         
                </li>
            </ul>
        </nav>
        <form>

            <input
                type="text" 
                :placeholder="searcher"
                class="search__form"
                v-model="query"
            >
        </form>
    </div>
</template>

<script>
    export default{
        name: 'the-search',
        searcher: '<img src="./public/search.svg">Search for a city or airport',
        query: '',
        topMenuItems: [
            { icon: './public/top-left-item.svg' },
            { value: 'Weather' },
            { icon: './public/top-right-item.svg' },
        ]
    }
</script>

<style lang="scss">
    .search{
        padding: 0px 16px;
        &__nav{
        }
        &__form{
            background: linear-gradient(168.44deg, rgba(46, 51, 90, 0.26) 1.62%, rgba(28, 27, 51, 0.26) 95.72%);
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 7px 0;
            color: #fff;
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
</style>