import { useState } from 'react'
import styles from './textBox.module.css'

export function TextBox() {
  const [userText, setUserText] = useState("")

  return (
    <div className={styles.box}>
      <input type="text" onChange={e => setUserText(e.target.value)}/>
      <p className={styles.paragraph}>{userText}</p>
    </div>
  )
}