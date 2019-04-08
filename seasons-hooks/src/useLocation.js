import {useState, useEffect} from 'react';



export default () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (data) => setLat(data.coords.latitude),
            (err) => setErrorMessage(err.message)
        );
    }, []);

    return {lat, errorMessage};
}