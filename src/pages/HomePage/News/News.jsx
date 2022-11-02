import Sidebar from "../../../components/common/Sidebar";
import styles from "./news.module.scss";
import Choice from "./Choice";
import Regions from "../Regions";

export default function News() {
  return (
    <section className={styles.news}>
      <Sidebar isTabs isNewsSidebar />
      <main className={styles.main_content}>
        <Choice />
        <Regions />
      </main>
    </section>
  );
}
