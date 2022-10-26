import { useState } from 'react'

export default function AddCategory( {onAddCategory} ){
  
  const [ inputValue , setInputValue ] = useState('')
  
  const handleChange = ( { target } ) => {
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
      //prevenimos el refresco del submit
    e.preventDefault();
      //Evitamos que se ingrese un string vacío. 
    if(inputValue.trim().length < 1) return
      //Transferimos la información al elemento padre
    onAddCategory(inputValue)
      //Limpiamos el input
    setInputValue('')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Search...'
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}