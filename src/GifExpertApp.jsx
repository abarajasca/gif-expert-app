import React, { useState } from 'react'
import { ReadCategory, GifGrid } from './components';

export default function GifExpertApp() {

  const [categories, setCategories] = useState(['one punch']);

  const addCategory = (category) => {
    if (!categories.find(item => item === category ))        
        setCategories([category,...categories]);
  }

  return (
    <>
      
        {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <ReadCategory readCategory={ addCategory }></ReadCategory>

        {/* <button onClick={addCategory}>Agregar Categoria</button> */}
      {/* Listado de Gif */}
      <ol>
        { 
            categories.map ( category => (
                <GifGrid key={category} category={category}></GifGrid >
                )
            ) 
        }
      </ol>
        {/* Gif Item */}
    </>
  )
}
