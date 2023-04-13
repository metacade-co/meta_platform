import {
  ArrowIcon,
  CalcIcon,
  FaceIcon,
  StarIcon,
  UsersIcon,
  YoutubeIcon,
  LinkedinIcon,
  InstagramIcon,
  TelegramIcon,
  DiscordIcon,
  TwitterIcon,
  CommunityLinkTreeIcon,
  CommunityTikTokIcon,
  CommunityYoutubeIcon,
  CommunityLinkedinIcon,
  CommunityInstagramIcon,
  CommunityTelegramIcon,
  CommunityDiscordIcon,
  CommunityTwitterIcon,
  CommunityTwitterIconSmall,
  CommunityInstagramIconSmall,
  CommunityYoutubeIconSmall,
} from "src/assets/icons";
import CardYoutubeImage from "src/assets/CardYoutubeImage.png";
import TableIconImage from "src/assets/tableIcon.png";
import ArticleIcon from "src/assets/articleIcon.png";
import CommunityComingSoonImage from "src/assets/communityComingSoon.png";
import CustomButton from "src/components/common/CustomButton";
import { Swiper } from "swiper/react";
import styles from "src/styles/community/community.styles";
import SmallCard from "src/components/common/CommunityPageCard/SmallCard";
import { css } from "@emotion/react";
import Image from "next/image";
import CustomSwitcher from "src/components/common/CustomSwitcher";
import { useState } from "react";

