import styles from "./video-item.module.scss";
import Play from "../../../assets/images/videoBlock/play.svg";

export default function VideoItem({ props }) {
  const { title, date, img } = props;

  return (
    <li className={styles.video_item}>
      <div className={styles.preview}>
        <img className={styles.play} src={Play} alt={title} />
        <img className={styles.preview} src={img} alt={title} />
      </div>
      <p className={styles.date}>{date}</p>
      <p className={styles.title}>{title}</p>
    </li>
  );
}
