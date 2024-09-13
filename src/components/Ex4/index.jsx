import { useState } from "react";
import styles from './colourChange.module.css'

export function ColourChange() {
  const [colour, setColour] = useState(styles.colourOne)

  function change() {
    if (colour == styles.colourOne) {
      setColour(styles.colourTwo)
    } else {
      setColour(styles.colourOne)
    }
  }

  return (
    <button className={colour} onClick={change}>Clique!</button>
  )
}