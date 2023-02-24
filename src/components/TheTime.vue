<template>
    <div 
        class="sidebar__time"
    >
        {{ hours }}:{{ minutes}}
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name: 'the-time',
        computed : {
            ...mapState({
                hours: state => state.hours,
                minutes: state => state.minutes,
            })
        }
    }
</script>