import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
const KEY = 'AIzaSyBmFdt6EsS0nsLi9OiivEdJ0B-5kebSB7U';


const useVideos = (defaultSeacrhTerm) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        search(defaultSeacrhTerm);

    }, [defaultSeacrhTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });

        // console.log(response.data.items);

        setVideos(response.data.items);

    };
    return { videos, search };
};

export default useVideos;