import { getEnvironment } from "../env/getEnvironment";

const getGifs = async (category) => {
    const { VITE_API_KEY } = getEnvironment();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_API_KEY}&q=${ category }&limit=10`
    
    const resp = await fetch ( url );
    const { data } = await resp.json();
    

    // const data = [
    //     {
    //         id: "23434311",
    //         title: "Hermelinda",
    //         url: "http://sdfsdfdfd"
    //     },
    //     {
    //         id: "2343311",
    //         title: "Jose", 
    //         url: "http://sdfsdfdfd"
    //     },
    //     {
    //         id: "434311",
    //         title: "Jacinto",
    //         url: "http://sdfsdfdfd"
    //     }
    // ];

    const gifs = data.map( img => 
        (
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        )
    );
    return gifs;

}

export default getGifs;