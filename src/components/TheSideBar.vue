<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar__container">

            <the-time></the-time>
            {{ counter }}

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
import { mapState } from 'vuex';
    export default {
        name: 'the-sidebar',
        computed:{
            ...mapState({
                sidebar: state => state.sidebar,
                counter: state => state.counter,
            })
        }
        
    }
</script>