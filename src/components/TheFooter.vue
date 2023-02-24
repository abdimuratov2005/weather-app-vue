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
    export default{
        name: 'the-footer',
        data(){
            return{
                tabItem3: './public/tab-item3.svg',
                footerNavItems: [
                    {id: 1, icon: './public/tab-item1.svg'},
                    {id: 2, icon: './public/tab-item2.svg', subtract: './public/subtract.svg'},
                ]
            }
        },
        props: {
            mainPage: {
                type: Boolean,
                required: true,
            }
        }
    }    
</script>