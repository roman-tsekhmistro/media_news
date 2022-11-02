import styles from "./home-page.module.scss";
import Header from "../../components/Header";
import Hero from "./Hero";
import News from "./News";
import Video from "./Video";
import Policy from "./Policy";
import Promo from "./Promo";
import Economy from "./Economy";
import LifeStyle from "./LifeStyle";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className={styles.home_page}>
      <Header />
      <Hero />
      <News />
      <Video />
      <Policy />
      <Promo />
      <Economy />
      <LifeStyle />
      <Footer />
    </div>
  );
}
