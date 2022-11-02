import styles from "./slider-controls.module.scss";
import SliderArrow from "../../assets/images/slider-arrow.svg";

export default function SliderControls() {
  return (
    <div className={styles.slider_controls}>
      <img className={styles.left_arrow} src={SliderArrow} alt="Arrow" />
      <div className={styles.counter}>
        <span>1</span>
        <span>/</span>
        <span>5</span>
      </div>
      <img src={SliderArrow} alt="Arrow" />
    </div>
  );
}
