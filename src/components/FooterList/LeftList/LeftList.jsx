import styles from "./left-list.module.scss";
import FooterListItem from "../../common/FooterListItem";
import { footerLeftList } from "../../../data/footer";

export default function LeftList() {
  return (
    <ul className={styles.left_list}>
      {footerLeftList.map((item) => (
        <FooterListItem props={item} />
      ))}
    </ul>
  );
}
