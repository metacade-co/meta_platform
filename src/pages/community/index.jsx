import { ArrowIcon, StarIcon } from "src/assets/icons";
import CustomButton from "src/components/common/CustomButton";
import { Swiper } from "swiper/react";
import styles from "src/styles/community/community.styles";
import { YoutubeIcon, LinkedinIcon, InstagramIcon, TelegramIcon, DiscordIcon, TwitterIcon } from "src/assets/icons";
import CommunityPageCard from "src/components/common/CommunityPageCard";
import SmallCard from "src/components/common/CommunityPageCard/SmallCard";

function Community() {
  const communityHeaderButtons = ["Latest", "Activity", "Forum", "Jobs", "Join", "Events"].map((elem) => {
    return <CustomButton key={elem}>{elem}</CustomButton>;
  });

  return (
    <div css={styles.communityPage}>
      <div css={styles.communityPageHeader}>
        <h1 css={styles.communityPageHeading}>Community</h1>
        <div css={styles.communityHeaderButtons}>{communityHeaderButtons}</div>
      </div>
      <div>
        <Swiper />
      </div>
      <div css={styles.communityPageArrow}>
        <ArrowIcon />
      </div>
      <div css={styles.communityPageMetacadeComminityIcons}>
        <h3>The Metacade Community</h3>
        <div css={styles.communityPageSocials}>
          <YoutubeIcon />
          <LinkedinIcon />
          <InstagramIcon />
          <TelegramIcon />
          <DiscordIcon />
          <TwitterIcon />
        </div>
        <StarIcon />
        <div css={styles.communityPageActiveUsersBlock}>
          <span>41,507 Members</span>
          <span />
          <span>418 Web3 Games</span>
        </div>
      </div>
      <section css={styles.communityPageCardsSection}>
        <div css={styles.communityPageCardsSectionRow}>
          <SmallCard title={"bounties"} titleIcon="👀" subtitle={["Join", "Earn"]}>
            dsasdasdasdsa
          </SmallCard>
          <SmallCard title={"bounties"} titleIcon="👀" subtitle={["Join", "Earn"]}>
            dsasdasdasdsa
          </SmallCard>
        </div>
        <div css={styles.communityPageCardsSectionRow}>
          <SmallCard title={"bounties"} titleIcon="👀" subtitle={["Earn $MCADE"]}>
            {`Find bugs and raise issues for rewards. Register for our <a href="https://google.com">bounty program</a>`}
          </SmallCard>
          <SmallCard title={"work"} titleIcon="🦾" subtitle={["GameFi Job Fair"]}>
            {`Learn & work in web3 gaming. Get in touch to get involved as <a href="https://google.com">a candidate</a> or <a href="https://google.com">company</a>`}
          </SmallCard>
          <SmallCard title={"grants"} titleIcon="⚡️" subtitle={["Accepting Proposals"]}>
            {`Create Grant proposals, vote and delegate votes. <a href="https://google.com">Go to Grants</a>`}
          </SmallCard>
        </div>
        <div css={styles.communityPageCardsSectionRow}>
          <SmallCard title={"Learn"} titleIcon="👀" subtitle={["Join", "Community", "Discover", "Connect"]}>
            {"Learn web3 and GameFi with tools and resources."}
          </SmallCard>
          <SmallCard title={"Avatars"} titleIcon="👀" subtitle={["Play", "Earn", "Social", "Team-up"]}>
            {"Explore GameFi and Metaverse to discover web3."}
          </SmallCard>
          <SmallCard title={"network"} titleIcon="👀" subtitle={["Meet", "Jam", "Build", "Network"]}>
            {"Find gigs, jobs and learn about potential ventures."}
          </SmallCard>
        </div>
        <div css={styles.communityPageCardsSectionRow}>
          <SmallCard title={"bounties"} titleIcon="👀" subtitle={["Join", "Earn"]}>
            Find gigs, jobs and learn about potential ventures.
          </SmallCard>
        </div>
      </section>
    </div>
  );
}

export default Community;
