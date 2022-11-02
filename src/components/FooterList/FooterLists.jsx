import styles from "./footer-lists.module.scss";
import LeftList from "./LeftList";
import RightList from "./RightList";
import MiddleList from "./MiddleList";
import "react-accessible-accordion/dist/fancy-example.css";
import FooterAccordion from "../FooterAccordion";

export default function FooterLists() {
  return (
    <>
      <div className={styles.footer_lists}>
        <LeftList />
        <div className={styles.middle_list}>
          <MiddleList />
        </div>
        <RightList />
      </div>
      <FooterAccordion />
    </>
  );
}
