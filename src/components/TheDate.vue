<template>
    <div class="date">
        {{ dates }}
    </div>
</template>

<script>

    const options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    }

    export default {
        data: () => ({
            dates: new Date(2023,1,23).toLocaleString('en-US', options),
        })
    }
</script>
