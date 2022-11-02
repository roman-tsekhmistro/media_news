import styles from "./hero.module.scss";
import SliderControls from "../../../components/SliderControls";
import HeroSmallSlider from "../../../components/HeroSmallSlider";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей,
        які б таке допускали, в нашій команді немає»
      </h1>
      <SliderControls />
      <HeroSmallSlider />
    </section>
  );
}
