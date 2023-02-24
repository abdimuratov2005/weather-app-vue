<template>
    <div class="main">
        <the-body>
            
            <the-sidebar></the-sidebar>

            <Transition>
                <div 
                    v-if="mainPage"
                >

                    <the-maintitle></the-maintitle>

                    <the-mainContent></the-mainContent>

                    <the-footer
                        :mainPage="mainPage"
                    ></the-footer>

                    </div>
                    <div 
                        v-else
                        class="menuActive"
                    >

                    <the-menu></the-menu>

                </div>
            </Transition>
        </the-body>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default{
        name: 'main-screen',
        computed:{
            ...mapState({
                mainPage: state => state.mainPage,
            })
        }
    }
</script>

<style lang="scss" scoped>
    .main{
        overflow: hidden;
    }
    .v-enter-active,
    .v-leave-active {
        transition: all ease .3s;
        transform: translate(0%, 0px);
        opacity: 1;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        transform: translate(120%, 0px);
    }
    .menuActive{
        &.isActive{
            
        }
    }
    .menuActive .isActive .main{
        background: linear-gradient(168.44deg, #2E335A 1.62%, #1C1B33 95.72%);
        border-radius: 0px;
        width: 100%;
        height: 100%;
    }
</style>
