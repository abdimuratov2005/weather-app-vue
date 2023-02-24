<template>
    <div class="the-body">
        <div class="the-body__container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'the-body',
    }
</script>

<style lang="scss">
    .the-body{
        width: 390px;
        height: 844px;
        border-radius: 44px;
        // background: url('./public/bg-img.png'), no-repeat;
        background: linear-gradient(168.44deg, #2E335A 1.62%, #1C1B33 95.72%);
    }

</style>