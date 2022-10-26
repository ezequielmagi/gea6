import { useState } from 'react'

export default function AddCategory( {onAddCategory} ){
  
  const [ inputValue , setInputValue ] = useState('')
  
  const handleChange = ( { target } ) => {
    console.log(target.value)
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory(inputValue)
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