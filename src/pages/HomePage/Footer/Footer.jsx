import styles from "./footer.module.scss";
import FooterLists from "../../../components/FooterList";
import FooterSocialLinks from "../../../components/FooterSocialLinks";
import Faq from "../Faq/Faq";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <FooterLists />
      <FooterSocialLinks />
      <Faq />
    </section>
  );
}
