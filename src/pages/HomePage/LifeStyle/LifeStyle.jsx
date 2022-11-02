import styles from "./lifestyle.module.scss";
import NewsDashboard from "../NewsDashboard";

export default function LifeStyle() {
  return (
    <section className={styles.lifestyle}>
      <NewsDashboard isLifestyleList />
    </section>
  );
}
