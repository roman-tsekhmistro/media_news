import styles from "./bottom-bar.module.scss";
import Button from "../../common/Button";
import Fire from "../../../assets/images/headerIcons/Fire.svg";
import StreamDot from "../../../assets/images/headerIcons/dot.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper";
import "swiper/css/bundle";
import "swiper/css/free-mode";

export default function BottomBar() {
  const navLinks = [
    {
      hot: Fire,
      title: "Війна",
    },
    { title: "Новини" },
    { title: "Політика" },
    { title: "Економіка" },
    { title: "Суспільство" },
    { title: "Погляди" },
    { title: "Світ" },
  ];

  return (
    <div className={styles.bottom_bar}>
      <ul className={styles.link_list}>
        {navLinks.map((link) => (
          <Button inner={link.title} />
        ))}
        <img className={styles.fire} src={Fire} alt="Fire" />
      </ul>

      <Swiper
        modules={[A11y]}
        spaceBetween={20}
        freeMode={true}
        grabCursor={true}
        slidesPerView={"auto"}
        className={styles.slider}
      >
        {navLinks.map((link) => (
          <SwiperSlide style={{ width: "fit-content" }}>
            <Button isHeaderSlider icon={link?.hot} inner={link.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.stream}>
        <img src={StreamDot} alt="Stream dot" />
        <div className={styles.stream_text}>Live</div>
      </div>
    </div>
  );
}
