import styles from "./region-item.module.scss";
import NewsListItem from "../NewsListItem";
import Button from "../Button";
import RegionArrow from "../../../assets/images/region-arrow.svg";

export default function RegionItem({ props }) {
  return (
    <li className={styles.region_item}>
      {props.map((item) => {
        return (
          <div className={styles.region_content}>
            <h2>{item.region}</h2>
            <NewsListItem props={item} />
          </div>
        );
      })}
      <Button inner={"Більше новин"} icon={RegionArrow} isBtnWithArrow />
    </li>
  );
}
