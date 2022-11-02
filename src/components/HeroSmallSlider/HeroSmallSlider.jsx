import HeroSliderItem from "../common/HeroSliderItem";
import styles from "./hero-small-slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderItems } from "../../data/heroSmallSlider";

export default function HeroSmallSlider() {
  return (
    <ul className={styles.hero_slider}>
      <Swiper
        freeMode={true}
        grabCursor={true}
        spaceBetween={16}
        slidesPerView={"auto"}
      >
        {sliderItems.map((sliderItem) => (
          <SwiperSlide>
            <HeroSliderItem title={sliderItem.title} img={sliderItem.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
}
