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
                        @changeUI="changeWindow"
                    
                    ></the-footer>

                    </div>
                    <div 
                        v-else
                        class="menuActive"
                    >

                    <the-menu
                        @changeUI="changeWindow"
                    >

                    </the-menu>
                </div>
            </Transition>
        </the-body>
    </div>
</template>

<script>
    export default{
        name: 'main-screen',
        data(){
            return{
                mainPage: true, // ===== MainScreen ====//
            }
        },
        methods: {
            changeWindow(){
                this.mainPage =! this.mainPage
            }
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
        transform: translate(0, 1%);
    }
</style>