function Community() {
  const [web3GamingButtonActive, setWeb3GamingButtonActive] = useState(false);
  const [articlesButtonActive, setArticlesButtonActive] = useState(false);

  const communityHeaderButtons = ["Latest", "Activity", "Forum", "Jobs", "Join", "Events"].map((elem) => {
    return <CustomButton key={elem}>{elem}</CustomButton>;
  });
  const joinBlockSocials = [
    <CommunityLinkTreeIcon key="linktree" />,
    <CommunityTikTokIcon key="tiktok" />,
    <CommunityYoutubeIcon key="youtube" />,
    <CommunityLinkedinIcon key="linkedin" />,
    <CommunityInstagramIcon key="instagram" />,
    <CommunityTelegramIcon key="telegram" />,
    <CommunityDiscordIcon key="discord" />,
    <CommunityTwitterIcon key="twitter" />,
  ].map((icon) => icon);

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
          <span css={styles.playersOnlineCircle} />
          <span>418 Web3 Games</span>
        </div>
      </div>
      <section css={styles.communityPageCardsSection}>
        <div css={styles.communityPageCardsSectionRow}>
          <SmallCard
            title="Web3 Gaming"
            titleIcon="🎮"
            buttonComponent={
              <CustomSwitcher
                firstButtonText="Top Communities"
                secondButtonText="Trending"
                isFirstButtonActive={web3GamingButtonActive}
                handleSwitch={setWeb3GamingButtonActive}
              />
            }
          >
            <div css={styles.web3GamingTable}>
              <div css={styles.web3GamingTableRow} style={{ color: "#B0AEB4" }}>
                <div>#</div>
                <div></div>
                <div>Game</div>
                <div>Chain</div>
                <div
                  css={css(`display: flex; align-items: center; justify-content: flex-end; gap: 6px; text-align: end;`)}
                >
                  <span css={styles.playersOnlineCircle} />
                  <span>Players Online</span>
                </div>
              </div>
              <div css={styles.web3GamingTableRow}>
                <div>1</div>
                <Image src={TableIconImage} width="32" height="32" />
                <div>Wild Land</div>
                <div>ETH</div>
                <div>18,102</div>
              </div>
              <div css={styles.web3GamingTableRow}>
                <div>2</div>
                <Image src={TableIconImage} width="32" height="32" />
                <div>Wild Land</div>
                <div>MATIC</div>
                <div>17,189</div>
              </div>
              <div css={styles.web3GamingTableRow}>
                <div>3</div>
                <Image src={TableIconImage} width="32" height="32" />
                <div>Galaxy Fighters Club</div>
                <div>ETH</div>
                <div>16,321</div>
              </div>
              <div css={styles.web3GamingTableRow}>
                <div>4</div>
                <Image src={TableIconImage} width="32" height="32" />
                <div>Codyfight beta</div>
                <div>MATIC</div>
                <div>10,016</div>
              </div>
              <div css={styles.web3GamingTableRow}>
                <div>5</div>
                <Image src={TableIconImage} width="32" height="32" />
                <div>Meta Apes</div>
                <div>ETH</div>
                <div>9,885</div>
              </div>
            </div>
          </SmallCard>
          <SmallCard
            title="Articles"
            titleIcon="📌"
            buttonComponent={
              <CustomSwitcher
                firstButtonText="Recent"
                secondButtonText="Announcements"
                isFirstButtonActive={articlesButtonActive}
                handleSwitch={setArticlesButtonActive}
              />
            }
          >
            <div css={styles.communityPageArticle}>
              <Image src={ArticleIcon} width="64" height="64" />
              <div css={styles.communityPageArticleText}>
                <h4>Our Top 10 List of the Best Play-2-Earn games of 2023</h4>
                <div>
                  <span>Mar 27</span>
                  <span />
                  <span>3 min read</span>
                </div>
              </div>
            </div>
            <div css={styles.communityPageArticle}>
              <Image src={ArticleIcon} width="64" height="64" />
              <div css={styles.communityPageArticleText}>
                <h4>Our Top 10 List of the Best Play-2-Earn games of 2023</h4>
                <div>
                  <span>Mar 27</span>
                  <span />
                  <span>3 min read</span>
                </div>
              </div>
            </div>
            <div css={styles.communityPageArticle}>
              <Image src={ArticleIcon} width="64" height="64" />
              <div css={styles.communityPageArticleText}>
                <h4>Our Top 10 List of the Best Play-2-Earn games of 2023</h4>
                <div>
                  <span>Mar 27</span>
                  <span />
                  <span>3 min read</span>
                </div>
              </div>
            </div>
            <div css={styles.communityPageArticle}>
              <Image src={ArticleIcon} width="64" height="64" />
              <div css={styles.communityPageArticleText}>
                <h4>Our Top 10 List of the Best Play-2-Earn games of 2023</h4>
                <div>
                  <span>Mar 27</span>
                  <span />
                  <span>3 min read</span>
                </div>
              </div>
            </div>
          </SmallCard>
        </div>
        <div css={styles.communityPageCardsSectionRow}>
          <SmallCard textOnly title={"bounties"} titleIcon="👀" subtitle={["Earn $MCADE"]}>
            {`Find bugs and raise issues for rewards. Register for our <a href="https://google.com">bounty program</a>`}
          </SmallCard>
          <SmallCard textOnly title={"work"} titleIcon="🦾" subtitle={["GameFi Job Fair"]}>
            {`Learn & work in web3 gaming. Get in touch to get involved as <a href="https://google.com">a candidate</a> or <a href="https://google.com">company</a>`}
          </SmallCard>
          <SmallCard textOnly title={"grants"} titleIcon="⚡️" subtitle={["Accepting Proposals"]}>
            {`Create Grant proposals, vote and delegate votes. <a href="https://google.com">Go to Grants</a>`}
          </SmallCard>
        </div>
        <div css={styles.communityPageCardsSectionRow}>
          <SmallCard
            textOnly
            title={"Learn"}
            titleIcon={<CalcIcon />}
            subtitle={["Join", "Community", "Discover", "Connect"]}
          >
            {"Learn web3 and GameFi with tools and resources."}
          </SmallCard>
          <SmallCard
            textOnly
            title={"Avatars"}
            titleIcon={<FaceIcon />}
            subtitle={["Play", "Earn", "Social", "Team-up"]}
          >
            {"Explore GameFi and Metaverse to discover web3."}
          </SmallCard>
          <SmallCard
            textOnly
            title={"network"}
            titleIcon={<UsersIcon />}
            subtitle={["Meet", "Jam", "Build", "Network"]}
          >
            {"Find gigs, jobs and learn about potential ventures."}
          </SmallCard>
        </div>
        <div css={styles.communityPageCardsSectionRow}>
          <SmallCard title={"bounties"} titleIcon="👀">
            <p
              css={css(`
                font-weight: 700 !important;
                font-size: 16px !important;
              `)}
            >
              Follow our official socials
            </p>
            <div css={styles.communityPageCardsSectionRowSocials}>{...joinBlockSocials}</div>
          </SmallCard>
        </div>
        <div css={styles.communityPageCardsSectionRow}>
          <SmallCard
            textOnly
            title={"twitter"}
            titleIcon={<CommunityTwitterIconSmall />}
            buttonComponent={<CustomButton>Follow</CustomButton>}
          >
            {"@Metacade_ <br /><br /> Feed Coming Soon"}
          </SmallCard>

          <SmallCard
            textOnly
            title={"instagram"}
            titleIcon={<CommunityInstagramIconSmall />}
            buttonComponent={<CustomButton>Follow</CustomButton>}
          >
            {"@Metacade_ <br /><br /> Feed Coming Soon"}
          </SmallCard>
          <div css={styles.communityPageCardsSectionRowColumn}>
            <SmallCard
              title={"youtube"}
              titleIcon={<CommunityYoutubeIconSmall />}
              buttonComponent={<CustomButton>Subscribe</CustomButton>}
            >
              <div
                css={css(`display: flex; align-items: center; justify-content: center; gap: 16px; font-size: 14px;`)}
              >
                <p>Subscribe to our channel for the latest about web3 GameFi. Item here ok.</p>
                <Image src={CardYoutubeImage} width="200" height="112.5" alt="youtube img" />
              </div>
            </SmallCard>
            <SmallCard title={"links"} titleIcon={"🔗"}>
              <ul>
                <li>
                  <a>Twitch</a>
                </li>
                <li>
                  <a>Discord Server</a>
                </li>
                <li>
                  <a>Telegram</a>
                </li>
                <li>
                  <a>Metablog</a>
                </li>
                <li>
                  <a>Metashop</a>
                </li>
              </ul>
            </SmallCard>
          </div>
        </div>
        <div css={styles.communityPageCardsSectionRow}>
          <Image
            css={css(`flex: 1 1 calc(66.6% + 24px);`)}
            src={CommunityComingSoonImage}
            width="792"
            height="408"
            alt="coming soon"
          />
          <div css={styles.communityPageCardsSectionRowColumn}>
            <SmallCard title="Tools 🛠️ Resources">
              <ul>
                <li>
                  <a>Brand Kit | Docs | GitBook</a>
                </li>
                <li>
                  <a>GameFi for Dummies</a>
                </li>
                <li>
                  <a>Whitepaper PDF</a>
                </li>
              </ul>
            </SmallCard>
            <SmallCard>
              <div css={styles.communityPageCardsSectionRowColumnPlayersOnline}>
                <span />
                <div>
                  <p>Players Online</p>
                  <p>
                    <span css={styles.playersOnlineCircle} />
                    58,613
                  </p>
                </div>
              </div>
            </SmallCard>
            <SmallCard>
              <div css={styles.communityPageCardsSectionRowColumnPlayersOnline}>
                <span />
                <div>
                  <p>Estimated $MCADE Holders</p>
                  <p>10,419</p>
                </div>
              </div>
            </SmallCard>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
