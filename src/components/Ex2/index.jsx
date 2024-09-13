import { useState } from "react"
import styles from './counter.module.css'

export function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((prevState) => ++prevState)
  }

  function decrement() {
    setCount((prevState) => --prevState)
  }

  return (
    <div className={styles.counter}>
      <h1>{count}</h1>
      <div className={styles.buttons}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}