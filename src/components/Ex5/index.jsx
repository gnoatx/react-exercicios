import styles from './userProfile.module.css'

export function UserProfile({name, age, photo}) {

  return (
    <div className={styles.card}>
      <img className={styles.img} src={photo}/>
      <div className={styles.data}>
        <strong>Nome: {name}</strong>
        <strong>Idade: {age}</strong>
      </div>
    </div>
  )
}