import styles from "./middle-list.module.scss";
import FooterListItem from "../../common/FooterListItem";
import { footerMiddleList } from "../../../data/footer";

export default function MiddleList() {
  return (
    <>
      {footerMiddleList.map((list) => (
        <ul className={styles.list_item}>
          {list.map((item) => (
            <FooterListItem props={item} />
          ))}
        </ul>
      ))}
    </>
  );
}
