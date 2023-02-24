<template>
    <div class="date">
        {{ dates }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default{
        computed: {
            ...mapState({
                dates: state => state.dates,
            })
        }
    }
</script>
