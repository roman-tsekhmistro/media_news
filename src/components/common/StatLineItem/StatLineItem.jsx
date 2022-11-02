import styles from "./stat-line-item.module.scss";

export default function StatLineItem({ img, title, counter }) {
  return (
    <li className={styles.stat_line_item}>
      <img className={styles.img} src={img} alt={title} />
      <p className={styles.text}>
        {title}
        <span className={styles.counter}>{counter}</span>
      </p>
    </li>
  );
}
