<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__navbar">
                <ul class="footer__navbar-list">
                    <li
                        v-for="footerNavItem in footerNavItems"
                        :key="footerNavItem.id"
                        @click="footerNavItem.event"
                    >
                        <img :src="footerNavItem.icon" >
                    </li>
                    <li 
                        @click="mainPage == false">
                       <img :src="tabItem3"> 
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex';
    export default{
        name: 'the-footer',
        computed: {
            ...mapState({
                footerNavItems: state => state.footerNavItems,
                mainPage: state => state.mainPage,
                tabItem3: state => state.tabItem3,
            })
        }
    }    
</script>