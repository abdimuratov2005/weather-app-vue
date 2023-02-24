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
    export default{
        name: 'the-maintitle',
        data: () => ({
            countryMain: [
                {id: 1, title: 'Montreal', style: 'letter-spacing: 0.374px;font-size: 34px;line-height: 41px;margin-bottom: 12px' },
                {id: 2, title: '19°', style: 'letter-spacing: 0.374px;font-size: 96px;line-height: 70px;font-weight: 200;margin-bottom: 12px' },
                {id: 3, title: 'Mostly Clear', style: 'color: rgba(235, 235, 245, 0.6);letter-spacing: 0.38px;font-size: 20px;line-height: 24px;font-weight: 300;'},
                {id: 4, title: 'H:24° L:18°', style: 'color: #fff;letter-spacing: 0.38px;font-size: 20px;line-height: 24px;font-weight: 300;'},
            ]
        })
    }
</script>
