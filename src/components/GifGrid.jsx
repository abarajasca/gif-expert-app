import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
    
    const {gifs,isLoading} = useFetchGifs(category);

    // const [gifs,setGifs] = useState([]);

    // const loadGifs = async() => { 
    //     const theGifs = await getGifs(category);
    //     setGifs(theGifs);   
    // }

    //  useEffect(() => {
    //       loadGifs();
    //  }, [])

     
    return (
    <>
     <h3> { category } </h3>
     {
        isLoading && <h2>Cargando..</h2>
     }
     
     <div className="card-grid">
     {
        gifs.map ( ( gif ) => (
            <GifItem key={gif.id}
               { ...gif }
            ></GifItem>
          )
        )
     }
     </div>
  
    </>
  )
}

export default GifGrid;
