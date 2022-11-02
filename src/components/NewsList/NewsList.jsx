import styles from "./news-list.module.scss";
import NewsListItem from "../common/NewsListItem";
import SidebarUserItem from "../common/SidebarUserItem";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { sidebarPolicyUsersList } from "../../data/users";
import { economyList } from "../../data/economy";
import { lifestyleSidebar } from "../../data/lifestyle";
import { policyNewsList } from "../../data/policy";
import { sidebarNewsList } from "../../data/sidebarNews";

export default function NewsList({
  region,
  isPolicyNews = false,
  isNewsSidebar = false,
  isPolicySidebar = false,
  isRegions = false,
  isLifestyleSidebar = false,
  isEconomyNews = false,
}) {
  let cx = classNames.bind(styles);

  const listClasses = cx("news_list", {
    user_list: isPolicySidebar,
    policy_list: isPolicySidebar,
    policy_news_list: isPolicyNews,
    economy_news_list: isEconomyNews,
  });

  return (
    <ul className={listClasses}>
      {isNewsSidebar
        ? sidebarNewsList.map((item) => <NewsListItem props={item} />)
        : null}
      {isPolicyNews
        ? policyNewsList.map((item) => <NewsListItem props={item} />)
        : null}
      {isEconomyNews
        ? economyList.map((item) => <NewsListItem props={item} />)
        : null}
      {isPolicySidebar ? (
        <ul className={styles.users_slider}>
          <Swiper
            freeMode={true}
            grabCursor={true}
            spaceBetween={16}
            slidesPerView={"auto"}
          >
            {sidebarPolicyUsersList.map((sliderItem) => (
              <SwiperSlide>
                <SidebarUserItem props={sliderItem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      ) : null}
      {isPolicySidebar ? (
        <ul className={styles.users_list_for_desktop}>
          {sidebarPolicyUsersList.map((user) => (
            <SidebarUserItem props={user} />
          ))}
        </ul>
      ) : null}

      {isRegions ? <NewsListItem props={region} /> : null}
      {isLifestyleSidebar
        ? lifestyleSidebar.map((item) => <NewsListItem props={item} />)
        : null}
    </ul>
  );
}
