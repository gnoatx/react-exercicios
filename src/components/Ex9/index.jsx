import { useState } from "react"
import styles from './calculator.module.css'

export function Calculator() {
  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)
  const result = numberOne + numberTwo

  return (
    <div className={styles.div}>
      <input
        className={styles.input}
        type="text"
        inputMode="numeric" 
        onChange={e => setNumberOne(Number(e.target.value))}
      />
      +
      <input
        className={styles.input}
        type="text"
        inputMode="numeric" 
        onChange={e => setNumberTwo(Number(e.target.value))}
      />
      =
      <h2>{result}</h2>
    </div>
  )
}