import { Card } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "src/pages/styles";
import Game1Image from "src/assets/game1.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 css={styles.homePlayersReadyText}>Players ready</h1>
      <div css={styles.homeWelcomeMessage}>
        <div css={styles.homeWelcomeMessageWrapper}>
          <span>Welcome to Metacade Beta 👋 Web3 </span>
          <span>Community</span>
        </div>
      </div>
      <div css={styles.homeFeaturedGamesSection}>
        <div>
          <h5>Featured Games</h5>
        </div>
        <Swiper modules={[Navigation]} spaceBetween={24} slidesPerView={3} navigation>
          <SwiperSlide>
            <Card>
              <Image src={Game1Image} alt="game1" />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image src={Game1Image} alt="game1" />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image src={Game1Image} alt="game1" />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image src={Game1Image} alt="game1" />
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
