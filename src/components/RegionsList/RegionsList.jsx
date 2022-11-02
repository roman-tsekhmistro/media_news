import RegionItem from "../common/RegionItem";
import styles from "./regions-list.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { regions } from "../../data/regions";

export default function RegionsList() {
  return (
    <ul className={styles.regions_list}>
      {regions.map((region) => (
        <RegionItem props={region} />
      ))}
      <Swiper
        freeMode={true}
        slidesPerView={"auto"}
        grabCursor={true}
        className={styles.slider}
      >
        {regions.map((region) => (
          <SwiperSlide>
            <RegionItem props={region} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
}
