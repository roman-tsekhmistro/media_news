import styles from "./promo-item.module.scss";

export default function PromoItem({ props }) {
  const { date, title } = props;

  return (
    <li className={styles.promo_item}>
      <p className={styles.date}>{date}</p>
      <h4 className={styles.title}>{title}</h4>
    </li>
  );
}
