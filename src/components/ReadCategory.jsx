import React,{ useState } from 'react'

export default function ReadCategory({ readCategory }) {
  
  const [inputValue, setInputValue] = useState('');  

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length >=2 ){
        readCategory(inputValue);
        setInputValue('');
    }
  }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder='Buscar Gifs'
            value={ inputValue }
            onChange={ onInputChange }            
            />
    </form>    
  )
}
