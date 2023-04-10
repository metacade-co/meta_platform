import Image from "next/image";
import CustomButton from "../CustomButton";
import styles from "src/components/common/SwiperArcadeSlide/styles";
import { AddToPlaylistIcon, InformationIcon, LikeIcon } from "@/assets/icons";

function SwiperArcadeSlide({ gameInfo }) {
  const gameTags = gameInfo.tags.map((tag, index) => {
    return (
      <>
        <h6>{tag}</h6>
        {gameInfo.tags.length - 1 == index || <span />}
      </>
    );
  });

  return (
    <>
      <div css={styles.carouselItem}>
        <Image src={gameInfo.imageURL} width="256" height="136" alt={gameInfo.name} />
        <div css={styles.carouselItemDetails}>
          <div css={styles.carouselItemDetailsButtonsRow}>
            <CustomButton>Start</CustomButton>
            <div css={styles.carouselItemDetailsButtonsIcons}>
              <AddToPlaylistIcon />
              <LikeIcon />
              <InformationIcon />
            </div>
          </div>
          <h5 css={styles.carouselItemDetailsGameName}>{gameInfo.name}</h5>
          <div css={styles.carouselItemDetailsGameTags}>{gameTags}</div>
        </div>
      </div>
    </>
  );
}

export default SwiperArcadeSlide;
