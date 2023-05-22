import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaces = async (ne, sw) => {
    try {
        const options = {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng
            },
            headers: {
                'X-RapidAPI-Key': 'b680c08654mshd9426b5867abef5p19a0dfjsn8ec470b2173b',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };

        const {data: { data }} = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.error(error)
    }
}