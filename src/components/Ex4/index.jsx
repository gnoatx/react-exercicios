import { useState } from "react";
import styles from './colourChange.module.css'

export function ColourChange() {
  const [option, setOption] = useState(true)
  const colour = option ? styles.colourOne : styles.colourTwo
  const buttonFunction = () => {setOption(!option)}
  
  return (
    <button className={colour} onClick={buttonFunction}>
      Clique!
    </button>
  )
}