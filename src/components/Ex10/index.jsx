import { useState } from 'react'
import styles from './gallery.module.css'

export function Gallery({images}) {
  const [size, setSize] = useState(false)
  const [currentImage, setCurrentImage] = useState("")
  const imgSize = (image) => (currentImage === image) ?  styles.imgBig : styles.img

  return (
    <div>
      <ul className={styles.cards}>
        {images.map(item => (
          <li
            key={item}
            onClick={() => {(currentImage === item) ? setCurrentImage("") : setCurrentImage(item)}}
          >
            <img src={item} className={imgSize(item)}/>
          </li>
        ))}
      </ul>
    </div>
  )
}