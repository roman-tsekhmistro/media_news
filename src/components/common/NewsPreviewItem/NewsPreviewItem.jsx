import styles from "./news-preview-item.module.scss";
import classNames from "classnames/bind";

export default function NewsPreviewItem({ props, small = false }) {
  let cx = classNames.bind(styles);
  const { img, title, date, large } = props;

  const newsSize = cx("news_preview_item", {
    small: small,
    large_item: large,
  });

  return (
    <li className={newsSize}>
      <img className={newsSize} src={img} alt={title} />
      <p className={styles.date}>{date}</p>
      <p className={styles.title}>{title}</p>
    </li>
  );
}
