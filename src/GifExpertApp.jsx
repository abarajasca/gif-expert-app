import React, { useState } from 'react'
import { ReadCategory, GifGrid } from './components';

export default function GifExpertApp() {

  const [categories, setCategories] = useState(['one punch']);

  const addCategory = (category) => {
    if (!categories.find(item => item === category ))        
        setCategories([category,...categories]);
  }

  const removeCategory = (category) => {    
    categories.splice(categories.indexOf(category),1);
    setCategories([...categories]);    
  }

  return (
    <>
      <h1 id="index">Gif Expert App</h1>
           
      <ReadCategory readCategory={ addCategory }></ReadCategory>
      <div className="center">
        {
          categories.map( (category)=>(
            <span key={category} className='center'>
              <a href={`#${ category }`} className="badge rounded-pill bg-secondary">{category}</a>
            </span>
          ))
        }
      </div>      
      
      <ol key={'hola'}>
        { 
            categories.map ( category => (
                <GifGrid key={category} category={category} onRemoveCategory={removeCategory}  ></GifGrid >
                )
            ) 
        }
      </ol>

    </>
  )
}
