import Image from "next/image";
import CustomButton from "../CustomButton";
import { Fragment } from "react";
import styles from "src/components/common/SwiperArcadeSlide/styles";
import { AddToPlaylistIcon, InformationIcon, LikeIcon } from "src/assets/icons";
import Link from "next/link";

function SwiperArcadeSlide({ gameInfo }) {
  const gameTags = gameInfo.tags.map((tag, index) => {
    return (
      <Fragment key={tag}>
        <h6>{tag}</h6>
        {gameInfo.tags.length - 1 == index || <span />}
      </Fragment>
    );
  });
  return (
    <>
      <div css={styles.carouselItem}>
        <Link href={`/arcade/game/${gameInfo.id}`}>
          <Image src={gameInfo.imageURL} width="256" height="136" alt={gameInfo.name} />
        </Link>
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
