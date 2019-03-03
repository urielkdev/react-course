import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 3b0605464256a33b9c3b041e5ee90345c429f1d08ad684cc87636409b09dec42'
    }
});