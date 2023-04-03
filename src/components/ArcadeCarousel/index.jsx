import { Swiper, SwiperSlide } from "swiper/react";
import styles from "src/components/ArcadeCarousel/styles";
import { ArrowSliderNextButton } from "src/assets/icons";
import { useRef, useState } from "react";
import SwiperArcadeSlide from "src/components/common/SwiperArcadeSlide";

function ArcadeCarousel({ carouselTitle, games }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const swiperRef = useRef();

  const Games = games.map((game) => {
    return (
      <SwiperSlide tag="slide" key={game.name}>
        <SwiperArcadeSlide gameInfo={game} />
      </SwiperSlide>
    );
  });

  return (
    <div>
      <h5 css={styles.carouselTitle}>{carouselTitle}</h5>
      <div css={styles.carouselWrapper}>
        <div css={styles.carouselSwiperButton(isButtonVisible)}>
          <ArrowSliderNextButton
            onClick={() => {
              swiperRef.current.slideNext();
            }}
          />
        </div>
        <Swiper
          touchEventsTarget="container"
          nested={true}
          onSwiper={(swiper) => {
            setIsButtonVisible(swiper.size <= swiper.slidesGrid[swiper.slidesGrid.length - 1]);
            swiperRef.current = swiper;
          }}
          loop={true}
          spaceBetween={8}
          slidesPerView="auto"
        >
          {...Games}
        </Swiper>
      </div>
    </div>
  );
}

export default ArcadeCarousel;
