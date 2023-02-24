<template>
    <div 
        class="sidebar__time"
    >
        {{ hours }}:{{ minutes}}
    </div>
</template>

<script>
    export default {
        name: 'the-time',
        data: () => ({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
        }),
    }
</script>