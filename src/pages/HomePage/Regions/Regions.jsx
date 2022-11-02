import styles from "./regions.module.scss";
import RegionsList from "../../../components/RegionsList";
import HeaderWithBtn from "../../../components/common/HeaderWithBtn";
import Tabs from "../../../components/Tabs";

export default function Regions() {
  return (
    <section className={styles.regions}>
      <HeaderWithBtn
        noMargin
        isBlack
        isOrangeText
        title={"Регіони"}
        btnInner={"Всі новини розділу"}
      />
      <Tabs isRegionsTabs />
      <RegionsList />
    </section>
  );
}
