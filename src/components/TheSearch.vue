<template>
    <div class="search">
        <nav class="search__nav nav-search">
            <ul class="nav-search__list">
                <li>
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
import { mapState } from 'vuex';

    export default{
        name: 'the-search',
        computed: {
            ...mapState({
                topMenuItemBackIcon: state => state.topMenuItemBackIcon,
                topMenuItemValue: state => state.topMenuItemValue,
                topMenuItemMenuIcon: state => state.topMenuItemMenuIcon,
                searcher: state => state.searcher,
                query: state => state.query,
            })
        }
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