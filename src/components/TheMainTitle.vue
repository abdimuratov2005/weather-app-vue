<template>
    <div class="country">
        <div class="country__container">
            <ul>
                <li 
                    v-for="country in countryMain" 
                    :key="country.id"
                    :style="country.style"
                >
                    {{ country.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default{
        name: 'the-maintitle',
        computed: {
            ...mapState({
                countryMain: state => state.countryMain,
            })
        }
    }
</script>
