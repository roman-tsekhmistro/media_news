import NewsPreviewItem from "../common/NewsPreviewItem";
import styles from "./NewsTable.module.scss";
import Button from "../common/Button";
import Arrow from "../../assets/images/sidebarIcons/btnArrow.svg";
import { newsList } from "../../data/news";

export default function NewsTable() {
  return (
    <ul className={styles.news_table}>
      {newsList.map((news) => (
        <NewsPreviewItem small props={news} />
      ))}
      <Button icon={Arrow} inner={"Завантажити ще"} isSidebarBtn />
    </ul>
  );
}
