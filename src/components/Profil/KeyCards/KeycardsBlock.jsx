import styles from '../../../styles/profil/keyCards.module.css'

export default function KeyCardsBlock(props) {
  const data = props.data
  const name = props.name
  const icon = props.icon
  const unit = props.unit
  return (
    <p>
      <img src={icon} alt="icon" />
      <span className={styles.nb}>
        {data} {unit}
        <span className={styles.title}>{name}</span>
      </span>
    </p>
  )
}
