import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

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
         <hr />
         <span> 
            <h3 id={category}> { category }</h3>
         </span>
         <span className="center">
            <a href='#index'>Indice</a>
         </span>|
         <span className="center">
            <button className="btn btn-outline-primary" onClick={() => onRemoveCategory(category)}>
               Remover
            </button>
         </span>
         <br/>
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

GifGrid.propTypes = {
   category: PropTypes.string.isRequired,
   onRemoveCategory: PropTypes.func.isRequired   
}

export default GifGrid;
