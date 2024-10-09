import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category, onRemoveCategory }) => {
    
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
         <span> 
            <h3 id={category}> { category }</h3>
         </span>
         <span className="center">
            <a href='#index'>Indice</a>
         </span>|
         <span className="center">
            <button onClick={() => onRemoveCategory(category)}>
               Remover
            </button>
         </span> 
         <hr/>
         <br/>
      
     
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
