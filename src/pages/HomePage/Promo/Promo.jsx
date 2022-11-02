import styles from "./promo.module.scss";
import HeaderWithBtn from "../../../components/common/HeaderWithBtn";
import Megaphone from "../../../assets/images/promo/megaphone.svg";
import PromoImg from "../../../assets/images/promo/promoImg.jpg";
import PromoItem from "../../../components/common/PromoItem";
import Arrow from "../../../assets/images/promo/arrow.svg";
import Button from "../../../components/common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { promoItems } from "../../../data/promo";

export default function Promo() {
  return (
    <section className={styles.promo_section}>
      <div className={styles.promo}>
        <HeaderWithBtn
          title={"Промо"}
          btnInner={"Всі матеріали"}
          isOrangeText
        />
        <div className={styles.promo_content}>
          <div className={styles.promo_top_content}>
            <img src={PromoImg} alt="Promo" />
            <div className={styles.promo_info}>
              <div className={styles.categories}>
                <span className={styles.date}>05 серпня 11:00</span>
                <img src={Megaphone} alt="megaphone" />
                <span className={styles.category_name}>Промо</span>
              </div>
              <h3 className={styles.title}>
                Акція! Телевізори Samsung з вигодою та в оплату частинами до 12
                платежів
              </h3>
            </div>
          </div>
          <ul className={styles.promo_list}>
            {promoItems.map((item) => (
              <PromoItem props={item} />
            ))}
            <Button icon={Arrow} absolute />
          </ul>

          <ul className={styles.promo_mobile_slider}>
            <Swiper
              freeMode={true}
              grabCursor={true}
              spaceBetween={16}
              slidesPerView={"auto"}
            >
              {promoItems.map((item) => (
                <SwiperSlide>
                  <PromoItem props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
}
