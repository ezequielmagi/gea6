import { useState } from 'react'
import AddCategory from './components/AddCategory'

export default function GifExpertApp (){

  const [ categories , setCategories ] = useState(['Kiss', 'Foo Fighters'])

  const newCategory = (value) => {
    setCategories([value,...categories])
  }

  return(
    <div>
      <h1>Gif Expert App</h1>
      <AddCategory onAddCategory={newCategory} />
      <hr />
      <ul>
        {
          categories.map( category => {
            return  <li key={category}>{category}</li>
          }) 
        }
      </ul>
    </div>
  )
}