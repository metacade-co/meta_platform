import CustomButton from "src/components/common/CustomButton";
import ArcadeCarousel from "src/components/ArcadeCarousel";
import styles from "src/pages/arcade/styles";

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
        <ArcadeCarousel
          carouselTitle="Shooter"
          games={[
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaA",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaV",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsad",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaC",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsad",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsah",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsal",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa0",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa1",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa2",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa3",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa4",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa5",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa55",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa66",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa77",
            },
          ]}
        />
        <ArcadeCarousel
          carouselTitle="Strategy"
          games={[
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaA",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaV",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsad",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaC",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsad",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsah",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsal",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa0",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa1",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa2",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa3",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa4",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa5",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa55",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa66",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa77",
            },
          ]}
        />
        <ArcadeCarousel
          carouselTitle="Driving"
          games={[
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaA",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaV",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsad",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaC",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsad",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsah",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsal",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa0",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa1",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa2",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa3",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa4",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa5",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa55",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa66",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa77",
            },
          ]}
        />
        <ArcadeCarousel
          carouselTitle="RPG"
          games={[
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaA",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaV",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsad",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaC",
            },
          ]}
        />
        <ArcadeCarousel
          carouselTitle="Fighting"
          games={[
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaA",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaV",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsad",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsaC",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsad",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsah",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsal",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa0",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa1",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa2",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa3",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa4",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa5",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa55",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa66",
            },
            {
              imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/mars4.png",
              gameName: "dsa77",
            },
          ]}
        />
      </div>
      <CustomButton css={styles.arcadePageButton} bgColor="#009FE3">
        More games
      </CustomButton>
    </div>
  );
}

export default Arcade;
