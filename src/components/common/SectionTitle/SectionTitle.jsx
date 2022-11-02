import styles from "./section-title.module.scss";
import classNames from "classnames/bind";

export default function SectionTitle({
  title,
  isWhiteText = false,
  isBlackText = false,
}) {
  let cx = classNames.bind(styles);

  const titleClasses = cx("title", {
    title_white_text: isWhiteText,
    title_black_text: isBlackText,
  });

  return <h3 className={titleClasses}>{title}</h3>;
}
