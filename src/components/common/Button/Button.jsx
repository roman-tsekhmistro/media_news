import classNames from "classnames/bind";
import styles from "./button.module.scss";

export default function Button({
  menuBtn = false,
  inner,
  outlined = false,
  id,
  archive,
  isSidebarBtn = false,
  isBtnWithArrow = false,
  icon,
  isWhiteText = false,
  isOrangeText = false,
  absolute = false,
  isHeaderSlider = false,
  isFromWhiteToOrange = false,
  isUserBtn = false,
  deleteBtn = false,
  isFooterLargeTitle = false,
  isFooterTitle = false,
  isFooterSubTitle = false,
  onClick,
}) {
  let cx = classNames.bind(styles);

  const buttonsClasses = cx("btn", {
    btn_menu: menuBtn,
    btn_outlined: outlined,
    btn_active: id,
    btn_archive: archive,
    btn_sidebar: isSidebarBtn,
    btn_region: isBtnWithArrow,
    btn_white_text_with_transform_to_orange: isFromWhiteToOrange,
    btn_orange_text: isOrangeText,
    btn_absolute: absolute,
    btn_header_link_slider: isHeaderSlider,
    btn_white_text: isWhiteText,
    btn_users_list: isUserBtn,
    delete_btn: deleteBtn,

    footer_btn_large_title: isFooterLargeTitle,
    footer_btn_title: isFooterTitle,
    footer_btn_sub_title: isFooterSubTitle,
  });

  return (
    <button id={id} className={buttonsClasses} onClick={onClick}>
      {inner}
      {icon ? <img src={icon} alt={inner} /> : null}
    </button>
  );
}
