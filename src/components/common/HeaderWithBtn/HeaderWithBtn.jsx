import styles from "./header-with-btn.module.scss";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import classNames from "classnames/bind";

export default function HeaderWithBtn({
  icon,
  title,
  btnInner,
  isOrangeText = false,
  isWhiteText = false,
  noMargin = false,
  withoutImg = false,
  isFromWhiteToOrange = false,
}) {
  let cx = classNames.bind(styles);

  const headerClasses = cx("header", {
    without_margin: noMargin,
    without_img: withoutImg,
    from_white_to_orange: isFromWhiteToOrange,
  });

  return (
    <header className={headerClasses}>
      <SectionTitle title={title} isWhiteText={isWhiteText} />
      <Button
        isWhiteText={isWhiteText}
        isOrangeText={isOrangeText}
        icon={icon}
        inner={btnInner}
      />
    </header>
  );
}
