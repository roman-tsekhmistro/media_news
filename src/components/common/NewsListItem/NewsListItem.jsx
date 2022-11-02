import styles from "./news-list-item.module.scss";
import FireIcon from "../../../assets/images/sidebarIcons/newsIcons/fireIcon.svg";
import CameraIcon from "../../../assets/images/sidebarIcons/newsIcons/cameraIcon.svg";
import VideoIcon from "../../../assets/images/policyNewsIcon.svg";
import ExclusiveIcon from "../../../assets/images/lifeStyle/exclusiveIcon.svg";
import SignalIcon from "../../../assets/images/sidebarIcons/policyIcons/signalIcon.svg";

export default function NewsListItem({ props }) {
  return (
    <li className={styles.news_list_item}>
      {props?.hot ? (
        <div className={styles.news_tag}>
          <img src={FireIcon} alt="Fire icon" />
          <p className={styles.hot_news}>Гаряча новина</p>
        </div>
      ) : null}
      {props?.withPhoto ? (
        <div className={styles.news_tag}>
          <img src={CameraIcon} alt="Camera icon" />
          <p className={styles.photo_news}>Новина з фото</p>
        </div>
      ) : null}
      {props?.date ? (
        <div className={styles.news_tag}>
          <p className={styles.publication_date}>{props.date}</p>
        </div>
      ) : null}
      {props?.breaking ? (
        <div className={styles.news_tag}>
          <img src={FireIcon} alt="Fire icon" />
          <p className={styles.hot_news}>Термінова новина</p>
        </div>
      ) : null}
      {props?.videoNews ? (
        <div className={styles.news_tag}>
          <img src={VideoIcon} alt="Video icon" />
          <p className={styles.photo_news}>Новина з відео</p>
        </div>
      ) : null}
      {props?.exclusive ? (
        <div className={styles.news_tag}>
          <img src={ExclusiveIcon} alt="Exclusive icon" />
          <p className={styles.hot_news}>Екслюзив</p>
        </div>
      ) : null}
      {props?.online ? (
        <div className={styles.news_tag}>
          <img src={SignalIcon} alt="Online icon" />
          <p className={styles.hot_news}>Онлайн</p>
        </div>
      ) : null}
      <span className={styles.time}>{props.time}</span>
      <p className={styles.news_title}>{props.title}</p>
    </li>
  );
}
