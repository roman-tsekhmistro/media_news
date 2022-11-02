import styles from "./social-link.module.scss";

export default function SocialLink({ socialIcon }) {
  return <img className={styles.icon} src={socialIcon} alt={socialIcon} />;
}
