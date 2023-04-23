import Card from "./Card";
import styles from "./CardListing.module.css";

/**
 * Component for displaying a list of cards.
 * @returns {JSX.Element}
 * @constructor
 */
export default function CardListing() {
  return (
    <div className={styles.card_list}>
      <Card title="Keyboard" text="Great keyboard, no keys missing" />
      <Card
        title="Mouse"
        text="Mouse, with five buttons, for all your fingers"
      />
    </div>
  );
}
