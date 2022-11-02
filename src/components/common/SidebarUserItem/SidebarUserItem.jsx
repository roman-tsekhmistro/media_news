import styles from "./sidebar-user-item.module.scss";

export default function SidebarUserItem({ props }) {
  const { avatar, fullName, comment, time, role } = props;
  return (
    <li className={styles.user}>
      <div className={styles.profile}>
        <img src={avatar} alt={fullName} />
        <div className={styles.info}>
          <div className={styles.full_name}>{fullName}</div>
          <div className={styles.role}>{role}</div>
        </div>
      </div>
      <div className={styles.comment}>{comment}</div>
      <div className={styles.time}>{time}</div>
    </li>
  );
}
