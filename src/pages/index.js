import { Swiper, SwiperSlide } from "swiper/react";
import styles from "src/styles/styles";
import Game1Image from "src/assets/game1.png";
import Game2Image from "src/assets/game2.png";
import Game3Image from "src/assets/game3.png";
import ExploreImage from "src/assets/exploreImage.png";
import Image from "next/image";
import SwiperFeatureCard from "src/components/common/SwiperFeatureCard";
import { useRef } from "react";
import { ArrowSliderNextButton } from "src/assets/icons";
import CustomButton from "src/components/common/CustomButton";

export default function Home() {
  const swiperRef = useRef();

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
        <div css={styles.homeFeaturedGamesSectionHeader}>
          <h5>Featured Games</h5>
          <h5>Explore Arcade</h5>
        </div>
        <div css={styles.homeSwiperContainer}>
          <Swiper
            css={styles.homeSwiper}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            rewind={true}
            spaceBetween={24}
            slidesPerView="auto"
          >
            <SwiperSlide>
              <SwiperFeatureCard
                image={Game1Image}
                alt="game1"
                text="One part western, one part zombie apocalypse. Who can survive the epic battle in this first person shooter. Latest game by award winn..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperFeatureCard
                image={Game2Image}
                alt="game1"
                text="Build your digital industrial complex, extract resources, create NFT blueprints, and rewards! The latest game added to our Metaverse c... "
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperFeatureCard
                image={Game3Image}
                alt="game1"
                text="The battles take place in arenas full of ramps, platforms and hazards! Hiding is not an option as the sudden-death mechanics..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperFeatureCard
                image={Game1Image}
                alt="game1"
                text="One part western, one part zombie apocalypse. Who can survive the epic battle in this first person shooter. Latest game by award winn..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperFeatureCard
                image={Game2Image}
                alt="game1"
                text="Build your digital industrial complex, extract resources, create NFT blueprints, and rewards! The latest game added to our Metaverse c... "
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperFeatureCard
                image={Game3Image}
                alt="game1"
                text="The battles take place in arenas full of ramps, platforms and hazards! Hiding is not an option as the sudden-death mechanics..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperFeatureCard
                image={Game1Image}
                alt="game1"
                text="One part western, one part zombie apocalypse. Who can survive the epic battle in this first person shooter. Latest game by award winn..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperFeatureCard
                image={Game1Image}
                alt="game1"
                text="One part western, one part zombie apocalypse. Who can survive the epic battle in this first person shooter. Latest game by award winn..."
              />
            </SwiperSlide>
          </Swiper>
          <ArrowSliderNextButton onClick={() => swiperRef.current.slideNext()} css={styles.homeSwiperButton} />
        </div>
      </div>
      <hr css={styles.homeDivider} />
      <div css={styles.homeExploreSection}>
        <div css={styles.homeExploreSectionHeader}>
          <div css={styles.homeExploreSectionHeaderText}>
            <h5>Looking to explore?</h5>
            <h6>Checkout what you can do with Metacade</h6>
          </div>
          <div css={styles.homeExporeSectionHeaderButtons}>
            <CustomButton bgColor="#ffffff" textColor="#000000">
              Game
            </CustomButton>
            <CustomButton bgColor="transparent">Discover</CustomButton>
            <CustomButton bgColor="transparent">Vote</CustomButton>
            <CustomButton bgColor="transparent">Work</CustomButton>
            <CustomButton bgColor="transparent">Shop</CustomButton>
          </div>
        </div>
        <Image src={ExploreImage} alt="explore section image" css={styles.homeExploreSectionImage} />
        <CustomButton bgColor="#009FE3">{"What's Hot"}</CustomButton>
      </div>
    </div>
  );
}
