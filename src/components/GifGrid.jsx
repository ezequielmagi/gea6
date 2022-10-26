import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export default function GifGrid ( { category } ) {

  const [ images , setImages ] = useState([])

  const getImages = async () => {
    const image = await getGifs(category)
    setImages(image)
  }

  useEffect( ()=> {
    getImages(category)
  }, [] )
  

  return(
    <div>
      <h3>{ category }</h3>
      <ul>
        {
          images.map( ({id, title, url}) => (
            <div key={id}>
              <img src={url} alt={title} />
              <figcaption>{title}</figcaption>
            </div>
          ) )
        }
      </ul>
    </div>
  )
}