import styles from "./video.module.scss";
import HeaderWithBtn from "../../../components/common/HeaderWithBtn";
import RightArrow from "../../../assets/images/videoBlock/right-arr.svg";
import VideoItem from "../../../components/common/VideoItem";
import Button from "../../../components/common/Button";
import { videos } from "../../../data/videos";

export default function Video() {
  return (
    <section className={styles.videos}>
      <HeaderWithBtn
        btnInner={"Більше новин"}
        title={"Відео"}
        icon={RightArrow}
        isFromWhiteToOrange
        isWhiteText
        withoutImg
      />

      <ul className={styles.videos_grid}>
        {videos.map((video) => (
          <VideoItem props={video} />
        ))}
        <Button deleteBtn isWhiteText inner={"Більше"} isSidebarBtn />
      </ul>
    </section>
  );
}
