import CustomButton from "src/components/common/CustomButton";
import ArcadeCarousel from "src/components/ArcadeCarousel";
import styles from "src/styles/arcade/arcade.styles";

function Arcade() {
  return (
    <div css={styles.arcadePage}>
      <div css={styles.arcadePageTitleBlock}>
        <h1 css={styles.arcadePageTitleBlockMessage}>Arcade</h1>
        <div css={styles.arcadePageNetworkSection}>
          <h6 css={styles.arcadePageNetworkHeading}>Chain</h6>
          <select>
            <option value="ethereum">Ethereum</option>
            <option value="polygon">Polygon</option>
          </select>
        </div>
      </div>
      <div css={styles.arcadePageCarouselsBlock}>
        <div style={{ position: "relative", zIndex: "5" }}>
          <ArcadeCarousel carouselTitle="Shooter" />
        </div>
        <div style={{ position: "relative", zIndex: "4" }}>
          <ArcadeCarousel carouselTitle="Strategy" />
        </div>
        <div style={{ position: "relative", zIndex: "3" }}>
          <ArcadeCarousel carouselTitle="Driving" />
        </div>
        <div style={{ position: "relative", zIndex: "2" }}>
          <ArcadeCarousel carouselTitle="RPG" />
        </div>
        <div style={{ position: "relative", zIndex: "1" }}>
          <ArcadeCarousel carouselTitle="Driving" />
        </div>
      </div>
      <CustomButton css={styles.arcadePageButton} bgColor="#009FE3">
        More games
      </CustomButton>
    </div>
  );
}

export default Arcade;
