import Image from "next/image";
import {
  DiscordIcon,
  InstagramIcon,
  LinkedinIcon,
  PacmanIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "src/assets/icons";
import MetacadeLogoWhite from "src/assets/Metacade_Logo-white.png";
import styles from "src/components/Footer/styles";

function Footer() {
  return (
    <div css={styles.footerContainer}>
      <div css={styles.footerNavigation}>
        <ul>
          <li>About</li>
          <li>Whitepaper</li>
          <li>Support</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Tokens</li>
          <li>Vote</li>
          <li>Store</li>
          <li>Jobs</li>
        </ul>
        <div css={styles.footerDivider} />
        <div css={styles.footerMcadePrice}>
          <h4>$MCADE PRICE</h4>
          <div css={styles.footerMcadePricePacmanSection}>
            <PacmanIcon css={styles.footerMcadePricePacmanSectionIcon} />
            <div>
              <p>$ 0.028</p>
              <p>+4.2%</p>
            </div>
          </div>
          <h5>PRESALE NOW</h5>
        </div>
      </div>
      <div>
        <YoutubeIcon />
        <LinkedinIcon />
        <InstagramIcon />
        <TelegramIcon />
        <DiscordIcon />
        <TwitterIcon />
      </div>
      <div css={styles.footerInfoSection}>
        <Image css={styles.footerInfoSectionMcadeLogo} src={MetacadeLogoWhite} alt="white logo" />
        <p>Copyright © 2022 - 2023 Luxe Media LLC. All Rights Reserved</p>
        <ul css={styles.footerInfoSectionLinks}>
          <li>Media Kit</li>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Disclaimer</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
