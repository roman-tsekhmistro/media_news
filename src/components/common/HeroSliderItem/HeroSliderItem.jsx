import styles from "./hero-slider-item.module.scss";

export default function HeroSliderItem({ title, img }) {
  return (
    <li className={styles.item}>
      <img className={styles.img} src={img} alt={title} />
      <p className={styles.text}> {title}</p>
    </li>
  );
}
