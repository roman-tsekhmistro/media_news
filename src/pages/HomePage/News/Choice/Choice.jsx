import NewsTable from "../../../../components/NewsTable";
import styles from "./choice.module.scss";
import SectionTitle from "../../../../components/common/SectionTitle";

export default function Choice() {
  return (
    <div className={styles.choice}>
      <SectionTitle title={"Вибір редакції"} />
      <NewsTable />
    </div>
  );
}
