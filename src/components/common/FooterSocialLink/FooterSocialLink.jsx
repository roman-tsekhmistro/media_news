import styles from "./footer-social-link.module.scss";

export default function FooterSocialLink({ item }) {
  const { socialIcon, socialName } = item;

  return (
    <a className={styles.social_link} href={"https://google.com"}>
      <img src={socialIcon} alt={socialName} />
      {socialName}
    </a>
  );
}
