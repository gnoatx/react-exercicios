import { useState } from 'react'
import styles from './wordCount.module.css'

export function WordCount() {
  const [userText, setUserText] = useState("")
  let words = userText.trim().split(/\s+/).filter(Boolean)

  return (
    <div className={styles.box}>
      <textarea className={styles.textarea} onChange={e => setUserText(e.target.value)}/>
      <p className={styles.paragraph}>Palavras: {words.length}</p>
    </div>
  )
}