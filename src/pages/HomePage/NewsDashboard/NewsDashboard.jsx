import HeaderWithBtn from "../../../components/common/HeaderWithBtn";
import styles from "./news-dashboard.module.scss";
import NewsPreviewItem from "../../../components/common/NewsPreviewItem";
import NewsList from "../../../components/NewsList";
import Button from "../../../components/common/Button";
import ArrowIcon from "../../../assets/images/region-arrow.svg";
import Tabs from "../../../components/Tabs";
import classNames from "classnames/bind";
import { lifeStyleNews } from "../../../data/lifestyle";
import { policyNews } from "../../../data/policy";
import { economyNews } from "../../../data/economy";

export default function NewsDashboard({
  isLifestyleList = false,
  isPolicyList = false,
  isEconomyList = false,
}) {
  let cx = classNames.bind(styles);

  let newsListStyles = cx("news_list", {
    lifestyle_news_list: isLifestyleList,
    policy_news_list: isPolicyList,
    economy_news_list: isEconomyList,
  });

  let dashboardClasses = cx("news_dashboard", {
    lifestyle_dashboard: isLifestyleList,
  });

  return (
    <section className={dashboardClasses}>
      {isLifestyleList ? (
        <HeaderWithBtn
          title={"Лайфстайл"}
          isOrangeText
          btnInner={"Всі новини розділу"}
          noMargin
        />
      ) : null}
      {isPolicyList ? (
        <HeaderWithBtn
          title={"Політика"}
          isOrangeText
          btnInner={"Всі новини розділу"}
          noMargin
        />
      ) : null}
      {isEconomyList ? (
        <HeaderWithBtn
          title={"Економіка"}
          isOrangeText
          btnInner={"Всі новини розділу"}
          noMargin
        />
      ) : null}
      <div className={styles.dashboard}>
        {isLifestyleList ? (
          <ul className={newsListStyles}>
            {lifeStyleNews.map((news) => (
              <NewsPreviewItem props={news} />
            ))}
          </ul>
        ) : null}
        {isPolicyList ? (
          <ul className={newsListStyles}>
            {policyNews.map((news) => (
              <NewsPreviewItem props={news} />
            ))}
          </ul>
        ) : null}
        {isEconomyList ? (
          <ul className={newsListStyles}>
            {economyNews.map((news) => (
              <NewsPreviewItem props={news} />
            ))}
          </ul>
        ) : null}
        <div className={styles.sidebar}>
          <h4 className={styles.title}>Новини розділу</h4>
          {isEconomyList ? <Tabs isEconomyTabs /> : null}
          {isPolicyList ? <Tabs isPolicyTabs /> : null}
          {isLifestyleList ? <Tabs isLifeStyleTabs /> : null}

          {isPolicyList ? <NewsList isPolicyNews /> : null}
          {isEconomyList ? <NewsList isEconomyNews /> : null}
          {isLifestyleList ? <NewsList isLifestyleSidebar /> : null}
          <Button isBtnWithArrow icon={ArrowIcon} inner={"Більше"} />
        </div>
      </div>
    </section>
  );
}
