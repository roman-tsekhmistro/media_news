import styles from "./stat-line.module.scss";
import PersonnelIcon from "../../../assets/images/lineStatItems/personnel.svg";
import TanksIcon from "../../../assets/images/lineStatItems/tanks.svg";
import ArtilleryIcon from "../../../assets/images/lineStatItems/artillery.svg";
import AviationIcon from "../../../assets/images/lineStatItems/aviation.svg";
import MissileIcon from "../../../assets/images/lineStatItems/missile.svg";
import HelicoptersIcon from "../../../assets/images/lineStatItems/helicopters.svg";
import AfvIcon from "../../../assets/images/lineStatItems/afv.svg";
import StatLineItem from "../../common/StatLineItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import { A11y, Autoplay } from "swiper";

export default function StatLine() {
  const lineItems = [
    { title: "особовий склад", img: PersonnelIcon, counter: "~36 200" },
    { title: "танки", img: TanksIcon, counter: "1 589" },
    { title: "артсистеми", img: ArtilleryIcon, counter: "4 578" },
    { title: "літаки", img: AviationIcon, counter: "220" },
    { title: "РСЗВ", img: MissileIcon, counter: "246" },
    { title: "гелікоптери", img: HelicoptersIcon, counter: "190" },
    { title: "ББМ", img: AfvIcon, counter: "4 578" },
  ];

  return (
    <div className={styles.stat_line}>
      <div className={styles.war_day}>133 день війни</div>
      <Swiper
        loop={true}
        modules={[Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={"auto"}
        freeMode={true}
        grabCursor={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
      >
        {lineItems.map((item) => (
          <SwiperSlide style={{ width: "fit-content" }}>
            <StatLineItem
              title={item.title}
              img={item.img}
              counter={item.counter}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
