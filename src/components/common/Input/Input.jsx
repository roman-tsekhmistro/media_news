import styles from "./input.module.scss";

export default function Input({ placeholder, img }) {
  return (
    <>
      <input className={styles.input} placeholder={placeholder} type="text" />
      <img className={styles.magnifying_glass} src={img} alt={placeholder} />
    </>
  );
}
