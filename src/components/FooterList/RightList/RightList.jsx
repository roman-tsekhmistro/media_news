import styles from "./right-list.module.scss";
import FooterListItem from "../../common/FooterListItem";
import { footerRightList } from "../../../data/footer";

export default function RightList() {
  return (
    <ul className={styles.right_list}>
      {footerRightList.map((item) => (
        <FooterListItem props={item} />
      ))}
    </ul>
  );
}
