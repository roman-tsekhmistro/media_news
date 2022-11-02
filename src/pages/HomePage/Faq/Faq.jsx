import styles from "./faq.module.scss";
import FaqPolicyItem from "../../../components/common/FaqPolicyItem";
import { footerFaqList } from "../../../data/footer";

export default function Faq() {
  return (
    <div className={styles.faq}>
      <h3 className={styles.faq_title}>© 2020-2022, ТОВ «Медіа Мережі»</h3>
      <ul className={styles.faq_links}>
        {footerFaqList.map((policy) => (
          <FaqPolicyItem policy={policy} />
        ))}
      </ul>
    </div>
  );
}
