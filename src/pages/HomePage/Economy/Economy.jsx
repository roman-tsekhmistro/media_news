import styles from "./economy.module.scss";
import NewsDashboard from "../NewsDashboard";

export default function Economy() {
  return (
    <section className={styles.economy}>
      <NewsDashboard isEconomyList />
    </section>
  );
}
