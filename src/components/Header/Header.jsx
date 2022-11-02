import styles from "./header.module.scss";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import StatLine from "./StatLine";

export default function Header() {
  return (
    <header className={styles.header}>
      <TopBar />
      <BottomBar />
      <StatLine />
    </header>
  );
}
