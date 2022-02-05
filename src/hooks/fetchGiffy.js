import { useEffect, useState } from "react";

const fetchGiffy = (keyword) => {
    const [giffyURL, setGiffyURL] = useState('');
    const API_KEY = import.meta.env.VITE_GIPHY_KEY

    const fetchURL = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
            const data = await response.json();
            setGiffyURL(data.data[0].images.downsized_medium.url)
        } catch (error) {
            setGiffyURL('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif')
        }
    }

    useEffect(() => {
        if (keyword) {
            fetchURL();
        }
    }, [keyword])

    return giffyURL
}

export default fetchGiffy