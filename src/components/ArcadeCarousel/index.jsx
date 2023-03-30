import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "src/components/ArcadeCarousel/styles";
import { ArrowSliderNextButton } from "src/assets/icons";
import { useRef, useState } from "react";

function ArcadeCarousel({ carouselTitle, games }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const swiperRef = useRef();

  const Games = games.map((game) => {
    return (
      <SwiperSlide key={game.gameName} tag="slide">
        <div css={styles.carouselItem}>
          <Image src={game.imageURL} width="256" height="136" alt={game.gameName} />
        </div>
        <div>
          <p>dsadsads</p>
          <p>dsadsads</p>
          <p>dsadsads</p>
          <p>dsadsads</p>
        </div>
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
