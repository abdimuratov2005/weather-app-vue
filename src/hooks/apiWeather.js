import axios from 'axios';
import { onMounted, ref } from 'vue';

export function apiKeyWeather() {
    const apiKey = ref('b86a789a30353383595b706caf74de53');
    const mainUrl = ref('https://api.openweathermap.org/data/2.5/');
    const weather = ref({});

    const fetching = async => {
        try {
            axios
                .get(`${mainUrl.value}weather?q=${search}&units=metric&appid=${apiKey.value}`)
                .then(response => {
                    return response.json()
                })
        } catch (e) {
            alert("Error Alert!")
        } finally {
            weather.value = results
        }
    }
    onMounted(fetching)
    return {
        apiKey,
        mainUrl,
        weather
    }
};