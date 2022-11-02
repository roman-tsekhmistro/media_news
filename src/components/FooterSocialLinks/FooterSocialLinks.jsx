import styles from "./footer-social-links.module.scss";
import FooterSocialLink from "../common/FooterSocialLink";
import { footerSocialLinks } from "../../data/footer";

export default function FooterSocialLinks() {
  return (
    <div className={styles.footer_social_links}>
      <h3 className={styles.title}>Новини у зручному форматі</h3>
      <ul className={styles.social_links_list}>
        {footerSocialLinks.map((socialNetwork) => (
          <FooterSocialLink item={socialNetwork} />
        ))}
      </ul>
    </div>
  );
}
