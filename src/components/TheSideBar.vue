<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar__container">

            <the-time></the-time>

            <nav class="sidebar__nav nav">
                <ul class="nav__list">
                    <li 
                        v-for="item in sidebar" 
                        :key="item.id" 
                        class="nav__item"
                    >
                        <img :src="item.icon" alt="icon">
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'the-sidebar',
        data : () => ({
            sidebar: [
                {id: 1, icon: './public/Mobile Signal.svg'},
                {id: 2, icon: './public/Wifi.svg'},
                {id: 3, icon: './public/Battery.svg'}
            ],
        })
    }
</script>