<template>
    <div class="menu">
        <the-search @changeUIMenu="changeUI"></the-search>
    </div>
</template>

<script>
export default{
    name: 'the-menu',
    methods: {
        changeUI(){
            this.$emit('changeUI',)
        },
    }
}

</script>

<style lang="scss">
        
</style>