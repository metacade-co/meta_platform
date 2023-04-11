import { Swiper, SwiperSlide } from "swiper/react";
import styles from "src/components/ArcadeCarousel/styles";
import { ArrowSliderNextButton } from "src/assets/icons";
import { useEffect, useRef, useState } from "react";
import SwiperArcadeSlide from "src/components/common/SwiperArcadeSlide";

function ArcadeCarousel({ carouselTitle }) {
  const [games, setGames] = useState();
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isSlideHovered, setIsSlideHovered] = useState(false);
  const swiperRef = useRef();

  useEffect(() => {
    fetch(`http://164.92.203.53:3002/api/games/${carouselTitle}`)
      .then((res) => res.json())
      .then((games) => setGames(games))
      .catch((error) => console.log(error));
  }, [carouselTitle]);

  const Games = games?.map((game) => {
    return (
      <SwiperSlide
        key={game.name}
        onMouseEnter={() => setIsSlideHovered(false)}
        onMouseLeave={() => setIsSlideHovered(true)}
      >
        <SwiperArcadeSlide gameInfo={game} />
      </SwiperSlide>
    );
  });

  return (
    Games && (
      <div>
        <h5 css={styles.carouselTitle}>{carouselTitle}</h5>
        <div css={styles.carouselWrapper}>
          <div css={styles.carouselSwiperButton(isButtonVisible, isSlideHovered)}>
            <ArrowSliderNextButton
              onClick={() => {
                swiperRef.current.slideNext();
              }}
            />
          </div>
          <Swiper
            touchEventsTarget="container"
            nested={true}
            rewind={true}
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
    )
  );
}

export default ArcadeCarousel;
