import styles from '../../../styles/profil/keyCards.module.css'

export default function KeyCardsBlock(props) {
  const data = props.data
  const name = props.name
  const icon = props.icon
  return (
    <p>
      <img src={icon} alt="icon" />
      <span className={styles.nb}>
        {data} kCal
        <span className={styles.title}>{name}</span>
      </span>
    </p>
  )
}
