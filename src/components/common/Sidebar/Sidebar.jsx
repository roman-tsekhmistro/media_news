import styles from "./sidebar.module.scss";
import Button from "../Button";
import NewsList from "../../NewsList";
import Arrow from "../../../assets/images/sidebarIcons/btnArrow.svg";
import Tabs from "../../Tabs";
import classNames from "classnames/bind";

export default function Sidebar({
  isNewsSidebar = false,
  isPolicySidebar = false,
  isTabs = false,
  isRegionTabs = false,
}) {
  let cx = classNames.bind(styles);

  const sidebarClasses = cx("sidebar", {
    user_sidebar: isPolicySidebar,
  });

  return (
    <aside className={sidebarClasses}>
      {isNewsSidebar ? (
        <header className={styles.header}>
          <h2 className={styles.headline}>Всі новини</h2>
          <Button archive inner={"Архів"} />
        </header>
      ) : null}
      {isPolicySidebar ? (
        <header className={styles.header}>
          <h2 className={styles.headline}>Колонки</h2>
          <Button inner={"Всі колонки"} isOrangeText />
        </header>
      ) : null}
      {isTabs ? <Tabs isSideBarTabs /> : null}
      {isRegionTabs ? <Tabs isRegionsTabs /> : null}
      {isNewsSidebar ? <NewsList isNewsSidebar /> : null}
      {isPolicySidebar ? <NewsList isPolicySidebar /> : null}
      {isNewsSidebar ? (
        <Button icon={Arrow} inner={"Завантажити ще"} isSidebarBtn />
      ) : null}
      {isPolicySidebar ? (
        <Button inner={"Всі колонки"} isSidebarBtn isUserBtn />
      ) : null}
    </aside>
  );
}
