import Button from "../../common/Button";
import styles from "./top-bar.module.scss";
import MagnifyingGlass from "../../../assets/images/headerIcons/MagnifyingGlass.svg";
import Input from "../../common/Input";
import SocialLink from "../../common/SocialLink";
import TelegramIcon from "../../../assets/images/linkIcons/telegram-icon.svg";
import FacebookIcon from "../../../assets/images/linkIcons/facebook-icon.svg";
import InstagramIcon from "../../../assets/images/linkIcons/instagram-icon.svg";
import YouTubeIcon from "../../../assets/images/linkIcons/youtube-icon.svg";
import LanguageSwitch from "../../common/LanguageSwitch";
import MagnifyingGlassForMobile from "../../../assets/images/headerIcons/magnifyingGlassForMobile.svg";

export default function TopBar() {
  const cities = ["Київ", "Одеса", "Харків"];
  const socialLinkIcons = [
    TelegramIcon,
    FacebookIcon,
    InstagramIcon,
    YouTubeIcon,
  ];

  return (
    <div className={styles.top_bar}>
      <div className={styles.menu_and_cities}>
        <Button menuBtn inner={"Меню"} />
        <div className={styles.cities}>
          {cities.map((city) => (
            <Button inner={city} />
          ))}
        </div>
      </div>
      <div className={styles.social_media_and_language}>
        <img
          className={styles.magnifying_glass_for_mobile}
          src={MagnifyingGlassForMobile}
          alt="Magnifying glass for mobile"
        />
        <Input placeholder={"пошук новин"} img={MagnifyingGlass} />
        <ul className={styles.social_links}>
          {socialLinkIcons.map((socialLink) => (
            <SocialLink socialIcon={socialLink} />
          ))}
        </ul>

        <LanguageSwitch />
      </div>
    </div>
  );
}
