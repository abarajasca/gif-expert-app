import { useEffect, useState } from "react";
import getGifs from "../helpers/GetGifs";

const useFetchGifs = ( category ) => {
    const [gifs,setGifs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const loadGifs = async() => {         
        const theGifs = await getGifs(category);
        setGifs(theGifs);  
        setIsLoading(false); 
    }

     useEffect(() => {
          loadGifs();
     }, []);


    return {
        gifs,
        isLoading
    }
}

export default useFetchGifs
