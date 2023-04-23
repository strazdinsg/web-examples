import styles from "./Card.module.css";

/**
 * Card component.
 * @constructor
 */
export default function Card({title, text}) {
  return <div className={styles.card}>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
}
