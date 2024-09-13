import { useState } from "react";
import styles from './toggleVisibility.module.css'

export function ToggleVisibility() {
  const [vis, setVis] = useState(styles.hide)

  function toggleVis() {
    if (vis == styles.hide) {
      setVis(styles.show)
    } else {
      setVis(styles.hide)
    }
  }


  return (
    <div className={styles.div}>
      <strong className={vis}>Segredo 🤫</strong>
      <button onClick={toggleVis}>Clique?</button>
    </div>
  )
}