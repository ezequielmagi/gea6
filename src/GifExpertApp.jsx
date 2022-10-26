import { useState } from 'react'

export default function GifExpertApp (){

  const [ categories , setCategories ] = useState(['Kiss', 'Foo Fighters'])

  return(
    <div>
      <h1>Gif Expert App</h1>
      {/* TODO: input */}
      <hr />
      <ul>
        {
          categories.map( (category) => (
            <li key={category}>{category}</li>
          ) )
        }
      </ul>
    </div>
  )
}